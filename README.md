# s3-eventstore

_Stability: 1 - [Experimental](https://github.com/tristanls/stability-index#stability-1---experimental)_

![latest published module version](https://badge.fury.io/js/s3-eventstore.png)

Store events in S3.

## Installation

    npm install s3-eventstore

## Tests

    npm test

## Overview

S3EventStore is a simple client to store events in an S3 bucket. It turns a JavaScript object into JSON and stores it under a unique key related to client time.

```javascript
var S3EventStore = require('s3-eventstore');
var es = new S3EventStore({
    accessKeyId: "ACCESS",
    region: "us-east-1",
    s3Bucket: "all-events",
    secretAccessKey: "SECRET" 
});
es.put({my: "event"}, function (error) {
    if (error) console.log('put failed :/'); 
});
```

Event keys look like following example: `2013/09/27/00/52/40/652/508858176.json`.

## Documentation

### S3EventStore

**Public API**
  * [new S3EventStore(options)](#new-s3eventstoreoptions)
  * [s3EventStore.put(event, \[callback\])](#s3eventstoreputevent-callback)
  * [Event '~trace'](#event-trace)

#### new S3EventStore(options)

  * `options`:
    * `AWS`: _Object_ _(Default: `require('aws-sdk');`)_ An instance of `aws-sdk`.
    * `accessKeyId`: _String_ AWS access key ID.
    * `region`: _String_ The region to send service requests to.
    * `s3Bucket`: _String_ The name of S3 bucket to use for event store.
    * `secretAccessKey`: _String_ AWS secret access key.
    * `sslEnabled`: _Boolean_ _(Default: true)_ Whether to enable SSL for requests.

Creates a new S3EventStore instance.

#### s3EventStore.put(event, [callback])

  * `event`: _Object_ JavaScript object representing the event to store.
  * `callback`: _Function_ _(Default: undefined)_ An optional callback to call on success or failure.

Attempts to store the `event` in S3. If a `callback` is provided it will be called with error set to true if an error occurs or with no parameters otherwise.

```javascript
s3EventStore.put({foo: 'bar'}, function (error) {
    if (error) console.log('put failed :/'); 
});
```

#### Event `~trace`

  * `message`: _String_ Trace message.

Emitted to trace internal execution of S3EventStore instance.