import mongoose from 'mongoose';

export default function register(server, options, next) {

  // TODO set by config in options.
  mongoose.connect('mongodb://localhost/cruk');

  server.method('Hospital', require('./hospital'));
  server.method('City', require('./city'));

  next();

}

register.attributes = {
  pkg: {
    name: 'cruk-api-models',
    version: '1.0.0'
  }
};
