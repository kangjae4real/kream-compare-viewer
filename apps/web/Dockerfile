FROM node:20

ARG COMMAND

RUN mkdir web
COPY ./ web
WORKDIR web

RUN yarn
RUN yarn client
# COMMAND args defined docker-compose.yaml file
ENTRYPOINT yarn $COMMAND