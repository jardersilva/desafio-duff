FROM node:18.15

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN npx yarn build
RUN npx sequelize db:migrate

CMD ["npm", "start"]
