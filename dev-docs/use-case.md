# Use Case 

To use the reusable utility and functions (like logs, serverless yml file template, basic utility functions, s3 services, sql functions etc ) for the AWS services.

# Requirement

1. Functions for:
   1. S3
   2. IAM
   3. Dynamo DB
   4. Mongo DB
   5. RDS(SQL)
   6. Cognito(and backup)
   7. Logs in S3 (use Logger)
   8. SES
   9.  SNS and pinpoint
   10. SQS
   11. UUID Generator
   12. Session Management
2.  Custom Status Codes
3.  Custom Error Message
4.  Error Handler
5.  Serverless Template for various service
6.  Common Validation
7.  Input Data validation with optional
8.  Define schema in serverless
9.  ORM in serverless
10. Try to implement Websockets

# Description

1. Template for all possible services in separate file
2. Create one bash file to ask user for option,based on that include feature in the project.(if possible)
3. Handle all error case
4. Maintain one file for most common issues that may occured in the used service and provide solution 
5. Use plugins for serverless and provide instructions 
   1. [ ] serverless offline 
   2. [ ] serverless-plugin-split-stacks
   3. [ ] serverless-aws-alias(check)
   4. [ ] '@hewmen/serverless-plugin-typescript'
   5. [ ] tsconfig-paths-webpack-plugin(check)
   6. [ ] serverless-plugin-warmup(schedule lambda function run so that they run faster on winter)
   7. [ ] serverless-plugin-optimize
   8. [ ] Serverless AWS Pseudo Parameters
   9. [ ] Serverless Webpack
   10. [ ] Serverless Dotenv
   11. [ ] Serverless Mocha Plugin
   12. [ ] Serverless S3 Remover
   13. [ ] serverless-step-functions-offline
   14. [ ] serverless-iam-roles-per-function
   15. [ ] serverless-plugin-aws-alerts
   16. [ ] serverless-secrets-plugin
   17. [ ] serverless-s3-deploy 
   18. [ ] serverless-api-stage
   19. [ ] serverless-ses-template 
   20. [ ] serverless-vpc-plugin
   21. [ ] serverless-step-function
   22. [ ] serverless-apigateway-service-proxy(If you want to expose API for SNS, SQS, S3, and Kinesis Streams, then you can use this plugin without Lambda, also AWS resources will be created by that plugin.)
   23. [ ] serverless-stage-manager(to verify if stage is present in serverless.yml file)
   24. [ ] serverless-domain-manager(Create custom domain names that your lambda can deploy to with serverless. Allows for base path mapping when deploying and deletion of domain names.)
   25. [ ] Check other sls plugins(prune, dynamo db local, s3 local, sns local etc)
6. **Implement in ts**
7. Maintain one file for helpful commands for both sls and aws
8. Chack if there is any library for plugins available for aws boilerplate
9.  Maintain 1 file for tips and tricks in AWS(later move it to blog)
10. Avoid callback and primises, prefer async await
11. serverless-vscode(check plugin)
12. Maintaing comments - first comment then function definition
13. use orm 
14. cognito backup including shell script
15. data backup and email send using ses and nodemailer
16. Use best way of coding
17. support both lambda integration and proxy
18. lambda invocation using multiple events
19. use mysql2 as it supports promise (async,await)
20. SNS should be able to send Email and SMS. Push notifications( cannot be implemented using cloudformation)
21. implement step function
