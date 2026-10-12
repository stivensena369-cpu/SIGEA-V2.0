# REGLA DE ORO

ninguna capa sabe de la existencia de la otra, solo se comunican entre si.

## SIGEA-platform

Sistema Integral de Gestión de Entornos y Activos, desarrollado para el SENA.
Administra el uso de activos tecnológicos (monitor, teclado, mouse, torre)
durante las clases de formación, garantizando trazabilidad completa mediante
registro por código QR o manual.

## Tecnologías

- Frontend: React + TypeScript + Vite
- Backend: ...
- Base de datos: PostgreSQL

## Cómo correr el proyecto

1. Clonar el repositorio
2. git checkout develop
3. npm install
4. npm run dev

## Equipo

- Camilo - Scrum Master
- Stiven - Lider Backend 
- Astrid - Lider Frontend

## Estado del proyecto

con un cerdo de damier llamado johan

# Pasos para estar al dia con la refactorizacion 12/10/26

## ️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Bun** (v1.0 o superior): [Instalación](https://bun.sh)
- **Docker** y **Docker Compose**: [Instalación](https://docs.docker.com/get-docker/)
- **Git**: [Instalación](https://git-scm.com/)

Verifica las instalaciones:

```bash
bun --version
docker --version
docker-compose --version
git --version
```
## Siguientes

entra a tu archivo env de entorno local y verifica que tiene esta linea:

```bash
DATABASE_URL="postgresql://postgres:postgresql@localhost:5435/SIGEA?schema=public"
```
despues instalas las dependencias nuevas (despues de hacer un pull)

```bash
bun install

#generar el cliente de ts de prisma
bunx prisma generate
```

⚠️ para este paso debes tener el env de docker

despues levantar el contenedor de el backend:
```bash
cd ..
docker-compose up -d
```