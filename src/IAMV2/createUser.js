const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const params = {
    UserName: "Tumap"
}
iam.createUser(params, (err, data) =>
{
    if (err)
    {
        console.log(err)
    }
    else
    {
        console.log(data)
    }
})