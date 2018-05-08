.PHONY: accountapp run

include env

K6_VERSION = '0.20.0'

run: accountapp

accountapp:
	@docker run -i --rm \
		-v `pwd`/accountapp.js:/scripts.js \
		loadimpact/k6:$(K6_VERSION) run \
			--no-connection-reuse \
			--insecure-skip-tls-verify \
			-e ENDPOINT_IP=$(ACCOUNTAPP_ENDPOINT_IP) \
			-e USERID=$(ACCOUNTAPP_USER) \
			-e PASSWORD=$(ACCOUNTAPP_PASS) \
			/scripts.js;
