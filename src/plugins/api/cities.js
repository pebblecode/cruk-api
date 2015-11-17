import Boom from 'boom';
import debug from 'debug';

const logger = debug('cities');

export default function root(server) {


  function get(request, reply) {
    server.methods.City.find({})
    .then(cities => {
      reply(cities);
    }, err => {
      logger.error(err);
      reply(Boom.badImplementation());
    });

  }


  return {
    get
  };

}
