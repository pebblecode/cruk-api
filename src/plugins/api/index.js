export default function register(server, options, next) {

  const hospitals = require('./hospitals')(server);
  const cities = require('./cities')(server);

  server.route({
    method: 'GET',
    path: '/hospitals',
    handler: hospitals.get
  });

  server.route({
    method: 'GET',
    path: '/cities',
    handler: cities.get
  });

  next();
}


register.attributes = {
  pkg: {
    name: 'cruk-api-routes',
    version: '1.0.0'
  }
};
