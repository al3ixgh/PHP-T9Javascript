document.getElementById("enviar").addEventListener("click", function () { myFunc(); });

let myFunc = () => {
    let encontrado = false;
    var primo = true
    let numero = document.getElementById("numero").value;
    let i = numero - 1;

    while ((encontrado != true) && (i != 1)) {
        if ((numero % i) != 0) {
        }
        else {
            primo = false;
            encontrado = true;
        }
        i--;
    }
    if (primo == true) {
        alert("el numero " + numero + " es primo");
    }
    else {
        alert("el numero " + numero + " no es primo");
    }
}