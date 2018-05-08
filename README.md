#README
This project contains scripts to load test jenkins infra applications.
In order to use this project, you must first create an 'env' file with some variables depending on the application you want to test.

## Accountapp
```make accountapp``` to start loadtesting
### Variables
ACCOUNTAPP_USER=<Insert account app user>
ACCOUNTAPP_PASS=<Insert account app user password>
ACCOUNTAPP_ENDPOINT_IP=< Insert public ip of the accountapp that need to be tested>


https://github.com/loadimpact/k6
