var gps = true

function toggle() {
  if (gps) {
    document.getElementById('markerScene').style.display = 'block';
    document.getElementById('gpsScene').style.display = 'none';
    gps = false;
  }
  else {
    document.getElementById('gpsScene').style.display = 'block';
    document.getElementById('markerScene').style.display = 'none';
    gps = true;
  }
  
}
