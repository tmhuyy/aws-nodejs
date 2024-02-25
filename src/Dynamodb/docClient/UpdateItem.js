const AWS = require("aws-sdk");
const fs = require("fs")
AWS.config.update({ "region": "ap-southeast-1" })
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: "Movies",
    Key: {
        year: 2024,
        title: "Demon Slayer"
    },
    UpdateExpression: "set info.rating = :b",

    ExpressionAttributeValues: {
        ":b": 5
    }
}

docClient.update(params, (err, data) =>
{
    if (err)
    {
        console.log(err);
        return
    }
    console.log(data)
})