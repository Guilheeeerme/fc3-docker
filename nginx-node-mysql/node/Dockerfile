FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install \ && mv node_modules /node_modules 

EXPOSE 3000

CMD [ "node", "index.js" ]