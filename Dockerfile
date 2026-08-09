# OPEN FUSION API
# rdsslab
# Imagen LTS Debian slim para reducir superficie de ataque
FROM node:22-bookworm-slim AS builder


# Permite ajustar memoria de Node durante la compilacion (default: 4 GB)
ARG BUILD_NODE_OPTIONS=--max-old-space-size=4096
# Permite ajustar memoria de Node en runtime/start (default: 4 GB)
ARG RUNTIME_NODE_OPTIONS=--max-old-space-size=4096

# Variables de Entorno
ENV HOST=:: \
    PORT=3000 \
    BUILD_DB=true \
    NODE_OPTIONS=${RUNTIME_NODE_OPTIONS} \
    PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias mínimas necesarias de Chromium
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends ca-certificates \
    build-essential \
    python3 \
    chromium \
    fonts-liberation \
    git \
    iputils-ping \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcairo2 \
    libdrm2 \
    libgbm1 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxkbcommon0 \
    libxrandr2 \
    logrotate \
    nano \
    wget \
    xdg-utils \
    bash \
    curl && \
    apt-get autoremove -y && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Copiar manifiestos para aprovechar la cache de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias del proyecto para build (incluye devDependencies)
RUN npm install --include=dev && npm rebuild sqlite3 --build-from-source

# Invalidar la caché de Docker para forzar la actualización de las dependencias locales en cada build
ARG CACHEBUST=1
RUN npm update @rdsslab/libopenfusionapi @rdsslab/libopenfusionapigui

# Copiar el resto del código fuente
COPY . .

# Ejecutar la compilación de la aplicación
RUN NODE_OPTIONS=${BUILD_NODE_OPTIONS} npm run build

# Eliminar devDependencies para usar node_modules de producción en runtime
RUN npm prune --omit=dev \
    && npm cache clean --force


# Imagen final de runtime sin paquetes de desarrollo
FROM node:22-bookworm-slim

# Permite ajustar memoria de Node en runtime/start (default: 4 GB)
ARG RUNTIME_NODE_OPTIONS=--max-old-space-size=4096

# Variables de Entorno
ENV HOST=:: \
    PORT=3000 \
    BUILD_DB=true \
    NODE_OPTIONS=${RUNTIME_NODE_OPTIONS} \
    PUPPETEER_SKIP_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias de sistema de runtime necesarias para Chromium/Puppeteer
RUN apt-get update && apt-get upgrade -y && apt-get install -y --no-install-recommends ca-certificates \
    chromium \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcairo2 \
    libdrm2 \
    libgbm1 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libx11-6 \
    libx11-xcb1 \
    libxcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxkbcommon0 \
    libxrandr2 \
    xdg-utils \
    && apt-get autoremove -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copiar app compilada y dependencias de producción desde builder
COPY --from=builder /app /app

# Instalar PM2 globalmente para runtime
RUN npm install -g pm2 \
    && pm2 install pm2-logrotate \
    && pm2 set pm2-logrotate:max_days 1 \
    && pm2 set pm2-logrotate:retain 1 \
    && npm cache clean --force

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación con PM2
CMD ["pm2-runtime", "start", "process.yml"]


# docker system prune -a // Elimina todas las imágenes no utilizadas, contenedores detenidos, volúmenes y redes no utilizados 