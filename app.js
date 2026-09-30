// ========================================
// DATOS DE LOS ÁLBUMES DE ROCK CLÁSICO
// ========================================
const albumes = [
  {
    id: 1,
    titulo: "Led Zeppelin IV",
    artista: "Led Zeppelin",
    anio: 1971,
    imagen: "img/guitarra.svg",
    resenia: "Obra maestra del hard rock con la épica 'Stairway to Heaven'. Un álbum definitorio del rock de los 70.",
    canciones: ["Stairway to Heaven", "Black Dog", "Rock and Roll"]
  },
  {
    id: 2,
    titulo: "The Dark Side of the Moon",
    artista: "Pink Floyd",
    anio: 1973,
    imagen: "img/vinilo.svg",
    resenia: "Exploración conceptual sobre la locura, el tiempo y la existencia. Producción revolucionaria que expandió las posibilidades del rock progresivo.",
    canciones: ["Time", "Money", "Us and Them"]
  },
  {
    id: 3,
    titulo: "Nevermind",
    artista: "Nirvana",
    anio: 1991,
    imagen: "img/amplificador.svg",
    resenia: "El disco que llevó el grunge al mainstream y definió una generación. Crudo, intenso y lleno de angustia adolescente.",
    canciones: ["Smells Like Teen Spirit", "Come as You Are", "Lithium"]
  },
  {
    id: 4,
    titulo: "Back in Black",
    artista: "AC/DC",
    anio: 1980,
    imagen: "img/rayo.svg",
    resenia: "Tributo explosivo al fallecido Bon Scott. Riffs demoledores y energía inagotable que convirtió al rock en un himno eterno.",
    canciones: ["Back in Black", "You Shook Me All Night Long", "Hells Bells"]
  },
  {
    id: 5,
    titulo: "Appetite for Destruction",
    artista: "Guns N' Roses",
    anio: 1987,
    imagen: "img/calavera.svg",
    resenia: "Debut brutal y salvaje que capturó el espíritu rebelde del rock ochentero. Pura adrenalina sonora sin filtros.",
    canciones: ["Sweet Child O' Mine", "Welcome to the Jungle", "Paradise City"]
  },
  {
    id: 6,
    titulo: "The Wall",
    artista: "Pink Floyd",
    anio: 1979,
    imagen: "img/microfono.svg",
    resenia: "Ópera rock conceptual sobre el aislamiento y la alienación. Una experiencia audiovisual monumental y oscura.",
    canciones: ["Another Brick in the Wall", "Comfortably Numb", "Hey You"]
  },
  {
    id: 7,
    titulo: "Born to Run",
    artista: "Bruce Springsteen",
    anio: 1975,
    imagen: "img/punio.svg",
    resenia: "Himno del sueño americano con historias de esperanza y escape. Rock épico con corazón y alma genuina.",
    canciones: ["Born to Run", "Thunder Road", "Jungleland"]
  },
  {
    id: 8,
    titulo: "Master of Puppets",
    artista: "Metallica",
    anio: 1986,
    imagen: "img/estrella.svg",
    resenia: "Cúspide del thrash metal con composiciones complejas y letras profundas. Agresión técnica que redefinió el metal.",
    canciones: ["Master of Puppets", "Battery", "Welcome Home (Sanitarium)"]
  },
  {
    id: 9,
    titulo: "Who's Next",
    artista: "The Who",
    anio: 1971,
    imagen: "img/bateria.svg",
    resenia: "Rock clásico con sintetizadores pioneros. Energía desenfrenada y canciones que se convirtieron en himnos generacionales.",
    canciones: ["Baba O'Riley", "Won't Get Fooled Again", "Behind Blue Eyes"]
  },
  {
    id: 10,
    titulo: "Highway to Hell",
    artista: "AC/DC",
    anio: 1979,
    imagen: "img/fuego.svg",
    resenia: "Último álbum con Bon Scott, puro rock and roll sin pretensiones. Riffs pegajosos y actitud desafiante que define al género.",
    canciones: ["Highway to Hell", "Girls Got Rhythm", "Touch Too Much"]
  }
];

// ========================================
// GESTIÓN DE FAVORITOS CON LOCALSTORAGE
// ========================================

// Obtener favoritos del localStorage
function obtenerFavoritos() {
  const favoritos = localStorage.getItem('albumesFavoritos');
  return favoritos ? JSON.parse(favoritos) : [];
}

// Guardar favoritos en localStorage
function guardarFavoritos(favoritos) {
  localStorage.setItem('albumesFavoritos', JSON.stringify(favoritos));
}

// Verificar si un álbum es favorito
function esFavorito(id) {
  const favoritos = obtenerFavoritos();
  return favoritos.includes(id);
}

// Alternar estado de favorito
function toggleFavorito(id) {
  let favoritos = obtenerFavoritos();
  
  if (favoritos.includes(id)) {
    // Quitar de favoritos
    favoritos = favoritos.filter(favId => favId !== id);
  } else {
    // Agregar a favoritos
    favoritos.push(id);
  }
  
  guardarFavoritos(favoritos);
  actualizarContador();
}

// Actualizar contador de favoritos
function actualizarContador() {
  const favoritos = obtenerFavoritos();
  const contador = document.getElementById('contador-favoritos');
  const cantidad = favoritos.length;
  
  if (cantidad > 0) {
    contador.textContent = `(${cantidad} favorito${cantidad !== 1 ? 's' : ''})`;
    contador.style.display = 'inline-block';
  } else {
    contador.style.display = 'none';
  }
}

// ========================================
// RENDERIZADO DE TARJETAS
// ========================================

let mostrarSoloFavoritos = false;

// Renderizar todas las tarjetas o solo favoritos
function renderizarAlbumes() {
  const lista = document.getElementById('lista');
  let albumesMostrar = albumes;
  
  // Filtrar solo favoritos si el modo está activo
  if (mostrarSoloFavoritos) {
    const favoritos = obtenerFavoritos();
    albumesMostrar = albumes.filter(album => favoritos.includes(album.id));
    
    // Mostrar mensaje si no hay favoritos
    if (albumesMostrar.length === 0) {
      lista.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding:3rem; color:#999;">
          <h2 style="font-size:2rem; color:#d62828; margin-bottom:1rem;">No tienes favoritos aún 💔</h2>
          <p style="font-size:1.2rem;">Haz clic en el corazón de tus álbumes favoritos</p>
        </div>
      `;
      return;
    }
  }
  
  // Generar HTML de las tarjetas
  lista.innerHTML = albumesMostrar.map(album => `
    <div class="card" data-id="${album.id}">
      <!-- Botón de favorito -->
      <button class="btn-favorito ${esFavorito(album.id) ? 'favorito' : ''}" 
              onclick="manejarFavorito(${album.id})"
              aria-label="Marcar como favorito">
        ${esFavorito(album.id) ? '❤️' : '🤍'}
      </button>
      
      <!-- Imagen del álbum -->
      <div class="card-img">
        <img src="${album.imagen}" alt="${album.titulo}">
      </div>
      
      <!-- Contenido -->
      <div class="card-content">
        <h2>${album.titulo}</h2>
        <p class="artista-anio">${album.artista} · ${album.anio}</p>
        <p class="resenia">${album.resenia}</p>
        
        <div class="canciones-titulo">Canciones Icónicas</div>
        <ul>
          ${album.canciones.map(cancion => `<li>${cancion}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// ========================================
// MANEJO DE EVENTOS
// ========================================

// Manejar clic en botón de favorito
function manejarFavorito(id) {
  toggleFavorito(id);
  renderizarAlbumes();
}

// Manejar clic en botón de filtro
function toggleFiltroFavoritos() {
  mostrarSoloFavoritos = !mostrarSoloFavoritos;
  const btnFiltro = document.getElementById('btn-filtro');
  
  if (mostrarSoloFavoritos) {
    btnFiltro.textContent = '📋 Ver Todos';
    btnFiltro.classList.add('activo');
  } else {
    btnFiltro.textContent = '❤️ Ver solo Favoritos';
    btnFiltro.classList.remove('activo');
  }
  
  renderizarAlbumes();
}

// ========================================
// INICIALIZACIÓN
// ========================================

// Configurar evento del botón de filtro
document.getElementById('btn-filtro').addEventListener('click', toggleFiltroFavoritos);

// Renderizar álbumes al cargar la página
renderizarAlbumes();

// Actualizar contador inicial
actualizarContador();