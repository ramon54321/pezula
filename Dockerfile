FROM node:7.10.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app
COPY . /usr/src/app/
RUN npm install

EXPOSE 8080
CMD npm start
