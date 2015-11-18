export default function register(server, options, next) {

  const ccg = require('./ccg')(server);

  server.route({
    method: 'GET',
    path: '/ccg/{ccgCode}',
    handler: ccg.get
  });

  server.route({
    method: 'GET',
    path: '/map',
    handler: ccg.map
  });

  server.route({
    method: 'GET',
    path: '/ccg',
    handler: ccg.getAll
  });

  next();
}


register.attributes = {
  pkg: {
    name: 'cruk-api-routes',
    version: '1.0.0'
  }
};
