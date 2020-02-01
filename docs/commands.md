1. Open up a separate tab in your console and stream all logs for a specific Function using this command.
serverless logs -f [FUNCTION NAME] -s [STAGE NAME] -r [REGION NAME]

2. Create s3 bucket 
1. aws s3api create-bucket --acl public-read-write --bucket loggerbucket1 --create-bucket-configuration LocationConstraint=ap-south-1
2. aws s3api list-objects-v2 --bucket loggerbucket1
3. aws s3api get-object  --bucket loggerbucket1 --key 2019-08-03-10-55-15-259-unknown-jokerpc.log outputfile.log
4. aws logs