/*

new.js - new S3EventStore(options) test

The MIT License (MIT)

Copyright (c) 2013 Tristan Slominski

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

"use strict";

var AWS = require('aws-sdk'),
    S3EventStore = require('../index.js');

var test = module.exports = {};

test['new S3EventStore() configures AWS accessKeyId and secretAccessKey from options'] = function (test) {
    test.expect(2);
    var accessKeyId = "ACCESS";
    var secretAccessKey = "SECRET";
    var s3EventStore = new S3EventStore({
        AWS: AWS,
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    });
    test.equal(AWS.config.credentials.accessKeyId, accessKeyId);
    test.equal(AWS.config.credentials.secretAccessKey, secretAccessKey);
    test.done();
};

test['new S3EventStore() configures AWS region from options'] = function (test) {
    test.expect(1);
    var region = 'us-east-1';
    var s3EventStore = new S3EventStore({
        AWS: AWS,
        region: region
    });
    test.equal(AWS.config.region, region);
    test.done();
};

test['new S3EventStore() configures AWS sslEnabled from options'] = function (test) {
    test.expect(1);
    var s3EventStore = new S3EventStore({
        AWS: AWS,
        sslEnabled: false // testing false because default is true
    });
    test.strictEqual(AWS.config.sslEnabled, false);
    test.done();
};

test['new S3EventStore() configures S3 bucket selection from options'] = function (test) {
    test.expect(1);
    var s3EventStore = new S3EventStore({
        AWS: AWS,
        s3Bucket: 'all-events'
    });
    test.equal(s3EventStore.s3.config.params.Bucket, 'all-events');
    test.done();
};