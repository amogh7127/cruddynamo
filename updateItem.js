var {docClient}=require('./db')

var params={
    TableName:'newTable',
    Key:{
        id:1
    },
    UpdateExpression:'set #name=:n',
    ExpressionAttributeNames:{
        "#name":"name"
    },
    
    ExpressionAttributeValues:{
        ":n":"amogh",
    },
    ReturnValues:"UPDATED_NEW"
}

docClient.update(params,function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }})