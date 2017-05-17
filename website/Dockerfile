FROM node:7.10.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app
#COPY . /usr/src/app/
#RUN npm install

COPY ./server.js /usr/src/app/server.js
COPY ./bin /usr/src/app/bin

EXPOSE 80
CMD npm start
