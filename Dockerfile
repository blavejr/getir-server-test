FROM node:13

COPY . /backend/
WORKDIR /backend
RUN npm install -g nodemon
RUN npm install

CMD ["nodemon", "src/server.js"]