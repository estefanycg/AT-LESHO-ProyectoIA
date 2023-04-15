const cl = console.log;
(function() {
  card = {
    // Funcion que valida la longitud del input ingresado por el usuario
    validNumber(input) {
      let regex = /^\d*$/;
      if (!input.search(regex))
        return input;
      else return false;
    },
    validName(input) {
      let regex = /^[a-zA-Z\s]*$/;
      if (regex.test(cadena))
        return cadena;
      else return false;
    },
    validCvv(input) {
      let regex = /^\d{3}$/;
      if (regex.test(input)) return input
      // cvv.setAttribute('disabled', true);       
      else cl('errorCvv')
    },
    validMonth(input) {
      let regex = /^\d{2}$/;
      if (regex.test(input))
        return input;
      else return false;
    },
    validYear(input) {
      let regex = /^\d{2}$/;
      if (regex.test(input))
        return input;
      else return false;
    },
    validCard(numberCard) {
      if (numberCard) {
        let sumaTotal = 0;
        let revserNum = [...numberCard].reverse(); // obteniendo array inverso  
        for (let index = 1; index < revserNum.length; index = index + 2) {
          revserNum[index] = revserNum[index] * 2;
          if (revserNum[index] >= 10) {
            revserNum[index] = revserNum[index] - 9;
          }
        }
        for (let value of revserNum) {
          sumaTotal = sumaTotal + parseInt(value);
        }
        if (sumaTotal % 10 === 0) {
          return true;
          console.log('Es una tarjeta valida');
        }
      } else return cl('la tarjet es invalida');
    }
  };
})();


function formatString(e) {
    var inputChar = String.fromCharCode(event.keyCode);
    var code = event.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }
  
    event.target.value = event.target.value.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
      /\/\//g, '/' // Prevent entering more than 1 `/`
    );
  }



function checkDigit(event) {
    var code = (event.which) ? event.which : event.keyCode;

    if ((code < 48 || code > 57) && (code > 31)) {
        return false;
    }

    return true;
}

function direccionarcarrito(){
  href="carrito.php"
}
