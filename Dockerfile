FROM node:20.14.0-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev && npm install -g pino-pretty

COPY src ./src
COPY data ./data

EXPOSE 3000

CMD ["npm", "start"]