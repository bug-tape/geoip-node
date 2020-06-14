const express = require('express');
const { Reader } = require('@maxmind/geoip2-node');

const app = express();
if (process.env.TRUST_PROXY) {
	app.set('trust proxy', process.env.TRUST_PROXY);
}

console.log('Loading db...');
Reader.open('./GeoLite2-Country/GeoLite2-Country.mmdb').then(db => {
	app.get('/', (request, response) => {
		try {
			const resolved = db.country(request.ip);
			response.json({
				ip: request.ip,
				country: resolved.country.isoCode
			});
		} catch (e) {
			console.log(e.toString());
			response.sendStatus(400);
		}
	});
	app.listen(80, () => console.log(`App started.`));
});
