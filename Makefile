deploy-artifact-bucket:
	aws cloudformation deploy \
		--template-file infra/artifact-bucket.yml \
		--stack-name carolinemarcks-artifact-bucket \
		--parameter-overrides BucketName=carolinemarcks-artifact-bucket \
		--no-fail-on-empty-changeset

deploy-hostedzone:
	aws cloudformation deploy \
		--template-file infra/hostedzone.yml \
		--stack-name carolinemarcks-hostedzone \
		--no-fail-on-empty-changeset

deploy-certificates:
	aws cloudformation deploy \
		--template-file infra/certificates.yml \
		--stack-name carolinemarcks-certificate \
		--no-fail-on-empty-changeset

__set-staging:
	$(eval CLOUDFRONT_STACK=carolinemarcks-cloudfront-staging)
	$(eval API_STACK=carolinemarcks-api-staging)
	$(eval DOMAIN_NAME=staging.carolinemarcks.dev)
	$(eval CERTIFICATE_IMPORT=carolinemarcks-dev-StagingCertificateArn)

__set-prod:
	$(eval CLOUDFRONT_STACK=carolinemarcks-cloudfront)
	$(eval API_STACK=carolinemarcks-api)
	$(eval DOMAIN_NAME=carolinemarcks.dev)
	$(eval CERTIFICATE_IMPORT=carolinemarcks-dev-CertificateArn)

__has_auth_string:
	@ if [ -z $(AUTH_STRING) ]; then \
		echo "AUTH_STRING variable not set"; \
		exit 1; \
	fi

__build_edge:  __has_auth_string
	@AUTH_STRING=$(AUTH_STRING) npm run build:edge

__deploy-cloudfront:
	sam package \
		--template-file infra/cloudfront.yml \
		--s3-bucket carolinemarcks-artifact-bucket \
		--output-template-file dist/packaged-cloudfront.yml
	aws cloudformation deploy \
		--template-file dist/packaged-cloudfront.yml \
		--stack-name $(CLOUDFRONT_STACK) \
		--parameter-overrides \
			DomainName=$(DOMAIN_NAME) \
			CertificateArnImport=$(CERTIFICATE_IMPORT) \
			GatewayDomainNameImport=$(API_STACK)-GatewayDomainName \
		--capabilities CAPABILITY_IAM \
		--no-fail-on-empty-changeset

__deploy-site:
	DOMAIN_NAME=$(DOMAIN_NAME) npm run build:site
	$(eval BUCKET=$(shell aws cloudformation list-stack-resources --stack-name $(CLOUDFRONT_STACK) --query "StackResourceSummaries[?LogicalResourceId=='StaticBucket'].PhysicalResourceId" --output text))
	aws s3 sync dist/site s3://$(BUCKET)
	$(eval CDN_DISTRIBUTION_ID=$(shell aws cloudformation list-stack-resources --stack-name $(CLOUDFRONT_STACK) --query "StackResourceSummaries[?LogicalResourceId=='CloudFrontDistribution'].PhysicalResourceId" --output text))
	aws cloudfront create-invalidation --distribution-id $(CDN_DISTRIBUTION_ID) --paths "/*"

__deploy-api:
	npm run build:api
	sam package \
		--template-file infra/api.yml \
		--s3-bucket carolinemarcks-artifact-bucket \
		--output-template-file dist/packaged-api.yml
	aws cloudformation deploy \
		--template-file dist/packaged-api.yml \
		--stack-name carolinemarcks-api \
		--capabilities CAPABILITY_IAM

deploy-api-prod: __set-prod __deploy-api

deploy-api-staging: __set-staging __deploy-api

deploy-cloudfront-prod: __set-prod __deploy-cloudfront

deploy-cloudfront-staging: __set-staging __build_edge __deploy-cloudfront

deploy-site-prod: __set-prod __deploy-site

deploy-site-staging: __set-staging __deploy-site