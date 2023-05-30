//document.querySelector("#resultado")
// ver de hacer una funcion 

const textArea = document.querySelector(".texto");
const mensaje = document.querySelector(".resultado");

// arreglos multidimensionales
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value= "";
    mensaje.style.backgroundImage = "none"
}
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a", "ai"], ["o","ober"],["u", "ufat"]]

    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    
    return stringEncriptada;
    
    
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value= "";
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a", "ai"], ["o","ober"],["u", "ufat"]]

    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0] );
        }
    }
    
    return stringDesencriptada;
    
    
}

function btnCopiar(){
    copiar()
        


}

function copiar(){

    let resultado = document.querySelector(".resultado")
    let boton = document.querySelector(".copiar")
    navigator.clipboard.writeText(resultado.value)
    boton.textContent = "Copiado"
    resultado.value= ""

    setTimeout(function(){
        boton.textContent = "Copiar";
    }, 3000);

}

// imprime tabla en la consola
//console.table(matrizCodigo)

