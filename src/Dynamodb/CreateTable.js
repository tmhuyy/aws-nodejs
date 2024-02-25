const AWS = require("aws-sdk");
AWS.config.update({ "region": "ap-southeast-1" })
const dynamodb = new AWS.DynamoDB();

const params = {
    TableName: "Movies",
    KeySchema: [
        // partition key 
        {
            AttributeName: "year",
            KeyType: "HASH"
        },
        // sort key
        {
            AttributeName: "title",
            KeyType: "RANGE"
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: "year",
            AttributeType: "N"
        },
        {
            AttributeName: "title",
            AttributeType: "S"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 4,
        WriteCapacityUnits: 4
    }
}

dynamodb.createTable(params, (err, data) =>
{
    if (err)
    {
        console.log(err);
        return

    }

    console.log(data)
})
