const AWS = require("aws-sdk");
const fs = require("fs")
AWS.config.update({ "region": "ap-southeast-1" })
const docClient = new AWS.DynamoDB.DocumentClient();


const allMovies = JSON.parse(fs.readFileSync("moviedata.json"))

allMovies.forEach(({ year, title, info }) =>
{
    const params = {
        TableName: "Movies",
        Item: {
            "year": year,
            "title": title,
            "info": info
        }
    }

    docClient.put(params, (err, data) =>
    {
        if (err)
        {
            console.log(err);
            return;
        }
        console.log(data)
    })
})