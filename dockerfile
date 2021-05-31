FROM node:latest as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build


FROM nginx:latest

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]

