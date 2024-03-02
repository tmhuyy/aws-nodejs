const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");
const dbClient = new DynamoDBClient({
    region: "ap-southeast-1"
});
const { QueryCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const docClient = DynamoDBDocumentClient.from(dbClient);

const main = async () =>
{
    const command = new QueryCommand({
        TableName: "Employee",
        KeyConditionExpression:
            "e_name = :employee_name",
        ExpressionAttributeValues: {
            ":employee_name": "Huy"
        },
        ConsistentRead: true,
    });

    const response = await docClient.send(command);
    console.log(response);
    return response;
};


main()