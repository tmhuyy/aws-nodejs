const AWS = require("aws-sdk");
AWS.config.update({ "region": "ap-southeast-1" })
const dynamodb = new AWS.DynamoDB();


const params = {
    RequestItems: {
        'employee': [
            {
                PutRequest: {
                    Item: {
                        'id': {
                            "S": "2"
                        },
                        'name': {
                            "S": "Mina"
                        },
                        "age": {
                            "S": "18"
                        }
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        'id': {
                            "S": "3"
                        },
                        'name': {
                            "S": "Krixi"
                        },
                        "age": {
                            "S": "40"
                        }
                    }
                }
            },

        ]
    }
}

dynamodb.batchWriteItem(params, (err, data) =>
{
    if (err)
    {
        console.log(err);
        return
    }
    console.log(data)
})
