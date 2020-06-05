#Nivel 0, equipo completo de 0

FROM ubuntu:18.04

COPY . .

#Nivel 1, Node.js, construir y copila Angular
FROM node:latest as node

WORKDIR /app

COPY ./ /app/

RUN npm install -g @angular/cli
RUN npm install --save-dev @angular-devkit/build-angular
RUN npm run build -- --prod

#Nivel 2, Nginx, copila la app, lista para produccion por Nginx

FROM nginx:latest

COPY --from=node /app/dist/evaluacion /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

#Como correr Dockerfile? 
#1.-[sudo] docker build . -t evaluacion:latest 
#2.-[sudo] docker run -d -p 8080:80 evaluacion:latest