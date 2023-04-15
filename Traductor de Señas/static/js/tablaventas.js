function cargarVentas(){
  $("#formFecha").attr("action","Vistaventas.php?fini="+$("#fechai").val()+"&ffin="+$("#fechaf").val());

}

$(document).ready(

function(){

  var contar = $("#contar").val();
  //console.log(contar);
  var cadena = "<tr><th>Usuario</th><th>Fecha</th><th>Estado</th><th>Descripcion</th><th style='width:10%'>Total</th><th>Direccion</th><th>Correo</th></tr>";

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
    cadena += "<td>L. "+Number($("#total"+i+"").val()).toFixed(2)+"</td>";
    cadena += "<td>"+$("#direccion"+i+"").val()+"</td>";
    cadena += "<td>"+$("#correo"+i+"").val()+"</td>";

    cadena += "</tr>";
  }
  document.getElementById('tablaventas').innerHTML = cadena;

}
);
