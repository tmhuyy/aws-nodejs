const AWS = require("aws-sdk");
AWS.config.update({ "region": "ap-southeast-1" })
const dynamodb = new AWS.DynamoDB();

const params = {
    TableName: "employee",
    Item: {
        'id': {
            "S": "1"
        },
        'name': {
            "S": "bob"
        },
        "age": {
            "S": "12"
        }

    }
}


dynamodb.putItem(params, (err, data) =>
{
    if (err)
    {
        console.log(err);
        return
    }
    console.log(data)
})