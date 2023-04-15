
$(document).ready(
function(){

  var contar = $("#contar").val();
  //console.log(contar);
  var cadena = "<tr><th>Usuario</th><th>Fecha</th><th>Estado</th><th>Descripcion</th></tr>";

  for (var i = 0; i < contar ; i++) {
    cadena += "<tr>";
    //console.log("<?php  echo $filas['idventa']; ?>");
    //cadena +="<td>"+$("#ventaid"+i+"").val()+"</td>";

    cadena +="<td>"+$("#nombre"+i+"").val()+"</td>";

    cadena +="<td>"+$("#fechahora"+i+"").val()+"</td>";

    switch(Number($("#estado"+i+"").val())){
      default:
        cadena +="<td><span class='label label-danger'>Fallida</span></td>";
        cadena +="<td>La transacción no pudo ser Completada</td>";
        break;
      case 1:
        cadena +="<td><span class='label label-warning'>Pendiente</span></td>";
        cadena +="<td>La transacción no se ha terminado de procesar</td>";
        break;
      case 0:
        cadena +="<td><span class='label label-primary'>Completada</span></td>";
        cadena +="<td>Transacción Completada Satisfactoriamente</td>";
        break;
    }
    //cadena += "<td>Falta tabla Descripcion</td>";
    cadena += "</tr>";
  }
  document.getElementById('tablaventas').innerHTML = cadena;

}


);
