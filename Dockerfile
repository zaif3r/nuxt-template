FROM node:16-alpine

WORKDIR /nuxt-app
COPY . /nuxt-app/

RUN yarn install && yarn cache clean --force
RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD ["node", ".output/server/index.mjs"]
