export default function register(server, options, next) {

  server.route({
    method: 'GET',
    path: '/',
    handler: function handler(request, reply) {
      reply('BOOM!');
    }
  });

  next();
}


register.attributes = {
  pkg: require('./package.json')
};
