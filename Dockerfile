# Usa una imagen base estable de Node.js (evita 'latest' por problemas de reproducibilidad)
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia solo los archivos de dependencias primero para aprovechar la caché de Docker
COPY package*.json ./

# Instala las dependencias
# Si tu proyecto ya tiene un lockfile, esto lo usará automáticamente
RUN npm ci --only=production

# Copia el resto del código de la aplicación
COPY . .

# Cambia al usuario 'node' integrado en la imagen (seguridad)
# NOTA: El usuario debe tener permisos sobre el WORKDIR
USER node

# Expone el puerto si tu app es un servidor web (ej. 3000)
EXPOSE 3000

# Comando por defecto para ejecutar la app
CMD ["node", "index.js"]