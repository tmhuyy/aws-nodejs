const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const dbClient = new DynamoDBClient({
    region: "ap-southeast-1"
});

const params = {
    TableName: "Employee",
    Item: {
        id: {
            N: "1"
        },
        name: {
            S: "Huy"
        }
    }
};

(async () =>
{
    try
    {
        const data = await dbClient.send(new PutItemCommand(params))
        console.log(data);
        return data
    } catch (err)
    {
        console.log(err)
    }
})()