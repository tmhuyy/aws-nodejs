const AWS = require("aws-sdk");

const iam = new AWS.IAM()

const policy_document = {
    Version: "2012-10-17",
    Statement: [
        {
            Effect: "Allow",
            Action: "*",
            Resource: "*"
        }
    ]
}

const params = {
    PolicyDocument: JSON.stringify(policy_document), /* required */
    PolicyName: "huytestadmin", /* required */
    Description: 'Hello the first ever policy',
}

iam.createPolicy(params, (err, data) =>
{
    if (err)
    {
        console.log(err);
        return
    }
    console.log(data)
})