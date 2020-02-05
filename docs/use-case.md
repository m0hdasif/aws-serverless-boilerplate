# Use Case 

To use the reusable utility and functions (like logs, serverless yml file template, basic utility functions, s3 services, sql functions etc ) for the AWS services.

# Requirement

1. Services:
   1. [x] S3
   2. [ ] IAM
   3. [ ] Dynamo DB
   4. [ ] Mongo DB
   5. [ ] RDS(SQL)
   6. [ ] Cognito(and its backup)
   7. [ ] Logs in S3 (use Logger)
   8. [ ] SES
   9. [ ] SNS and pinpoint
   10. [ ] SQS
   11. [ ] UUID Generator
   12. [ ] Session Management
   13. [ ] VPC
2.  Custom Status Codes
3.  Custom Error Message
4.  Error Handler
5.  Serverless Template for various service
6.  Common Validation
7.  Input Data validation with optional
8.  Define schema in serverless
9.  ORM in serverless
10. Try to implement Websocket

# Description

1. Template for all possible services in separate file
2. Create one bash file to ask user for option,based on that include feature in the project.(if possible)
3. Handle all error case
4. Maintain one file for most common issues that may occurred in the used service and provide solution 
5. Use plugins for serverless and provide instructions 
   1. [x] serverless offline 
   2. [x] serverless-plugin-split-stacks
   3. [ ] serverless-aws-alias(check)
   4. [x] '@hewmen/serverless-plugin-typescript' || serverless-plugin-typescript
   5. [ ] tsconfig-paths-webpack-plugin(check)
   6. [ ] serverless-plugin-warmup(schedule lambda function run so that they run faster on winter)
   7. [ ] serverless-plugin-optimize
   8. [ ] Serverless AWS Pseudo Parameters (serverless-pseudo-parameters)
   9. [ ] Serverless Webpack
   10. [ ] Serverless Dotenv
   11. [ ] Serverless Mocha Plugin
   12. [ ] Serverless S3 Remover(serverless-s3-remover)
   13. [ ] serverless-step-functions-offline
   14. [ ] serverless-iam-roles-per-function
   15. [ ] serverless-plugin-aws-alerts
   16. [ ] serverless-secrets-plugin
   17. [ ] serverless-s3-deploy 
   18. [ ] serverless-api-stage
   19. [ ] serverless-ses-template 
   20. [ ] serverless-vpc-plugin
   21. [ ] serverless-step-function
   22. [x] serverless-offline-scheduler
   23. [ ] serverless-apigateway-service-proxy(If you want to expose API for SNS, SQS, S3, and Kinesis Streams, then you can use this plugin without Lambda, also AWS resources will be created by that plugin.)
   24. [ ] serverless-stage-manager(to verify if stage is present in serverless.yml file)
   25. [ ] serverless-domain-manager(Create custom domain names that your lambda can deploy to with serverless. Allows for base path mapping when deploying and deletion of domain names.)
   26. [ ] Check other sls plugins(prune, dynamo db local, s3 local, sns local etc)
   27. [ ] local Stack
   28. [ ] serverless-dynamodb-local
   29. [ ] serverless-s3-local
   30. [ ] Serverless CloudWatch Dashboards Plugin
   31. [ ] serverless-cloudside-plugin
   32. [ ] serverless-plugin-diff
   33. [ ] serverless-deployment-bucket
   34. [ ] serverless-offline-http-mock
   35. [ ] Serverless Middleware(must check)
   36. [ ] serverless-plugin-deploy-environment
   37. [ ] Serverless Node.js Starter 
   38. [ ] serverless-plugin-reducer
   39. [ ] serverless-aws-documentation
   40. [ ] serverless-plugin-additional-stacks(check)
   41. [ ] serverless-nested-stack(check)
   42. [ ] serverless-aws-nested-stack
   43. [ ] serverless-optimizer-plugin
   44. [ ] serverless-dotenv-plugin
   45. [ ] serverless-webpack
   46. [ ] serverless-prune-plugin
   47. [ ] serverless-offline-sns
   48. [ ] serverless-plugin-multiple-responses
   49. [ ] tsconfig-paths-webpack-plugin 
   50. [ ] serverless-mysql
   51. [ ] serverless-plugin-canary-deployments

6. **Implement in ts**
7. Maintain one file for helpful commands for both sls and aws
8. Check if there is any library for plugins available for aws boilerplate
9.  Maintain 1 file for tips and tricks in AWS(later move it to blog)
10. Avoid callback and promises, prefer async await
11. serverless-vscode(check plugin)
12. Maintain comments - first comment then function definition
13. use orm 
14. cognito backup including shell script
15. data backup and email send using ses and nodemailer
16. Use best way of coding
17. support both lambda integration and proxy
18. lambda invocation using multiple events
19. use mysql2 as it supports promise (async,await)
20. SNS should be able to send Email and SMS. Push notifications( cannot be implemented using cloudformation)
21. implement step function
22. add websocket support
23. Resize image upload in s3 ( using s3 events and lambda)[ thumbnail support]
24. use serverless deployment id for each deployment and maintain logs for deployment
25. Set modules based resources and functions name, research how to achieve it
26. Check how to use 'env' in yaml file
27. set up CI/CD simply by adding a CodePipeline resource, and utilizing CodeBuild to pull down this repository, and run the make files.
28. Use the serverless-domain-manager plug-in to enable domain functionality. Most of this structure is laid out, you just need to provide a valid ApiHostedZone, ApiSite, and ApiCert. This can be created in the AWS Console for Route53 and ACM and provided here as variables.
29. check "Fn:: importValue" in serverless
30. separate invocation for local, dev and prod support
31. Try expressJs in serverless
32. support workers
33. maintain CHANGELOG.md
