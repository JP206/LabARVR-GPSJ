let modoHiro = false;

function toggle() {
  modoHiro = !modoHiro;
  document.getElementById("gpsBox").setAttribute("visible", !modoHiro);
  document.getElementById("hiroMarker").setAttribute("visible", modoHiro);
  document.getElementById("toggleButton").textContent = 
    modoHiro ? "Cambiar a modo GPS" : "Cambiar a modo Hiro";
}
