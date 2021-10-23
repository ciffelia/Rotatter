FROM node:14-alpine

# Switch to non-root user
RUN adduser -D rotatter
USER rotatter
WORKDIR /home/rotatter

ENV NODE_ENV production

COPY --chown=rotatter:rotatter . .

RUN yarn install --immutable && \
    yarn cache clean --mirror

ENTRYPOINT ["node", "./src/main.js"]
