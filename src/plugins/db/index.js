import mongoose from 'mongoose';

import Ccg from './ccg';
import FullCcg from './fullccg';
import {getSchema} from '@risingstack/graffiti-mongoose';
import graffiti from '@risingstack/graffiti';
import debug from 'debug';

const logger = debug('db-plugin');

export default function register(server, options, next) {

  const url = process.env.MONGOLAB_URI || 'mongodb://localhost/cruk';

  mongoose.connect(url);

  server.method('Ccg', Ccg);
  server.method('Fullccg', FullCcg);

  const schema = getSchema([Ccg, FullCcg]);

  server.register({
    register: graffiti.hapi,
    options: {
      schema
    }
  }, (err) => {
    if (err) {
      logger('Error registering graffiti', err);
    }
  });

  next();

}

register.attributes = {
  pkg: {
    name: 'cruk-api-models',
    version: '1.0.0'
  }
};
