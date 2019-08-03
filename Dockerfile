FROM node:10-alpine

RUN apk add curl

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 8000

RUN npm install -g forever

CMD ["npm", "run", "start"]