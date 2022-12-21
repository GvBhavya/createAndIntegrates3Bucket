//import AWS-SDK
const AWS = require('aws-sdk');

//Initialize s3 bucket
let s3 = new AWS.S3({
    region : 'us-east-1',
    accessKeyId : '', //Incase there is no key,follow readme file
    secretAccessKey : ''
})

//create first s3 bucket
s3.createBucket({
    Bucket : 'my-first-bucket-created-in-s3'
},(err,res)=>{
    if (err) {
        console.log(err)
    }
    console.log(res)
})

//create second s3 bucket
s3.createBucket({
    Bucket : 'my-second-bucket-created-in-s3'
},(err,res)=>{
    if (err) {
        console.log(err)
    }
    console.log(res)
})

//create a new file with data  in the first bucket
s3.putObject({
    Bucket :'my-first-bucket-created-in-s3',
    Key : 'my-file-1.txt',
    Body : 'This is the first sample text'
    },(err,res)=>{
            if (err) {
                console.log(err)
            }
            console.log(res)
    })

//create a new file with data  in the second bucket
s3.putObject({
Bucket :'my-second-bucket-created-in-s3',
Key : 'my-file-2.txt',
Body : 'This is the second sample text'
},(err,res)=>{
        if (err) {
            console.log(err)
        }
        console.log(res)
})

//copy the file and its contents from one bucket to another
s3.copyObject({
    Bucket : 'my-first-bucket-created-in-s3',
    CopySource : 'my-second-bucket-created-in-s3/my-file-2.txt',
    Key : 'my-file-2.txt'
},(err,res)=>{
    if(err){
        console.log(err)
    }
    console.log(res)
})

//delete file in the first bucket
s3.deleteObject({
    Bucket : 'my-first-bucket-created-in-s3',
    Key : 'my-file-1.txt'
},(err,res)=>{
    if(err) {
        console.log(err)
    } 
    console.log(res)
})

//delete first bucket
s3.deleteBucket({
    Bucket : 'my-first-bucket-created-in-s3'
},(err,res)=>{
    if(err) {
        console.log(err)
    }
    console.log(res)
})

//delete second bucket
s3.deleteBucket({
    Bucket : 'my-second-bucket-created-in-s3'
},(err,res)=>{
    if(err) {
        console.log(err)
    }
    console.log(res)
})