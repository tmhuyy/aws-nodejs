const AWS = require("aws-sdk");
AWS.config.update({ "region": "ap-southeast-1" })
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: "Movies",
    Item: {
        year: 2024,
        title: "Demon Slayer",
        info: {
            rating: 1,
            score: 100
        }
    }
}

docClient.put(params, (err, data) =>
{
    if (err)
    {
        console.log(err);
        return
    }
    console.log(data)
})