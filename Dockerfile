FROM node:18.16.0-alpine

# app directory
WORKDIR /app

COPY . .

RUN yarn

CMD ["yarn", "start"]

EXPOSE 3000