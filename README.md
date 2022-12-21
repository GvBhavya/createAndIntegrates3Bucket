# createAndIntegrates3Bucket
How to create free AWS account and integrate s3 bucket in nodejs with AWS SDK
//What is AWS SDK?
/* AWS-SDK in AWS provides set of libraries to be able to interact with AWS services
->Can integrate with Javascript for browser
->Can integrate with Nodejs for server
->Can integrate with React Native for mobile development

How to integrate with Nodejs ?
-> Create a new node project with following command : 
npm init --y
-> Create main.js file
->install 'aws-sdk' from npm using : npm i 'aws-sdk'
->Add 'aws-sdk' import in main.js file
->Initialize aws s3 object
ex : let s3 = new AWS.S3({
    region : 'us-east-1',
    accessKey : '',
    secretAccessKey : ''
})
->Try different s3 methods as per the requirement 
-> After coding, execute node main.js in the terminal
->That's it

->Incase no accessKey and secretAccessKey ?
->Incase there is no AWS Account Created yet?

SETPS TO CREATE AWS ACCOUNT
->We can create a free aws account from the below link 
URL : https://aws.amazon.com/account/sign-up
->Complete the 4-5 steps
->In the second step,give access to Amazons3FullAccess and complete other steps
->Enter the debit card details,where in intially it will charge only INR 2 only
->Once the account is created,create a new user in 'IAM'
->Grant only first permission to the user
->Once the user is created,store the access key and secret access key somewhere and it is confidential. 

HAPPY CODING */
