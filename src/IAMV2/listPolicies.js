const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    Scope: "AWS"
}

iam.listPolicies(params, (err, data) =>
{
    if (err)
    {
        console.log(err);
        return
    }
    console.log(data)
})