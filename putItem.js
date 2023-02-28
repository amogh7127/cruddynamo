var {docClient}=require('./db')

var params = {
    TableName: 'newTable',
    Item:{
        "id":1,
        "name":"test",
        "age":18,
        "gender":"male",
        "address":"test",
        "adress":{
            "street":"test",
            "city":"test"
        }
    }
}

docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }}
    )
