const { Credentials } = require('aws-sdk');
var AWS=require('aws-sdk');
AWS.config.update({
    region: 'us-east-1',
    //change the credentials to ur credentials and for best prctice put the cedentials in .env files and use it
    credentials: {
        accessKeyId: 'AKIATGPOSBY67J2LKUPJ',
        secretAccessKey: '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',
      }
})

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();
module.exports ={dynamodb:dynamodb,docClient:docClient};