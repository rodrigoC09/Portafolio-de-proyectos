const textArea=document.querySelector(".text-area");/*captura lo que el usuario escribe*/
const mensaje =document.querySelector(".mensaje");
const mensaje2= document.querySelector(".plac");
//const $btn =document.querySelector(".copiarTexto");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

let matriz= [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function btnEncriptar(){
    
    if(textArea.value===""){
        campoVacio();
    }else{
        const textoEncriptado =encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value ="";
        mensaje.style.backgroundImage = "none";
    }
}
function encriptar(strEncriptado){
    
    strEncriptado = strEncriptado.toLowerCase();
    for(let i =0; i<matriz.length; i++){
        if(strEncriptado.includes(matriz[i][0])){
            strEncriptado = strEncriptado.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
        return strEncriptado;
    
}
function btnDesencriptar(){
    
    if(textArea.value===""){
        campoVacio();
    }else{
        const textoEncriptado=desencriptar(textArea.value);
    mensaje.value =textoEncriptado;
    textArea.value ="";
    mensaje.style.backgroundImage = "none";
    }
}
function desencriptar(strDesencriptado){
    
    strDesencriptado = strDesencriptado.toLowerCase();
    for (let i = 0; i < matriz.length; i++) {
        if (strDesencriptado.includes(matriz[i][1])) {
            strDesencriptado = strDesencriptado.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return strDesencriptado;
    
}
function btnCopiar(){
    if(mensaje.value===""){
        campoVacio();
    }else{
        mensaje.select();
        document.execCommand("copy");
        mensaje.value="";
        
    }
}
function campoVacio(){
    alert("El campo esta vacio");
    mensaje.value="";
    return;
    
}
function porDefecto(){
    mensaje.value="Ningún mensaje fue encontrado";
}
function soloLetras(){
    alert("Hola");
}
function setPlace() {  
    if(mensaje.value==''){
        mensaje2.value="";
    }else{
        mensaje2.value = mensaje.value;  
    }
}  
