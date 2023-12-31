FROM node:21.5.0-alpine3.18

WORKDIR /app/

RUN apk update && apk add yarn

RUN addgroup -S developer && adduser -S imon -G developer
USER imon
COPY --chown=imon:developer package.json yarn.lock /

USER root
RUN yarn && yarn global add nodemon

USER imon
COPY --chown=imon:developer ./ ./

EXPOSE 3000

USER root
CMD [ "yarn", "run", "dev" ];
