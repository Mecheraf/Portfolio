#Select the the node version you need. I would not recommend to take the latest for most of the projects.
FROM node:16-alpine3.12 AS Portfolio-build
WORKDIR /Portfolio/
#We will copy the app cloned from git to the container ./app folder, install it and build it.
COPY ./Portfolio .
RUN npm ci && npm run build

#We will deploy the application on a Nginx server and open the 80 port.
FROM nginx:alpine
COPY --from=Portfolio-build /Portfolio/dist/portfolio /usr/share/nginx/html
EXPOSE 80