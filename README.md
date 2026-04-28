# 👩 She Said No As A Service

<div align="center">

> *"Vou precisar perguntar pra minha mulher."*

**Uma API que gera desculpas profissionais para quem precisa da aprovação conjugal antes de qualquer decisão.**

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-20-brightgreen?logo=node.js)](https://nodejs.org)
[![Fastify](https://img.shields.io/badge/Fastify-5.x-black?logo=fastify)](https://fastify.dev)
[![Rate Limit](https://img.shields.io/badge/rate%20limit-20%20req%2Fmin-blue)](#rate-limit)

</div>

---

## 🤔 O que é isso?

É um serviço **100% sério** que auxilia profissionais a comunicar, de forma institucional, que certas decisões precisam passar pela **"diretoria executiva doméstica"** antes de qualquer resposta formal.

Ideal para integrar em sistemas corporativos, bots de Slack, automações e qualquer situação onde a resposta correta é *"tenho que ver com minha mulher"*.

---

## ⚡ Teste agora

```bash
curl https://ssnaas.eliasdevstudio.tech/
```

```json
{
  "phrase": "A proposta encontra-se em estágio de auditoria interna sob a supervisão da Controladoria Geral do Lar."
}
```

Cada chamada retorna uma frase aleatória diferente. Experimente várias vezes.

---

## 📡 API

### `GET /`

Retorna uma frase corporativa aleatória.

**Resposta `200 OK`:**
```json
{ "phrase": "Minha CFO doméstica precisa assinar isso antes." }
```

**Sem autenticação. Sem parâmetros. Totalmente público.**

---

## 🚦 Rate Limit

**20 requisições por minuto por IP.** Após isso:

```json
{
  "statusCode": 429,
  "error": "Too Many Requests",
  "message": "Calma lá, parceiro. Volta daqui a pouco."
}
```

Aguarde um minuto e tente novamente — ou convença a diretoria doméstica a liberar mais quota.

---

## 🚀 Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/she_said_no_as_a_service.git
cd she_said_no_as_a_service

# Instale as dependências
npm install

# Inicie o servidor
npm start
```

O servidor sobe em `http://localhost:3000`.

### Com Docker

```bash
docker compose up --build
```

---

## ✍️ Contribuindo com frases

Edite `data/phrases.txt` — uma frase por linha — e abra um Pull Request.

```
Vou submeter o pleito ao departamento de conformidade da união estável.
```

Quanto mais corporativa e dramática, melhor.

---

## 🛠️ Stack

| Tecnologia | Descrição |
|---|---|
| [Fastify](https://fastify.dev/) | Framework HTTP de alta performance |
| [@fastify/rate-limit](https://github.com/fastify/fastify-rate-limit) | Proteção contra abuso |
| [@fastify/helmet](https://github.com/fastify/fastify-helmet) | Headers de segurança HTTP |
| [Pino](https://getpino.io/) | Logging estruturado |
| Docker + Traefik | Containerização e HTTPS |

---

## 📄 Licença

[MIT](LICENSE) © 2026 [Elias Devstudio](https://eliasdevstudio.tech)
