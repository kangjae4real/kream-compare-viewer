FROM node:20

ARG COMMAND

RUN mkdir api
COPY ./ api
WORKDIR api

RUN yarn
# COMMAND args defined docker-compose.yaml file
ENTRYPOINT yarn $COMMAND
