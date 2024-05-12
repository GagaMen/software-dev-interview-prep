FROM oven/bun:1.1.7-alpine

COPY . .

RUN bun install
