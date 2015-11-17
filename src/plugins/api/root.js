import Boom from 'boom';

export default function root(server){
  return function (request, reply){
    server.methods.Hospital.find({})
    .then(hospitals => {
      reply(hospitals)
    }, err => {
      reply(Boom.badImplementation());
    })
  };
};
