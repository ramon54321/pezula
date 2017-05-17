FROM node:7.10.0

# Create app directory
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/server
RUN mkdir -p /usr/src/app/client/bin
WORKDIR /usr/src/app

# Install app
#COPY . /usr/src/app/
#RUN npm install

COPY ./server /usr/src/app/server/
COPY ./client/bin /usr/src/app/client/bin/

EXPOSE 80
CMD npm start
