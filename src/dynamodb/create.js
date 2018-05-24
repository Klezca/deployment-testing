const AWS = require('aws-sdk');
const uuidv1 = require('uuid/v1');

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.create = (event, context, callback) => {
  const data = JSON.parse(event.body);

  const params = {
    Item: {
      id: uuidv1(),
      name: data.name,
    },
    TableName: process.env.DYNAMODB_TABLE,
  };

  documentClient.put(params, error => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: "Couldn't create the table record.",
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};
