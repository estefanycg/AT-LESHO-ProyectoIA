$(document).ready(
function(){
  var contar = $("#contar").val();
  console.log(contar);

  var cadena = "<tr><th>Nombre</th><th>Direccion</th><th>Telefono</th><th>Email</th></tr>";

  for (var i = 0; i < contar ; i++) {
    cadena += "<tr>"
    //console.log("<?php  echo $filas['idventa']; ?>");
    //cadena +="<td>"+$("#idcliente"+i+"").val()+"</td>";

    cadena +="<td>"+$("#nombre"+i+"").val()+"</td>";

    cadena +="<td>"+$("#direccion"+i+"").val()+"</td>";

    cadena +="<td>"+$("#telefono"+i+"").val()+"</td>";

    cadena +="<td>"+$("#email"+i+"").val()+"</td>";



    /*switch($("#estado"+i+"").val()){
      default:
        cadena +="<td><span class='label label-danger'>Fallida</span></td>";
        break;
      case 'p':
        cadena +="<td><span class='label label-warning'>Pendiente</span></td>";
        break;
      case 'c':
        cadena +="<td><span class='label label-primary'>Completada</span></td>";
        break;
    }*/
    cadena += "</tr>";
  }
  document.getElementById('tablaventas').innerHTML = cadena;
}

);
