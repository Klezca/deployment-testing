const AWS = require('aws-sdk');
const uuid = require('uuid');

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.create = (event, context, callback) => {
  const params = {
    Item: {
      id: uuid.v1(),
      Name: event.name,
    },
    TableName: process.env.DYNAMODB_TABLE,
  };
  documentClient.put(params, (err, data) => {
    callback(err, data);
  });
};
