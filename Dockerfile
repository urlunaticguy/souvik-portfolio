# ===== Build Stage =====
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ===== Production Stage =====
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app /app

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
