const AWS = require("aws-sdk");
const iam = new AWS.IAM()
const params = {

}

iam.listUsers((err, data) => 
{
    if (err)
    {
        console.log(err);
        return;
    }
    console.log(data)
})