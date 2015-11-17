import Boom from 'boom';
import debug from 'debug';

const logger = debug('hospitals');

export default function root(server) {


  function get(request, reply) {
    server.methods.Hospital.find({})
    .then(hospitals => {
      reply(hospitals);
    }, err => {
      logger.error(err);
      reply(Boom.badImplementation());
    });

  }


  return {
    get
  };

};
