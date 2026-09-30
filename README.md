# 🎸 Álbumes de Rock Clásico

Sitio web estático que muestra los 10 álbumes de rock más icónicos de la historia, con sistema de favoritos y diseño rockero.

## 🚀 Características

- **10 álbumes legendarios** de rock clásico con información detallada
- **Sistema de favoritos** persistente con localStorage
- **Ilustraciones SVG originales** para cada álbum
- **Diseño responsive** que se adapta a móviles, tablets y desktop
- **Estilo rockero** con fondo oscuro y acentos en rojo/amarillo
- **Filtro de favoritos** para ver solo tus álbumes preferidos

## 🛠️ Tecnologías

- HTML5
- CSS3 (Grid Layout, Google Fonts)
- JavaScript vanilla
- Docker + Nginx
- SVG para ilustraciones

## 📦 Instalación y Uso

### Opción 1: Docker (recomendado)

```bash
# Construir la imagen
docker build -t albumes-rock .

# Ejecutar el contenedor
docker run -d -p 8080:80 --name rock-albums albumes-rock

# Abrir en el navegador
# http://localhost:8080
```

### Opción 2: Servidor local

Simplemente abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python
python -m http.server 8080

# Con Node.js (http-server)
npx http-server -p 8080
```

## 📂 Estructura del Proyecto

```
albumes-rock-docker/
├── img/                # Ilustraciones SVG originales
│   ├── guitarra.svg
│   ├── amplificador.svg
│   ├── punio.svg
│   ├── rayo.svg
│   ├── microfono.svg
│   ├── calavera.svg
│   ├── vinilo.svg
│   ├── estrella.svg
│   ├── bateria.svg
│   └── fuego.svg
├── index.html          # Estructura HTML
├── styles.css          # Estilos rockeros
├── app.js              # Lógica y datos de álbumes
├── Dockerfile          # Configuración Docker
├── .dockerignore       # Archivos excluidos de Docker
└── README.md           # Este archivo
```

## 🎵 Álbumes Incluidos

1. **Led Zeppelin IV** (1971) - Led Zeppelin
2. **The Dark Side of the Moon** (1973) - Pink Floyd
3. **Nevermind** (1991) - Nirvana
4. **Back in Black** (1980) - AC/DC
5. **Appetite for Destruction** (1987) - Guns N' Roses
6. **The Wall** (1979) - Pink Floyd
7. **Born to Run** (1975) - Bruce Springsteen
8. **Master of Puppets** (1986) - Metallica
9. **Who's Next** (1971) - The Who
10. **Highway to Hell** (1979) - AC/DC

## 💡 Funcionalidades

- **Marcar favoritos**: Clic en el corazón de cada tarjeta
- **Filtrar por favoritos**: Botón "Ver solo Favoritos" en la parte superior
- **Persistencia**: Los favoritos se guardan en localStorage
- **Responsive**: Se adapta automáticamente al tamaño de pantalla

## 🐳 Comandos Docker Útiles

```bash
# Detener el contenedor
docker stop rock-albums

# Iniciar el contenedor
docker start rock-albums

# Ver logs
docker logs rock-albums

# Eliminar el contenedor
docker rm -f rock-albums

# Eliminar la imagen
docker rmi albumes-rock
```

## 📝 Licencia

Proyecto educativo - Curso Docker Udemy

---

<div align="center">

### 🎸 Realizado por **AndresGarcia09** 🤘

*Rock on!*

</div>
