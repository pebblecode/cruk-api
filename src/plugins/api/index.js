export default function register(server, options, next) {

  const ccg = require('./ccg')(server);

  server.route({
    method: 'GET',
    path: '/ccg/{ccgCode}',
    handler: ccg.get
  });

  server.route({
    method: 'GET',
    path: '/ccg/map',
    handler: ccg.map
  });

  server.route({
    method: 'GET',
    path: '/ccg',
    handler: ccg.getAll
  });

  server.route({
    method: 'GET',
    path: '/ccg/{ccgCode}/full',
    handler: ccg.getFull
  });

  next();
}


register.attributes = {
  pkg: {
    name: 'cruk-api-routes',
    version: '1.0.0'
  }
};
