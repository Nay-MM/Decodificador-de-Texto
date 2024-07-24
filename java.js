let textoInput = document.querySelector("#input-texto");
let output = document.querySelector("#output");
  
function criptografar() {
    let texto = textoInput.value;
     
    let resultCripto = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
 
   document.getElementById('output').innerHTML = '<textarea reandoly id"input-texto">' + resultCripto +
   '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar<button>'
}

function descriptografar() {
    let texto = textoInput.value;

    let resultDescripto = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  document.getElementById('output').innerHTML = '<textarea readonly id"input-texto">' + resultDescripto +
  '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar"()">Copiar<button>'
}

function copiar() {
    let textoCopiar = document.getElementById('input-texto')
     
    textoCopiar.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}




  



    