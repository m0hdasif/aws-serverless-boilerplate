## Good practices

1.  Don't add serverless plugins as dependencies but add them as dev_dependencies
2.  Don't add aws-sdk as dependency, add it in dev-dependency because it is already present in lambda function environment


## Plugins

1. serverless console VS code extension plugin
2. Use serverless IDE plugin

## AWS sdk
1. Use below code to switch the aws profile
    ```js
    const credentials = new AWS.SharedIniFileCredentials({profile: process.env.profile });
    AWS.config.credentials = credentials;
   ```