FROM postgres:9.6-alpine

ENV POSTGRES_USER docker
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB docker

ADD init.sql /docker-entrypoint-initdb.d/

