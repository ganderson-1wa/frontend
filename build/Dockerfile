# multi stage build
# stage 1: build the react app
FROM node:12.18 as node-builder

RUN mkdir -p /oasys/app

WORKDIR /oasys/app

COPY ./app/package.json /oasys/app/
COPY ./app/package-lock.json /oasys/app/
RUN npm install

COPY ./docs /oasys/docs
COPY ./app /oasys/app
RUN npm run build -- --mode=production

# stage 2: build the nginx app
FROM nginx:1.19

ARG ENV=local
ARG HOST=local-oasys.1wa.org

EXPOSE 80
EXPOSE 443

RUN mkdir -p /etc/cert

COPY ./build/startup.sh /docker-entrypoint.d/
COPY ./build/conf/1wa* /etc/cert/
COPY ./build/conf/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node-builder /oasys/docs /usr/share/nginx/html

LABEL maintainer="apreoteasa@1wa.org"
