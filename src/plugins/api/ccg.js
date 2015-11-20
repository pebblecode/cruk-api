import Boom from 'boom';
import debug from 'debug';

const logger = debug('ccg');

export default function root(server) {

  function get(request, reply) {
    const ccg = request.params.ccgCode;

    server.methods.Ccg.find({ ccg: ccg })
      .then(ccgs => {
        reply(ccgs);
      }, err => {
        logger.error(err);
        reply(Boom.badImplementation());
      });
  }

  function getAll(request, reply) {
    server.methods.Ccg.find({})
      .then(ccgs => {
        reply(ccgs);
      }, err => {
        logger.error(err);
        reply(Boom.badImplementation());
      });

  }

  function getFull(request, reply) {
    const ccg = request.params.ccgCode;

    server.methods.Fullccg.find({ ccg: ccg })
      .then(ccgs => {
        reply(ccgs);
      }, err => {
        logger.error(err);
        reply(Boom.badImplementation());
      });
  }

  function map(request, reply) {
    server.methods.Ccg.find()
      .then(ccgs => {

        const result = ccgs.map((ccg) => {
          return {
            ccg: ccg.ccg,
            mortalityRate: ccg.deaths / ccg.incidences,
            deaths: ccg.deaths,
            incidences: ccg.incidences,
            oneYearSurvivalRate: ccg.oneYearSurvivalRate,
            specialist: ccg.specialist,
            treatment: ccg.treatment,
            name: ccg.name
          };
        });

        reply(result);
      }, err => {
        logger.error(err);
        reply(Boom.badImplementation());
      });
  }


  return {
    get,
    getAll,
    getFull,
    map
  };

}
