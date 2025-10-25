let enLlave1 = false;
let enLlave2 = false;
let enLlave3 = false;
let tieneLlave1 = false;
let tieneLlave2 = false;
let tieneLlave3 = false;
let abrioCandado = false;

let numJugador = -1;

let tiempoInicio = 0;

let pasoComic = 1;

let errores = 0;

window.addEventListener("load", () => {
  const markers = document.querySelectorAll("a-marker");

  markers.forEach(marker => {

    marker.addEventListener("markerFound", () => {
      if (marker.id === "marcador1") {
        entraLlave1();
      } else if (marker.id === "marcador2") {
        entraLlave2();
      } else if (marker.id === "marcador3") {
        entraLlave3();
      }
      else if (marker.id === "marcador4") {
        sincronizarLlavesMarcador4();
      }
    });

    marker.addEventListener("markerLost", () => {
      if (marker.id === "marcador1") {
        saleLlave1();
      } else if (marker.id === "marcador2") {
        saleLlave2();
      } else if (marker.id === "marcador3") {
        saleLlave3();
      }
    });
  });

  const boton = document.getElementById("btnCartelMisiones");
  const cartel = document.getElementById("cartelMisiones");

  boton.addEventListener("click", () => {
    cartel.classList.toggle("show");
  });
});

// funciones para cuando ve el marcador
function entraLlave1() {
  enLlave1 = true;

  if (!tieneLlave1) {
    const formulario = document.getElementById("formularioLlave");
    formulario.style.display = "block";
    cargarFormulario();
    mostrarFormularioLlave()
  }
}

function entraLlave2() {
  enLlave2 = true;

  if (!tieneLlave2) {
    const formulario = document.getElementById("formularioLlave");
    formulario.style.display = "block";
    cargarFormulario();
    mostrarFormularioLlave()
  }
}

function entraLlave3() {
  enLlave3 = true;

  if (!tieneLlave3) {
    const formulario = document.getElementById("formularioLlave");
    formulario.style.display = "block";
    cargarFormulario();
    mostrarFormularioLlave()
  }
}

//funciones cuando deja de ver el marcador
function saleLlave1() {
  enLlave1 = false;

  const formulario = document.getElementById("formularioLlave");
  ocultarFormularioLlave()
}

function saleLlave2() {
  enLlave2 = false;

  const formulario = document.getElementById("formularioLlave");
  ocultarFormularioLlave()
}

function saleLlave3() {
  enLlave3 = false;

  const formulario = document.getElementById("formularioLlave");
  ocultarFormularioLlave()
}

//formulario inicial
function seleccionarJugador(opcion) {
  numJugador = opcion;

  document.getElementById('btnCartelMisiones').style.display = 'block';
  actualizarHTMLsegunJugador();

  const formulario = document.getElementById("formularioInicial");
  formulario.style.display = 'none';
}

//funciones del formulario de las llaves
/*
  Carga el formulario segun la llave y el jugador
  
  Primer desafio: leer el texto del otro
  Segundo desafio: decir que figura tiene el otro
  Tercer desafio: decir que color tiene el otro
*/
function cargarFormulario() {
  const botones = document.querySelectorAll('#formularioLlave .opcion');
  const titulo = document.querySelector('#formularioLlave h3');

  if (enLlave1) {
    if (numJugador === 1) {
      titulo.textContent = '¿Qué texto tiene el jugador 2?';
      botones[0].textContent = 'Cubo rojo';
      botones[1].textContent = 'Cubo verde';
      botones[2].textContent = 'Cubo azul';
    }
    else if (numJugador === 2) {
      titulo.textContent = '¿Qué texto tiene el jugador 3?';
      botones[2].textContent = 'Cubo rojo';
      botones[1].textContent = 'Cubo verde';
      botones[0].textContent = 'Cubo azul';
    }
    else if (numJugador === 3) {
      titulo.textContent = '¿Qué texto tiene el jugador 1?';
      botones[1].textContent = 'Cubo rojo';
      botones[2].textContent = 'Cubo verde';
      botones[0].textContent = 'Cubo azul';
    }
  }
  else if (enLlave2) {
    if (numJugador === 1) {
      titulo.textContent = '¿Qué figura tiene el jugador 2?';
      botones[1].textContent = 'Cilindro';
      botones[0].textContent = 'Esfera';
      botones[2].textContent = 'Cono';
    }
    else if (numJugador === 2) {
      titulo.textContent = '¿Qué figura tiene el jugador 3?';
      botones[0].textContent = 'Cilindro';
      botones[1].textContent = 'Esfera';
      botones[2].textContent = 'Cono';
    }
    else if (numJugador === 3) {
      titulo.textContent = '¿Qué figura tiene el jugador 1?';
      botones[1].textContent = 'Cilindro';
      botones[2].textContent = 'Esfera';
      botones[0].textContent = 'Cono';
    }
  }
  else if (enLlave3) {
    if (numJugador === 1) {
      titulo.textContent = '¿Qué color tiene el jugador 2?';
      botones[0].textContent = 'Amarillo';
      botones[1].textContent = 'Blanco';
      botones[2].textContent = 'Rosado';
    }
    else if (numJugador === 2) {
      titulo.textContent = '¿Qué color tiene el jugador 3?';
      botones[1].textContent = 'Amarillo';
      botones[0].textContent = 'Blanco';
      botones[2].textContent = 'Rosado';
    }
    else if (numJugador === 3) {
      titulo.textContent = '¿Qué color tiene el jugador 1?';
      botones[2].textContent = 'Amarillo';
      botones[1].textContent = 'Blanco';
      botones[0].textContent = 'Rosado';
    }
  }
}

// elegir la opcion del formulario
function seleccionar(opcion) {
  const botonReclamarLlave = document.getElementById("botonReclamarLlave");
  botonReclamarLlave.style.display = 'block';

  if (enLlave1) {
    if (numJugador === 1) {
      if (opcion != 2) {
        errores += 1;
        console.log("Errores: " + errores);
        const sonido = new Audio('Sonidos/error.mp3');
        sonido.play();
      }
      else {
        const sonido = new Audio('Sonidos/exito.mp3');
        sonido.play();
      }
    }
  }
  else if (numJugador === 2) {
    if (opcion != 1) {
      errores += 1;
      console.log("Errores: " + errores);
      const sonido = new Audio('Sonidos/error.mp3');
      sonido.play();
    }
    else {
      const sonido = new Audio('Sonidos/exito.mp3');
      sonido.play();
    }
  }
  else if (numJugador === 3) {
    if (opcion != 2) {
      errores += 1;
      console.log("Errores: " + errores);
      const sonido = new Audio('Sonidos/error.mp3');
      sonido.play();
    }
    else {
      const sonido = new Audio('Sonidos/exito.mp3');
      sonido.play();
    }
  }
  else if (enLlave2) {
    if (numJugador === 1) {
      if (opcion != 1) {
        errores += 1;
        console.log("Errores: " + errores);
        const sonido = new Audio('Sonidos/error.mp3');
        sonido.play();
      }
      else {
        const sonido = new Audio('Sonidos/exito.mp3');
        sonido.play();
      }
    }
    else if (numJugador === 2) {
      if (opcion != 3) {
        errores += 1;
        console.log("Errores: " + errores);
        const sonido = new Audio('Sonidos/error.mp3');
        sonido.play();
      }
      else {
        const sonido = new Audio('Sonidos/exito.mp3');
        sonido.play();
      }
    }
    else if (numJugador === 3) {
      if (opcion != 2) {
        errores += 1;
        console.log("Errores: " + errores);
        const sonido = new Audio('Sonidos/error.mp3');
        sonido.play();
      }
      else {
        const sonido = new Audio('Sonidos/exito.mp3');
        sonido.play();
      }
    }
  }
  else if (enLlave3) {
    if (numJugador === 1) {
      if (opcion != 2) {
        errores += 1;
        console.log("Errores: " + errores);
        const sonido = new Audio('Sonidos/error.mp3');
        sonido.play();
      }
      else {
        const sonido = new Audio('Sonidos/exito.mp3');
        sonido.play();
      }
    }
    else if (numJugador === 2) {
      if (opcion != 3) {
        errores += 1;
        console.log("Errores: " + errores);
        const sonido = new Audio('Sonidos/error.mp3');
        sonido.play();
      }
      else {
        const sonido = new Audio('Sonidos/exito.mp3');
        sonido.play();
      }
    }
    else if (numJugador === 3) {
      if (opcion != 3) {
        errores += 1;
        console.log("Errores: " + errores);
        const sonido = new Audio('Sonidos/error.mp3');
        sonido.play();
      }
      else {
        const sonido = new Audio('Sonidos/exito.mp3');
        sonido.play();
      }
    }
  }

  const formulario = document.getElementById("formularioLlave");
  formulario.style.display = 'none';
}

// funcion para actualizar html segun el jugador seleccionado
function actualizarHTMLsegunJugador() {
  let fig1 = document.getElementById("fig1");
  let fig2 = document.getElementById("fig2");
  let fig3 = document.getElementById("fig3");
  let textoFig1 = document.getElementById("textoFig1");

  let color = '#ffffff';

  if (numJugador === 1) {
    fig1.setAttribute("material", "color: blue");
    fig1.setAttribute("geometry", "primitive: box;");
    textoFig1.setAttribute("value", "Cubo rojo");

    fig2.setAttribute("geometry", "primitive: cylinder;");
    fig2.setAttribute("material", "color: blue");

    fig3.setAttribute("geometry", "primitive: torus;");
    fig3.setAttribute("material", "color: yellow");

    color = '#ff004c';
  }
  else if (numJugador === 2) {
    fig1.setAttribute("material", "color: red");
    fig1.setAttribute("geometry", "primitive: box;");
    textoFig1.setAttribute("value", "Cubo verde");

    fig2.setAttribute("geometry", "primitive: sphere;");
    fig2.setAttribute("material", "color: blue");

    fig3.setAttribute("geometry", "primitive: torus;");
    fig3.setAttribute("material", "color: white");

    color = '#00aaff';
  }
  else if (numJugador === 3) {
    fig1.setAttribute("material", "color: green");
    fig1.setAttribute("geometry", "primitive: box;");
    textoFig1.setAttribute("value", "Cubo azul");

    fig2.setAttribute("geometry", "primitive: cone;");
    fig2.setAttribute("material", "color: blue");

    fig3.setAttribute("geometry", "primitive: torus;");
    fig3.setAttribute("material", "color: pink");

    color = '#00ff66';
  }

  // Aplica el color al root
  document.documentElement.style.setProperty('--color-principal', color);

  // Ajusta brillo dinámico
  const brillo = `0 0 15px ${color}, 0 0 30px ${color}`;
  document.documentElement.style.setProperty('--brillo', brillo);
}

function reclamarLlave() {
  if (enLlave1) {
    tieneLlave1 = true;
    let objeto = document.getElementById("fig1");
    objeto.removeAttribute("geometry");
    objeto.removeAttribute("material");
    objeto.setAttribute("gltf-model", "Modelos/llave1.glb");
    objeto.setAttribute("rotation", "90 180 0");
    document.getElementById('textoFig1').setAttribute("value", "");
  }
  else if (enLlave2) {
    tieneLlave2 = true;

    let objeto = document.getElementById("fig2");
    objeto.removeAttribute("geometry");
    objeto.removeAttribute("material");
    objeto.setAttribute("gltf-model", "Modelos/llave2.glb");
    objeto.setAttribute("rotation", "0 -90 90");
  }
  else if (enLlave3) {
    tieneLlave3 = true;

    let objeto = document.getElementById("fig3");
    objeto.removeAttribute("geometry");
    objeto.removeAttribute("material");
    objeto.setAttribute("gltf-model", "Modelos/llave3.glb");
  }

  let botonReclamarLlave = document.getElementById("botonReclamarLlave");
  botonReclamarLlave.style.display = 'none';

  actualizarTextoMisiones()
}

function mostrarFormularioLlave() {
  const formulario = document.getElementById('formularioLlave');
  formulario.classList.add('hacerVisible'); // se mueve al bottom:10%
  formulario.classList.remove('desaparecer');
}

function ocultarFormularioLlave() {
  const formulario = document.getElementById('formularioLlave');
  formulario.classList.remove('hacerVisible');
  formulario.classList.add('desaparecer');
}

function actualizarTextoMisiones() {
  if (tieneLlave1) {
    document.getElementById("mision1").classList.add("completada");
  }
  if (tieneLlave2) {
    document.getElementById("mision2").classList.add("completada");
  }
  if (tieneLlave3) {
    document.getElementById("mision3").classList.add("completada");
  }
  if (tieneLlave1 && tieneLlave2 && tieneLlave3 && abrioCandado) {
    document.getElementById("mision4").classList.add("completada");
  }
}

function aparecerLlaves(llave) {
  switch (llave) {
    case 1:
      if (tieneLlave1) {  // ← Verificar que realmente tenga la llave
        const llave1 = document.querySelector('#llave1');
        llave1.setAttribute('visible', true);
      }
      break;
    case 2:
      if (tieneLlave2) {  // ← Verificar que realmente tenga la llave
        const llave2 = document.querySelector('#llave2');
        llave2.setAttribute('visible', true);
      }
      break;
    case 3:
      if (tieneLlave3) {  // ← Verificar que realmente tenga la llave
        const llave3 = document.querySelector('#llave3');
        llave3.setAttribute('visible', true);
      }
      break;
  }

  // Verificar si mostrar el botón del tesoro
  if (tieneLlave1 && tieneLlave2 && tieneLlave3) {
    const botonDesbloquearTesoro = document.getElementById("botonDesbloquearTesoro");
    botonDesbloquearTesoro.style.display = 'block';
  }
}

function sincronizarLlavesMarcador4() {
  // Ocultar todas las llaves primero
  document.querySelector('#llave1').setAttribute('visible', false);
  document.querySelector('#llave2').setAttribute('visible', false);
  document.querySelector('#llave3').setAttribute('visible', false);

  // Mostrar solo las que el jugador tenga
  if (tieneLlave1) aparecerLlaves(1);
  if (tieneLlave2) aparecerLlaves(2);
  if (tieneLlave3) aparecerLlaves(3);
}

function desbloquearTesoro() {
  const botonDesbloquearTesoro = document.getElementById("botonDesbloquearTesoro");
  botonDesbloquearTesoro.style.display = 'none';
  abrioCandado = true;
  actualizarTextoMisiones()

  setTimeout(() => {
    ocultarCandado(1);
  }, 800);

  setTimeout(() => {
    ocultarCandado(2);
  }, 1200);

  setTimeout(() => {
    ocultarCandado(3);
  }, 1600);

  setTimeout(() => {
    aparecerTesoro();
  }, 2000);
}

function ocultarCandado(numCandado) {
  const sonido = new Audio('Sonidos/abrirCandado.mp3');
  sonido.play();

  const candado = document.querySelector(`#candado${numCandado}`);
  candado.setAttribute('visible', false);
}

function aparecerTesoro() {
  const tesoro = document.getElementById("tesoro");
  tesoro.setAttribute('visible', true);

  const sonido = new Audio('Sonidos/sagrado.mp3');
  sonido.play();

  const tiempoFin = Date.now();
  const diferencia = tiempoFin - tiempoInicio; // en milisegundos
  const segundos = Math.floor(diferencia / 1000);

  let textoStats = document.getElementById("textoStats");
  textoStats.setAttribute("value", "Tiempo: " + segundos + "s\tErrores: " + errores);
}

function continuarComic() {
  if (pasoComic === 1) {
    document.getElementById("imagenComic").setAttribute('src', 'Imagenes/comic2.png');
  }
  else if (pasoComic === 2) {
    tiempoInicio = Date.now();
    document.getElementById("overlayInicio").style.display = "none";
    document.getElementById("botonComic").style.display = "none";
  }

  pasoComic += 1;
}