let enLlave1 = false;
let enLlave2 = false;
let enLlave3 = false;
let tieneLlave1 = false;
let tieneLlave2 = false;
let tieneLlave3 = false;

window.addEventListener("load", () => {
  const markers = document.querySelectorAll("a-marker");
  const botonReclamarLlave = document.getElementById("botonReclamarLlave");
  const formulario = document.getElementById("formulario");

  markers.forEach(marker => {

    marker.addEventListener("markerFound", () => {
      formulario.style.display = "block";

      if (marker.id === "fig1") {
        entraLlave1();
      } else if (marker.id === "fig2") {
        entraLlave2();
      } else if (marker.id === "fig3") {
        entraLlave3();
      }
    });

    marker.addEventListener("markerLost", () => {
      formulario.style.display = "none";

      if (marker.id === "fig1") {
        saleLlave1();
      } else if (marker.id === "fig2") {
        saleLlave2();
      } else if (marker.id === "fig3") {
        saleLlave3();
      }
    });
  });

  botonReclamarLlave.addEventListener('click', () => {
    if (enLlave1) {
      tieneLlave1 = true;

      const objeto = document.querySelector("#fig1");
      objeto.removeAttribute("geometry");
      objeto.removeAttribute("material");
      objeto.setAttribute("gltf-model", "Modelos/llave1.glb");
    }
    else if (enLlave2) {
      tieneLlave2 = true;

      const objeto = document.querySelector("#fig2");
      objeto.removeAttribute("geometry");
      objeto.removeAttribute("material");
      objeto.setAttribute("gltf-model", "Modelos/llave2.glb");
    }
    else if (enLlave3) {
      tieneLlave3 = true;

      const objeto = document.querySelector("#fig3");
      objeto.removeAttribute("geometry");
      objeto.removeAttribute("material");
      objeto.setAttribute("gltf-model", "Modelos/llave3.glb");
    }

    botonReclamarLlave.style.display = 'none';
  });
});

// funciones para cuando ve el marcador
function entraLlave1() {
  enLlave1 = true;
  console.log("aelfnae")
}

function entraLlave2() {
  enLlave2 = true;
}

function entraLlave3() {
  enLlave3 = true;
}

//funciones cuando deja de ver el marcador
function saleLlave1() {
  enLlave1 = false;
}

function saleLlave2() {
  enLlave2 = false;
}

function saleLlave3() {
  enLlave3 = false;
}

//formulario
function seleccionar(opcion) {
  const botonReclamarLlave = document.getElementById("botonReclamarLlave");
  botonReclamarLlave.style.display = 'block';

  const formulario = document.getElementById("formulario");
  formulario.style.display = 'none';
}