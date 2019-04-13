deploy-hostedzone: 
	aws cloudformation deploy \rf
	--template-file infra/hostedzone.yml \
	--stack-name carolinemarcks-hostedzone \
	--no-fail-on-empty-changeset

deploy-certificate: 
	aws cloudformation deploy \
	--template-file infra/certificate.yml \
	--stack-name carolinemarcks-certificate \
	--no-fail-on-empty-changeset

deploy-cloudfront:
	aws cloudformation deploy \
	--template-file infra/cloudfront.yml \
	--stack-name carolinemarcks-cloudfront \
	--no-fail-on-empty-changeset

deploy-site:
	$(eval BUCKET=$(shell aws cloudformation describe-stacks --stack-name carolinemarcks-cloudfront --region us-east-1 --query "Stacks[].Outputs[?OutputKey=='StaticBucketName'].OutputValue" --output text))
	aws s3 cp index.html s3://$(BUCKET)/index.html 