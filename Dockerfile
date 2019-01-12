FROM node:10-alpine

ADD . /root/rottater
WORKDIR /root/rottater

RUN yarn

CMD ["yarn", "start"]
