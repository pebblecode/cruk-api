import Glue from 'glue';
import debug from 'debug';

const logger = debug('http');

const manifest = {
  connections: [{
    port: process.env.PORT || 3000,
    labels: ['web']
  }],
  plugins: [
    // {
    //   './api': [{
    //     select: ['web']
    //   }]
    // }
  ]
};

const options = {
  relativeTo: __dirname
};

Glue.compose(manifest, options, (err, server) => {

  if (err) {
    throw err;
  }
  server.start(() => {

    logger('Hapi days!');
  });
});
