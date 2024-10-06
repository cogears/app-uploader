FROM node:20.17.0-alpine3.20
RUN apk add --no-cache tini
WORKDIR /app/
COPY index.js .
COPY package.json .
RUN npm install
ENV HOST=0.0.0.0 NODE_ENV=production
EXPOSE 3000
ENTRYPOINT ["/sbin/tini", "--", "node", "index.js"]
