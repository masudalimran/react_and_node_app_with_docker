FROM node:21.5.0-alpine3.18

WORKDIR /app

COPY package.json yarn.lock /

RUN apk update && apk add yarn
RUN yarn && yarn global add vite

RUN addgroup -S developer && adduser -S imon -G developer
USER imon

COPY --chown=imon:developer . .

EXPOSE 5173

CMD [ "yarn", "run", "dev" ];