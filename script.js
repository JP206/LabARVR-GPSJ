window.addEventListener("load", () => {
  const markers = document.querySelectorAll("a-marker");
  const boton = document.getElementById("uiButton");

  // 🔹 Asignar eventos a cada marcador
  markers.forEach(marker => {
    marker.addEventListener("markerFound", () => {
      const id = marker.id;
      console.log(`Marcador detectado: ${id}`);
      boton.style.display = 'block';

      // 🔹 Ejecutar función personalizada según el marcador detectado
      if (id === "fig1") {
        accionRoja();
      } else if (id === "fig2") {
        accionVerde();
      } else if (id === "fig3") {
        accionAzul();
      }
    });

    marker.addEventListener("markerLost", () => {
      console.log(`Marcador perdido: ${marker.id}`);
      boton.style.display = 'none';
    });
  });

  boton.addEventListener('click', () => {
    const objeto = document.querySelector("#fig1");
    objeto.removeAttribute("geometry");
    objeto.removeAttribute("material");
    objeto.setAttribute("gltf-model", "modelos/llave1.glb");
  });
});

// 🔹 Funciones personalizadas para cada marcador
function accionRoja() {
  console.log("Acción para marcador rojo");
}

function accionVerde() {
  console.log("Acción para marcador verde");
  // lo que quieras hacer con el verde
}

function accionAzul() {
  console.log("Acción para marcador azul");
  // lo que quieras hacer con el azul
}