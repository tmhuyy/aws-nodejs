const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb");
const dbClient = new DynamoDBClient({
    region: "ap-southeast-1"
});

const params = {
    TableName: "Employee",
    Key: {
        id: {
            N: "1"
        }
    },
    UpdateExpression: "set e_name = :n",
    ExpressionAttributeValues: {
        ":n": {
            S: "TU HEO MAP"
        }
    }
}

const run = async () =>
{
    try
    {
        const data = await dbClient.send(new UpdateItemCommand(params));
        console.log(data);
        return data
    } catch (err)
    {
        console.log(err)
    }
}

run()