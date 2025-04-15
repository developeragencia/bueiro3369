const { builder } = require('@netlify/functions');

const handler = async (event, context) => {
  const { next } = require('next');
  
  const app = next({
    dev: false,
    conf: {
      distDir: '.next',
    },
  });

  await app.prepare();
  const handle = app.getRequestHandler();

  const response = await handle(event);
  return response;
};

exports.handler = builder(handler); 