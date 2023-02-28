var {dynamodb} = require('./db')
//after running once change the table name beecause once it is created it wont create te same tabl again
params={
    TableName: "newTable",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH" }
    ],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "N" }],
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
        }

}
dynamodb.createTable(params,(err,data)=>{
    if(err){
        console.log('unable to create data ',JSON.stringify(err,null,2));
    }else{
        console.log('data created sucessfully ',JSON.stringify(data,null,2));
    }
})