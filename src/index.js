'use strict';

const fastify = require('fastify')({ logger: false });
const rateLimit = require('@fastify/rate-limit');
const { getRandom } = require('./phrases');

const PORT = 3000;
const RATE_LIMIT = 20;
const RATE_WINDOW = 60_000;

async function start() {
  await fastify.register(rateLimit, {
    max: RATE_LIMIT,
    timeWindow: RATE_WINDOW,
    errorResponseBuilder: () => ({
      statusCode: 429,
      error: 'Too Many Requests',
      message: 'Calma lá, parceiro. Volta daqui a pouco.',
    }),
  });

  fastify.get('/', async (_req, reply) => {
    reply.header('Content-Type', 'application/json');
    return { phrase: getRandom() };
  });

  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`She Said No As A Service rodando em http://0.0.0.0:${PORT}`);
  } catch {
    process.exit(1);
  }
}

start();
