var radio=prompt("inserta el radio del circulo");

perimetro=document.getElementById("perimetro").addEventListener("click", function () { calcularPerimetro(radio); });
area=document.getElementById("area").addEventListener("click", function () { calcularArea(radio); });

function calcularPerimetro(radio){
    alert(2*Math.PI*radio);
}

function calcularArea(radio){
    alert(Math.PI*Math.pow(radio,2));
}