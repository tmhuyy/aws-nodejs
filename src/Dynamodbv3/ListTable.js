const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb");

const dbClient = new DynamoDBClient({
    region: "ap-southeast-1"
})

const run = async () =>
{
    try
    {
        const data = await dbClient.send(new ListTablesCommand());
        console.log(data);
        return data.TableNames
    } catch (err)
    {
        console.log(err)
    }
}

run()