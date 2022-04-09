export function formato_rut(srut) {   
    if (srut === null || srut === 0) {
        return "";
    }
  
    var cont = 0;
    var formato;
  
    srut = srut.split('.').join('');
    srut = srut.split('-').join('');
  
    var regex = /^(\d*)[k|K|0-9]{1}$/;
  
    if (srut.length === 0) {
        return "";
    } else if (srut.length > 1 && regex.test(srut)) {
        formato = "-" + srut.substring(srut.length - 1);
        for (var i = srut.length - 2; i >= 0; i--) {
            formato = srut.substring(i, i+1) + formato;
            cont++;
            if (cont === 3 && i !== 0) {
                formato = "." + formato;
                cont = 0;
            }
        }
        return formato;
    } else {
        return regex.test(srut) ? srut : formato_rut(srut.substring(0, srut.length - 1));
    }
  }

  export function formato_monto(valor, aceptaNegativos) {
    if( aceptaNegativos === null ) aceptaNegativos = false;
   
    if (valor === null) {
        return "";
    }
   
    valor = valor.toString().split('.').join('');
    var cont = 0;
    var formato = "";
    var regex = aceptaNegativos ? /^\-?\d*$/ : /^\d*$/;
   
    if (valor.length === 0) {
        return "";
    } else if (valor.length > 1 && regex.test(valor)) {
        let negativo = valor.startsWith("-");
        if( aceptaNegativos && negativo ) valor = valor.substring(1);
       
        for (var i = valor.length - 1; i >= 0; i--) {
            formato = valor.substring(i, i+1) + formato;
            cont++;
            if (cont === 3 && i !== 0) {
                formato = "." + formato;
                cont = 0;
            }
        }
       
        if( aceptaNegativos && negativo ) formato = "-" + formato;
        return formato;
    } else {
        return regex.test(valor) ? valor : formato_monto(valor.substring(0, valor.length - 1));
    }
  }
  