FROM node:8-alpine

ADD . /root/rottater
WORKDIR /root/rottater

RUN yarn

CMD ["yarn", "start"]
