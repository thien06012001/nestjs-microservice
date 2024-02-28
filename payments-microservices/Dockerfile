FROM node:20-alpine

WORKDIR /usr/src/app

COPY pnpm-lock.yaml package.json ./

RUN npm install -g pnpm
# Install dependencies
RUN pnpm i 

COPY . .