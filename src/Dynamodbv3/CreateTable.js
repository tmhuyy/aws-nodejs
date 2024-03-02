const { DynamoDBClient, CreateTableCommand } = require("@aws-sdk/client-dynamodb");

const dbClient = new DynamoDBClient({
    region: "ap-southeast-1"
})

const params = {
    TableName: "Employee",
    KeySchema: [
        {
            AttributeName: "id",
            KeyType: "HASH"
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: "id",
            AttributeType: "N"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 3,
        WriteCapacityUnits: 3
    }
}


const run = async () =>
{
    try
    {
        const data = await dbClient.send(new CreateTableCommand(params));

        console.log("TABLE IS CREATED", data);

        return data
    } catch (err)
    {
        console.log(err)
    }
}

run()