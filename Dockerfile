FROM node:12.18.0-alpine

ENV NODE_ENV production

ADD package.json yarn.lock /root/Rotatter/
WORKDIR /root/Rotatter
RUN yarn --pure-lockfile && yarn cache clean

ADD . /root/Rotatter

CMD ["node", "src/index.js"]
