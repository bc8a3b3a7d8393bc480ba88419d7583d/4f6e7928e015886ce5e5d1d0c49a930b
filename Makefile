ENV ?= dev

setup-env:
	cp env/.env.$(ENV) .env

fontello:
	fontello-cli install --config ./src/assets/fontello/config.json --font ./tmp_icons --css ./tmp_icons
	cp -R ./tmp_icons/4f6e7928e015886ce5e5d1d0c49a930b.ttf ./src/assets/fontello/4f6e7928e015886ce5e5d1d0c49a930b.ttf
	rm -rf ./tmp_icons