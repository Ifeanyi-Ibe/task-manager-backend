FROM node:13-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=password

COPY . .

EXPOSE 8003

CMD ["npm", "start"]