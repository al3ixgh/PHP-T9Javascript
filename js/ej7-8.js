document.getElementById("enviar").addEventListener("click", function () { myFunc(); });

let myFunc = () => {
    let nombre = document.getElementById("texto").value;
    let array = nombre.split('');
    let result = [];
    console.log(array);
    console.log(typeof (array));
    for (i = 0; i < array.length; i++) {

        if ((array[i].charCodeAt() > 96) && (array[i].charCodeAt() < 123)) {
            array[i] = array[i].charCodeAt() - 32;
            result[i] = String.fromCharCode(array[i]);
        }
        //caso del 'espacio'
        else if (array[i].charCodeAt() == 32) {
            result.push(' ');
        }
        //caso de la 'ñ'
        //  else if (array[i].charCodeAt() == '164') { no me coje el codigo asci
        else if(array[i]=='ñ'){
            result.push('Ñ')
        }
        else if(array[i].charCodeAt() == 160){
            array[i] = array[i].charCodeAt() + 21;
            result[i] = String.fromCharCode(array[i]);

        }
        else if(array[i].charCodeAt() == 32){

        }
        else if(array[i].charCodeAt() == 32){

        }
        else if(array[i].charCodeAt() == 32){

        }
        else if(array[i].charCodeAt() == 32){

        }
        else {
            result[i] = array[i];
        }


    }
    alert(result.join(''));
}