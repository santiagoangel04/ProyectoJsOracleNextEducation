function encriptarPalabra() {
    let palabra = document.getElementById("input-texto").value;
    let resultadoPalabra = "";
    //demas logica para encriptacion
    for(let iter = 0;iter<palabra.length;iter++){
        if(palabra[iter] === "e"){
            resultadoPalabra+="enter";
        }
        else if (palabra[iter] === "i") {
            resultadoPalabra+="imes";
        }
        else if (palabra[iter] === "a") {
            resultadoPalabra+="ai";
        }
        else if (palabra[iter] === "o") {
            resultadoPalabra+="ober";
        }
        else if (palabra[iter] === "u") {
            resultadoPalabra+="ufat";
        }
        else{
            resultadoPalabra+=palabra[iter];
        }
    }
    mostraryLimpar(resultadoPalabra);
}

function mostraryLimpar(texto="") {
    document.getElementById("msg").value = texto;
}

function desencriptarPalabra() {
    let palabraDesencriptar = document.getElementById("input-texto").value
    palabraDesencriptar = palabraDesencriptar
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    mostraryLimpar(palabraDesencriptar)

}

function copiar() {
    let palabraCopiar = document.getElementById("msg").value;
    navigator.clipboard.writeText(palabraCopiar);
}