FROM oven/bun:1.1-alpine
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=8080

# зависимости
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# код + сборка
COPY . .
# если есть Prisma, раскомментируй следующую строку
# RUN bunx prisma generate
RUN bunx next build

EXPOSE 8080
CMD ["bun", "run", "start"]