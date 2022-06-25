FROM node:14

# Informando o Puppeteer para não instalar o Google Chromium.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

USER root

WORKDIR /app

COPY . .

RUN apt-get update \
  # Ts->Js
  && yarn install --frozen-lockfile \
  && yarn compile \
  # Puppeteer
  && apk add --no-cache ca-certificates chromium nss freetype harfbuzz ttf-freefont

CMD yarn api:start