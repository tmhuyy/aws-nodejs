const AWS = require("aws-sdk");
AWS.config.update({ "region": "ap-southeast-1" })
const dynamodb = new AWS.DynamoDB();


const params = {
    RequestItems: {
        "employee": {
            Keys: [
                {
                    id: {
                        S: "1"
                    }
                },

                {
                    id: {
                        S: "2"
                    }
                }

            ]
        }

    }
}

dynamodb.batchGetItem(params, (err, data) =>
{
    if (err)
    {
        console.log(err)
        return
    }
    console.log(data.Responses.employee)
})