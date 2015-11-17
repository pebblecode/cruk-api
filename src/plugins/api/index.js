export default function register(server, options, next) {

  server.route({
    method: 'GET',
    path: '/',
    handler: require('./root')
  });

  next();
}


register.attributes = {
  pkg: require('./package.json')
};
