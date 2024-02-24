const AWS = require("aws-sdk");

const iam = new AWS.IAM();
const params = {
    UserName: "Tumap",
    NewUserName: "TuUBeo"
}

iam.updateUser(params, (err, data) =>
{
    if (err)
    {
        console.log(err);
        return
    }
    console.log(data)
})