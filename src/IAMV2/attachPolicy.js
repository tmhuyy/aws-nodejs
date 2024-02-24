const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    PolicyArn: "arn:aws:iam::381492274127:policy/huytestadmin",
    UserName: "TuUBeo"
}

iam.attachUserPolicy(params, (err, data) =>
{
    if (err)
    {
        console.log(err)
        return
    }
    console.log(data)
})