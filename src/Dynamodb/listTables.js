const AWS = require("aws-sdk");
AWS.config.update({ "region": "ap-southeast-1" })
const dynamodb = new AWS.DynamoDB();


dynamodb.listTables((err, data) =>
{
    if (err)
    {
        console.log(err);
        return
    }
    console.log(data.TableNames)
})