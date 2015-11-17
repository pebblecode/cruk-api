export default function register(server, options, next) {

  server.route({
    method: 'GET',
    path: '/',
    handler: require('./root')(server)
  });

  next();
}


register.attributes = {
  pkg: {
    name: 'cruk-api-routes',
    version: '1.0.0'
  }
};