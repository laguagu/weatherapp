FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3000
ENV DB_HOST=host.docker.internal

EXPOSE 3000

CMD [ "npm", "start" ]