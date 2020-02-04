const aws = require('aws-sdk');
const fs = require('fs');

require("dotenv").config();

async function upload(req, res, mediaType) {

  aws.config.setPromisesDependency();
  aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  });

  const s3 = new aws.S3();
  const params = {
    ACL: 'public-read',
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: fs.createReadStream(req.file.path),
    Key: `${mediaType}/${req.file.originalname}`
  };

  let response;

  try {
    response = await s3.upload(params).promise();
  } catch (err) {
    console.log('Error occured while trying to upload to S3 bucket', err);
    return res.json({error: 'Error occured while trying to upload to S3 bucket'})
  }

  fs.unlinkSync(req.file.path); // Empty temp folder
  const locationUrl = response.Location;
  console.log(`File uploaded to url: ${locationUrl}`);
  return locationUrl;

}

module.exports = {
  upload
}
