var {dynamodb}=require('./db')
// as i have created newable in the createtable.js file i am deleting the newtable if the table doesnot exist this delete method willthrow some exception

var params = {
    TableName: 'newTable',
}


dynamodb.deleteTable(params,(err, data) => {
    if (err) {
        console.error('could not delet the table',JSON.stringify(err,null,2))
    } else {
        console.log('table deleted sucessfully ',JSON.stringify(data,null,2))
    }
})