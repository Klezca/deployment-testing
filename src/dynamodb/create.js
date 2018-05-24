const AWS = require('aws-sdk');
const uuidv1 = require('uuid/v1');

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.create = (event, context, callback) => {
  const params = {
    Item: {
      id: uuidv1(),
      Name: event.name,
    },
    TableName: process.env.DYNAMODB_TABLE,
  };
  documentClient.put(params, (err, data) => {
    callback(err, data);
  });
};
