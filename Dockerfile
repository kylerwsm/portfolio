FROM node:12

WORKDIR /build

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . /build

ENV NODE_ENV=production

ENV PORT 3000

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]