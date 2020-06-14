# GeoIP service for node

This is a simple http service to return the country of the remote's ip using _Maxmind_'s GeoIP2 country database.

## Requirements
- node
- _Maxmind_ account with generated license key to allow scripted download for the Geo-IP database (see https://www.maxmind.com/en/geoip2-databases)
- docker & docker-compose

## Setup
1. Clone repo

2. Copy `.env.default` to `.env` file in project root directory and ...
	- ... set `LICENSE_KEY` to your _Maxmind_ license key
	- ... set `TRUST_PROXY` if needed (see http://expressjs.com/en/guide/behind-proxies.html)

3. Start service
	```
	docker-compose up -d
	```

## Usage

Make a simple http get request to the service root.

On success response will look like:
```
{
	ip: "95.20.3.4",
	country: "ES"
}
```

If your IP is not part of the db (e.g. is a private subnet address) it will return a bad request error.
Detailed message will be output on the console.
