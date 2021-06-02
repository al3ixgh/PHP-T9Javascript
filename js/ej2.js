document.getElementById("enviar").addEventListener("click", function () { myFunc(); });

function myFunc(){
    let radio=document.getElementById("radio").value;
    let area=calcularArea(radio);
    let perimetro=calcularPerimetro(radio);
    document.getElementById("result").innerHTML='el perimetro del radio introducido es'+perimetro+'y el area es '+area
}

function calcularPerimetro(radio){
    return(2*Math.PI*radio);
}

function calcularArea(radio){
    return(Math.PI*Math.pow(radio,2));
}