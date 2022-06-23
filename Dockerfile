FROM node:14

USER root

WORKDIR /app

COPY . .

RUN apt-get update \
  # Ts->Js
  && yarn install --frozen-lockfile \
  && yarn compile

CMD yarn api:start