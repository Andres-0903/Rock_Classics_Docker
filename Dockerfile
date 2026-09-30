# Imagen base con versión fija (evita sorpresas al reconstruir)
FROM nginx:1.27-alpine

# Metadatos de la imagen (opcional pero profesional)
LABEL maintainer="andresgarcia09"
LABEL description="Top 10 álbumes de rock clásico con sus canciones icónicas"

# Copia los archivos del sitio estático
COPY index.html styles.css app.js /usr/share/nginx/html/

# Copia la carpeta de imágenes SVG
COPY img/ /usr/share/nginx/html/img/

# Puerto interno de Nginx
EXPOSE 80

# Comprueba que el sitio responde (Docker marcará el contenedor como healthy/unhealthy)
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost/ > /dev/null || exit 1

