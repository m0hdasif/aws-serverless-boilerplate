## Good practices

1.  Don't add serverless plugins as dependencies but add them as dev_dependencies
2.  Don't add aws-sdk as dependency, add it in dev-dependency because it is already present in lambda function environment