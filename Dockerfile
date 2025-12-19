# --- ETAPA 1: Construcción del Frontend ---
FROM node:20-alpine AS build-frontend
WORKDIR /app/frontend
COPY ./app4-frontend/package*.json ./
RUN npm install
COPY ./app4-frontend/ .
# Comando limpio de construcción para modo estático
RUN npx ng build --configuration production

# --- ETAPA 2: Preparación del Backend ---
FROM node:20-alpine AS build-backend
WORKDIR /app/backend
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend/ .

# --- ETAPA 3: Imagen Final ---
FROM node:20-alpine
RUN apk add --no-cache nginx
WORKDIR /app

COPY --from=build-backend /app/backend /app/backend
# Al ser estático, los archivos se generan en la carpeta browser
COPY --from=build-frontend /app/frontend/dist/app4-frontend/browser /usr/share/nginx/html
COPY ./backend/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD node backend/server.js & nginx -g 'daemon off;'
