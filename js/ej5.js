document.getElementById("iniciar").addEventListener("click", function () { myFunc(); });

let myFunc=()=>{
    let nombre="RX8"
    nombre=nombre+(parseInt(Math.random() * (99 - 0) + 0));
    alert(nombre);
}