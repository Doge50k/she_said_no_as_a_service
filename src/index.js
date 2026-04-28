'use strict';

const fastify = require('fastify')({
  logger: {
    level: process.env.LOG_LEVEL || 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        colorize: true,
      },
    },
  },
  requestTimeout: 30_000,
});
const helmet = require('@fastify/helmet');
const rateLimit = require('@fastify/rate-limit');
const { getRandom } = require('./phrases');

const PORT = 3000;
const RATE_LIMIT = 20;
const RATE_WINDOW = 60_000;

async function start() {
  // Security headers
  await fastify.register(helmet, {
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
      },
    },
  });

  // Rate limiting
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
    await fastify.listen({ port: PORT, host: '127.0.0.1' });
    fastify.log.info(`She Said No As A Service rodando em http://127.0.0.1:${PORT}`);
  } catch {
    process.exit(1);
  }
}

start();
