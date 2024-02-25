const AWS = require("aws-sdk");
AWS.config.update({ "region": "ap-southeast-1" })
const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: "Movies",
    Key: {
        year: 2013,
        title: "Rush"
    }
}


docClient.get(params, (err, data) =>
{
    if (err)
    {
        console.log(err)
        return
    }
    console.log(data)
})