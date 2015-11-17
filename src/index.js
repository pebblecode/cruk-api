import Glue from 'glue';
import debug from 'debug';

const logger = debug('http');

const manifest = {
  connections: [{
    port: process.env.PORT || 3000
  }],
  plugins: [
    {
      './api': [{
        routes: {
          prefix: '/api'
        }
      }]
    },
    {'./db': null}
  ]
};

const options = {
  relativeTo: __dirname + '/plugins'
};

Glue.compose(manifest, options, (err, server) => {

  if (err) {
    throw err;
  }
  server.start(() => {

    logger('Hapi days!');
  });
});
