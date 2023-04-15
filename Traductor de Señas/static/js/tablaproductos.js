function buscar() {   
    if ($("#txtBuscar").val() != "") {         
      window.location.href = "Vistaproductos.php?find=" + $("#txtBuscar").val();    
     } 
      else {  
               window.location.href = "Vistaproductos.php";    
               } 
               }

$(document).ready(
  function() {
      var contar = $("#contar").val();
      console.log(contar)

      var cadena = "<tr><th>Codigo</th><th>Nombre</th><th>Categoria</th><th>Stock</th><th>Precio/U</th><th width='35%'>Descripcion</th><th width='15%'>Imagen</th></tr>";

      for (var i = 0; i < contar; i++) {
          cadena += "<tr>"
              //console.log("<?php  echo $filas['idventa']; ?>");
              //cadena +="<td>"+$("#idarticulo"+i+"").val()+"</td>";

          cadena += "<td>" + $("#codigo" + i + "").val() + "</td>";

          cadena += "<td>" + $("#nombre" + i + "").val() + "</td>";

          cadena += "<td>" + $("#categoria" + i + "").val() + "</td>";

          cadena += "<td>" + $("#stock" + i + "").val() + "</td>";

          cadena += "<td>" + $("#precioVenta" + i + "").val() + "</td>";

          cadena += "<td>" + $("#descripcion" + i + "").val() + "</td>";

          cadena += "<td style='width:8em;height:10em'><img width=100% src='" + $("#ruta" + i + "").val() + "'></td>";


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
          cadena += "</tr>"
      }
      document.getElementById('tablaventas').innerHTML = cadena;
  }

);


