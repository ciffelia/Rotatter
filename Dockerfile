FROM node:14-alpine

# Switch to non-root user
RUN adduser -D rotatter
USER rotatter
WORKDIR /home/rotatter

ENV NODE_ENV production

COPY --chown=rotatter:rotatter ./package.json ./yarn.lock ./

RUN yarn install --frozen-lockfile --production && \
    yarn cache clean

COPY --chown=rotatter:rotatter . .

ENTRYPOINT ["node", "./src/main.js"]
