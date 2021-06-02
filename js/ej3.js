document.getElementById("enviar").addEventListener("click", function () { myFunc(); });

let myFunc=()=>{
    let texto=document.getElementById("texto").value;
    //pasar el string a array para tener cada caracter en una posición
    let array=texto.split('');
    let apariciones=[];
    array.forEach(element => {
        //si la letra no ha aparecido aun, se añade a la posición del array de apariciones y seguidamente se le asigna un valor 1
        if(apariciones.indexOf(element)==-1){
            apariciones.push(element);
            apariciones.push("aparece");
            apariciones.push(1)
            apariciones.push("vez")
        }
        else{
            //si ha aparecido antes, se busca el indice donde se encuentra el elemento y, al siguiente, se le suma 1
            apariciones[apariciones.indexOf(element)+2]++;
            apariciones[apariciones.indexOf(element)+3]="veces";
        }
        //imprimimos el resultado en el parrafo separado por espacios 
        //el caracter espacio se cuenta pero queda raro 
        document.getElementById("result").innerHTML=apariciones.join(' ');
    });

}