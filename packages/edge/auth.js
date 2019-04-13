/**
 * BASIC Authentication
 *
 * Simple authentication script intended to be run by Amazon Lambda to
 * provide Basic HTTP Authentication for a static website hosted in an
 * Amazon S3 bucket through Cloudfront.
 *
 * https://hackernoon.com/serverless-password-protecting-a-static-website-in-an-aws-s3-bucket-bfaaa01b8666
 */
 
'use strict';
 
exports.handler = (event, context, callback) => {
 
    // Get request and request headers
    const request = event.Records[0].cf.request;
    const headers = request.headers;
 
    // NOTE - DO NOT COMMIT THIS WITH REAL CREDENTIALS
    // Lambda@Edge does not support env vars, so we just have to remember to update this before deploying
    // We *could* make a network request to resolve the var, but would cost $$ so it's not worth it atm
    const authString = 'Basic ' + new Buffer('').toString('base64');
 
    // Require Basic authentication
    if (typeof headers.authorization == 'undefined' || headers.authorization[0].value != authString) {
        const body = 'Unauthorized';
        const response = {
            status: '401',
            statusDescription: 'Unauthorized',
            body: body,
            headers: {
                'www-authenticate': [{key: 'WWW-Authenticate', value:'Basic'}]
            },
        };
        callback(null, response);
    }
 
    // Continue request processing if authentication passed
    callback(null, request);
};