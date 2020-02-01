## Important infomation regarding AWS services
### Cognito
#### Hard Limits
* Access token Id expiration time - *1Hr*
* Refresh token expiration time- can be configured between *1 day* to *10 years*.
* For more details
    * [cognito limits documentation](https://docs.aws.amazon.com/cognito/latest/developerguide/limits.html)

##### Cognito is sending otp to email/mobile , that has expiry time of 24 hours.

### Lambda
#### Hard Limits
* Invocation payload - *6 MB*
* Max timeout - *15 minutes*
* Environment variables - *4 KB*
* Deployment Package Size - *50 MB* <sup><sub>(zipped)</sub></sup>
* For more details
    * [Lambda limits documentation](https://docs.aws.amazon.com/lambda/latest/dg/limits.html) 

### API Gateway
#### Hard Limits
* Integration time out - *29 Sec*
* Payload Size - *10 MB*

### SNS
#### SMS is not supported in Mumbai(ap-south-1), Virginia(us-east-1) is supported on Jan 28 2020
##### Sender Id is must as trai (so they are sending as XX-NOTICE), To change it follow below procedure

