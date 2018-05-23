const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.list = (event, context, callback) => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };
  documentClient.scan(params, (error, result) => {
    // handle potential errors
    if (error) {
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: "Couldn't fetch table records.",
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
    callback(null, response);
  });
};
