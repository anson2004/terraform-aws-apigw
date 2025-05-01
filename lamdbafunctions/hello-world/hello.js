/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// Lambda function code

module.exports.handler = async (event) => {
  console.log('Event: ', event);
  let responseMessage = 'Hello fioland';

  if (event.queryStringParameters && event.queryStringParameters['name']) {
    responseMessage = 'Hello, ' + event.queryStringParameters['name'] + '!';
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  }
}
