FROM node as node
WORKDIR /front/
COPY ./ ./
RUN ls
RUN npm i
RUN npm run build

FROM php:7.2-apache
WORKDIR /front/
RUN a2enmod rewrite

COPY --from=node ./front/dist/ /var/www/html
