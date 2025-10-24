let enLlave1 = false;
let enLlave2 = false;
let enLlave3 = false;
let tieneLlave1 = false;
let tieneLlave2 = false;
let tieneLlave3 = false;

let numJugador = -1;

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
      titulo.textContent = '¿Qué figura tiene el jugador 3?';
      botones[1].textContent = 'Amarillo';
      botones[0].textContent = 'Blanco';
      botones[2].textContent = 'Rosado';
    }
    else if (numJugador === 3) {
      titulo.textContent = '¿Qué figura tiene el jugador 1?';
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
      document.getElementById('textoFig1').setAttribute("value", "");
    }
    else if (enLlave2) {
      tieneLlave2 = true;

      let objeto = document.getElementById("fig2");
      objeto.removeAttribute("geometry");
      objeto.removeAttribute("material");
      objeto.setAttribute("gltf-model", "Modelos/llave2.glb");
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
  if (tieneLlave1 && tieneLlave2 && tieneLlave3) {
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

function animarLlaveHaciaCandadoSimple(idLlave, idCandado) {
  const llave = document.querySelector(`#${idLlave}`);
  const candado = document.querySelector(`#${idCandado}`);
  
  if (!llave || !candado) return;
  
  const posCandado = candado.getAttribute('position');
  
  // Una sola animación que combine movimiento y desaparición
  llave.setAttribute('animation', {
    property: 'position',
    to: `${posCandado.x} ${posCandado.y} ${posCandado.z}`,
    dur: 1000,
    easing: 'easeInOutQuad'
  });
  
  // Hacer la llave más pequeña mientras se mueve
  llave.setAttribute('animation__scale', {
    property: 'scale',
    to: '0 0 0',
    dur: 1000,
    easing: 'easeInQuad'
  });
  
  // Ocultar después de la animación
  setTimeout(() => {
    llave.setAttribute('visible', false);
  }, 1000);
}

function desbloquearTesoro() {
  console.log("Tesoro desbloqueado");
  
  const botonDesbloquearTesoro = document.getElementById("botonDesbloquearTesoro");
  botonDesbloquearTesoro.style.display = 'none';
  
  // Animar todas las llaves simultáneamente
  if (tieneLlave1) animarLlaveHaciaCandadoSimple('llave1', 'candado1');
  if (tieneLlave2) animarLlaveHaciaCandadoSimple('llave2', 'candado2');
  if (tieneLlave3) animarLlaveHaciaCandadoSimple('llave3', 'candado3');
  
  // Mostrar mensaje de éxito
  setTimeout(mostrarTesoroDesbloqueado, 1200);
}