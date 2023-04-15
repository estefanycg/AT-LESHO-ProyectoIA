var video = document.getElementById("video");

function toggleVideo() {
  if (video.style.display === "none") {
    video.style.display = "block";
    var button = document.getElementById("toggle-cam-btn");
    button.innerHTML = "Desactivar Camara";
  } else {
    video.style.display = "none";
    alert("El video ha sido desactivado.");
    var button = document.getElementById("toggle-cam-btn");
    button.innerHTML = "Activar Camara";
  }
}


var socket = io.connect('http://' + document.domain + ':' + location.port);

  // Función para capturar la salida de la consola
  function captureConsoleLog() {
      var oldLog = console.log;

      console.log = function (message) {
          socket.emit('console', message);
          oldLog.apply(console, arguments);
      };
  }

  captureConsoleLog();

  // Función para mostrar los datos de la consola en el cuadro de texto
  socket.on('console', function (data) {
var consoleText = document.getElementById('console');
consoleText.innerHTML += data + '<br>'; // aquí se agrega el contenido al final del div
console.log(data); // también se puede imprimir en la consola del navegador para verificar
});