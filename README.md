# README
This project contains [K6](https://github.com/loadimpact/k6) used to scripts to load test Jenkins-Infra applications.
In order to use them, you first need to create an 'env' file with some variables depending on the application you want to test.

## Accountapp
In order to load test the accountapp, you can run: `make accountapp`
__
### Variables
__ACCOUNTAPP_USER:__ Define accountapp user  
__ACCOUNTAPP_PASS:__ Define accountapp user password  
__ACCOUNTAPP_ENDPOINT_IP:__ Define accountapp IP endpoint that needs to be tested
