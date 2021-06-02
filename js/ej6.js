document.getElementById("enviar").addEventListener("click", function () { myFunc(); });

let myFunc=()=>{
    let nombre=document.getElementById("texto").value;
    let array=nombre.toUpperCase().split('');
    let resultado=[2];
    nombre.toUpperCase();
    resultado[0]=array[0];
    resultado[1]=array[1];
    resultado.push(array[0].charCodeAt()-64);
    resultado.push(array[1].charCodeAt()-64);
    alert(resultado.join(''));
}