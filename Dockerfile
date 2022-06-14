FROM node:14

USER root

WORKDIR /app

COPY . .

RUN apt-get update \
  # Ts->Js
  && yarn install --frozen-lockfile \
  && yarn compile \
  # Install dependencies for LaTeX
  && apt-get install texlive-latex-base -y \
  && apt-get install texlive-fonts-recommended -y \
  && apt-get install texlive-fonts-extra -y \
  && apt install texlive-base -y

CMD yarn api:start