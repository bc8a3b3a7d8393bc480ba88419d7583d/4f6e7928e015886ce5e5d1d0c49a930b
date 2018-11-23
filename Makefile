ENV ?= dev

setup-env:
	cp env/.env.$(ENV) .env