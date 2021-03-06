/**
 * BASIC Authentication
 *
 * Simple authentication script intended to be run by Amazon Lambda to
 * provide Basic HTTP Authentication for a static website hosted in an
 * Amazon S3 bucket through Cloudfront.
 *
 * https://hackernoon.com/serverless-password-protecting-a-static-website-in-an-aws-s3-bucket-bfaaa01b8666
 */

exports.handler = (event, context, callback) => {
  // Get request and request headers
  const { request } = event.Records[0].cf;
  const { headers } = request;

  const authString = `Basic ${Buffer.from(process.env.AUTH_STRING).toString('base64')}`;

  // Require Basic authentication
  if (typeof headers.authorization === 'undefined' || headers.authorization[0].value !== authString) {
    const body = 'Unauthorized';
    const response = {
      status: '401',
      statusDescription: 'Unauthorized',
      body,
      headers: {
        'www-authenticate': [{ key: 'WWW-Authenticate', value: 'Basic' }],
      },
    };
    callback(null, response);
  }

  // Continue request processing if authentication passed
  callback(null, request);
};
