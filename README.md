# She Said No As A Service

> "Vou precisar perguntar pra minha mulher."

API meme que retorna uma desculpa aleatória de quem precisa de permissão da esposa antes de tomar qualquer decisão.

## Endpoints

### `GET /`

Retorna uma frase aleatória.

```json
{ "phrase": "Minha CFO doméstica precisa assinar isso antes." }
```

### Rate Limit

20 requisições por minuto por IP. Após isso:

```json
{
  "statusCode": 429,
  "error": "Too Many Requests",
  "message": "Calma lá, parceiro. Volta daqui a pouco."
}
```

## Rodando localmente

```bash
npm install
npm start
```

O servidor sobe em `http://localhost:3000`.

## Adicionando frases

Edite o arquivo `data/phrases.txt` — uma frase por linha. Reinicie o servidor para carregar as novas frases.

## Stack

- [Fastify](https://fastify.dev/)
- [@fastify/rate-limit](https://github.com/fastify/fastify-rate-limit)

## Licença

[MIT](LICENSE) © 2026 Elias Devstudio
