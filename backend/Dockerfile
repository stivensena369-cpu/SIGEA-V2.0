# CAMBIA ESTO: FROM oven/bun:1-alpine
# POR ESTO:
FROM oven/bun:1

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json bun.lock ./

# Instalar dependencias
RUN bun install

# Copiar el schema de Prisma
COPY prisma ./prisma/

# Generar el cliente de Prisma (ahora detectará "debian-openssl" automáticamente y funcionará)
RUN bunx prisma generate

# Copiar el resto del código
COPY . .

# Compilar TypeScript
RUN bun run build

EXPOSE 4000

# Iniciar la aplicación
CMD ["bun", "run", "start"]