let encontrados = new Set();
const total = 3;
const mensaje = document.getElementById('mensaje');

function mostrarMensaje(texto) {
  mensaje.textContent = texto;
  mensaje.style.display = 'block';
  setTimeout(() => mensaje.style.display = 'none', 4000);
}

function verificarProgreso() {
  if (encontrados.size === total) {
    mostrarMensaje("🎉 ¡Encontraste todos los marcadores! El tesoro está tuyo 🏆");
    // Podés agregar aquí animaciones, sonido o una entidad extra
  }
}

['marcador1', 'marcador2', 'marcador3'].forEach(id => {
  const marcador = document.getElementById(id);
  marcador.addEventListener('markerFound', () => {
    if (!encontrados.has(id)) {
      encontrados.add(id);
      mostrarMensaje(`🔍 Pista ${encontrados.size} encontrada`);
      verificarProgreso();
    }
  });
});
