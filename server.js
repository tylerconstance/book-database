'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');

// Create a new server with host and port
const server = new Hapi.Server();
server.connection({
  port: 3000
});

// Connect to db
server.app.db = mongojs('hapi-rest-mongo', ['books']);

// Load plugins and start server
server.register([
  require('./routes/books')
], (err)=> {
  if (err) {
    throw err;
  }

  // start the server
  server.start((err)=> {
    console.log('Server running at: ', server.info.uri);
  });
});
