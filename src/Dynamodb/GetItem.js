const AWS = require("aws-sdk");
AWS.config.update({ "region": "ap-southeast-1" })
const dynamodb = new AWS.DynamoDB();

const params = {
    Key: {
        id: {
            S: "1"
        }
    },
    TableName: "employee"
}


dynamodb.getItem(params, (err, data) =>
{
    if (err)
    {
        console.log(err)
        return
    }
    console.log(data.Item)
})

