FROM node:14-alpine

COPY package.json package.json
RUN yarn

ARG LICENSE_KEY
ADD https://download.maxmind.com/app/geoip_download?edition_id=GeoLite2-Country&license_key=${LICENSE_KEY}&suffix=tar.gz db.tgz

RUN tar xfz db.tgz
RUN mv GeoLite2-Country_* GeoLite2-Country

COPY index.js index.js
CMD node index.js
