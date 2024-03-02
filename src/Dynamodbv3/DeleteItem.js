const { DynamoDBClient, DeleteItemCommand } = require("@aws-sdk/client-dynamodb");
const dbClient = new DynamoDBClient({
    region: "ap-southeast-1"
});

const params = {
    TableName: "Employee",
    Key: {
        id: {
            N: "1"
        }
    }
}

const run = async () =>
{
    try
    {
        const data = await dbClient.send(new DeleteItemCommand(params))
        console.log(data)
        return data
    } catch (err)
    {
        console.log(err)
    }
}

run()