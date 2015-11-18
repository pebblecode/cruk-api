import mongoose from 'mongoose';

export default function register(server, options, next) {

  const url = process.env.MONGOLAB_URI || 'mongodb://localhost/cruk'
  // TODO set by config in options.
  mongoose.connect(url);

  server.method('Ccg', require('./ccg'));
  server.method('Fullccg', require('./fullccg'));

  next();

}

register.attributes = {
  pkg: {
    name: 'cruk-api-models',
    version: '1.0.0'
  }
};
