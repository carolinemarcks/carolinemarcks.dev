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

deploy-cloudfront:
	sam package \
		--template-file infra/cloudfront.yml \
		--s3-bucket carolinemarcks-artifact-bucket \
		--output-template-file dist/packaged-cloudfront.yml
	aws cloudformation deploy \
		--template-file dist/packaged-cloudfront.yml \
		--stack-name carolinemarcks-cloudfront \
		--capabilities CAPABILITY_IAM \
		--no-fail-on-empty-changeset

deploy-cloudfront-staging:
	@echo "MAKE SURE YOU UPDATE THE USERNAME AND PASSWORD IN auth.js, BUT DON'T COMMIT IT"
	sam package \
		--template-file infra/cloudfront-staging.yml \
		--s3-bucket carolinemarcks-artifact-bucket \
		--output-template-file dist/packaged-cloudfront-staging.yml
	aws cloudformation deploy \
		--template-file dist/packaged-cloudfront-staging.yml \
		--stack-name carolinemarcks-cloudfront-staging \
		--capabilities CAPABILITY_IAM \
		--no-fail-on-empty-changeset

deploy-site:
	$(eval BUCKET=$(shell aws cloudformation describe-stacks --stack-name carolinemarcks-cloudfront --region us-east-1 --query "Stacks[].Outputs[?OutputKey=='StaticBucketName'].OutputValue" --output text))
	aws s3 cp index.html s3://$(BUCKET)/index.html

deploy-site-staging:
	$(eval STAGING_BUCKET=$(shell aws cloudformation describe-stacks --stack-name carolinemarcks-cloudfront-staging --region us-east-1 --query "Stacks[].Outputs[?OutputKey=='StagingStaticBucketName'].OutputValue" --output text))
	aws s3 cp index.html s3://$(STAGING_BUCKET)/index.html 