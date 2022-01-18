
function encriptado(e) {
    e.preventDefault();
    var texto = document.getElementById("texto").value;
    let encripto = new Array();
    texto = texto.toLowerCase();
    for (i = 0; i < texto.length; i++) {
        if (texto.charAt(i) == 'e') {
            encripto.push('enter');
        } else if (texto.charAt(i) == 'i') {
            encripto.push('imes')
        } else if (texto.charAt(i) == 'a') {
            encripto.push('ai');
        } else if (texto.charAt(i) == 'o') {
            encripto.push('ober');
        } else if (texto.charAt(i) == 'u') {
            encripto.push('ufat');
        }
        else {
            encripto.push(texto.charAt(i));
        }
    }
    document.getElementById("resultado").value = encripto.join('')
    document.getElementById("texto").value = "";
}


function copiar(e) {
    e.preventDefault();
    // var resultado = document.getElementById("resultado").value
    // document.getElementById("texto").value = resultado
    var content = document.getElementById('resultado');
    
    content.select();
    document.execCommand('copy');
}

function desencriptar(e) {
    e.preventDefault();
    var texto = document.getElementById("resultado").value;
    texto = texto.toLowerCase();
    let desencripto = new Array();
    var band = 0;

    while (band <= texto.length) {
        if(texto.charAt(band) == 'a' && texto.substring(band,band+2) == 'ai'){
            desencripto.push('a');
            band = band + 2;
        }else if(texto.charAt(band) == 'o' && texto.substring(band,band+4) == 'ober'){
            desencripto.push('o');
            band = band + 4;
        }else if(texto.charAt(band) == 'e' && texto.substring(band,band+5) == 'enter'){
            desencripto.push('e');
            band = band + 5;
        }else if(texto.charAt(band) == 'i' && texto.substring(band,band+4) == 'imes'){
            desencripto.push('i');
            band = band +4;
        }else if(texto.charAt(band) == 'u' && texto.substring(band,band+4) == 'ufat'){
            desencripto.push('u');
            band = band +4;
        }
        else{
            desencripto.push(texto.charAt(band))
            band++
        }
    }
    document.getElementById("resultado").value = desencripto.join('');
    document.getElementById("texto").value = "";
}
