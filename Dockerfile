FROM node:20.17.0-alpine3.20
WORKDIR /app/
COPY index.js .
COPY package.json .
RUN npm install
ENV HOST=0.0.0.0 NODE_ENV=production
EXPOSE 3000
CMD ["node", "index.js"]
