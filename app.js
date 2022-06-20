function recogerDatos(){

let input_name = document.querySelector("#name").value;
let input_year = document.querySelector("#year").value;
let edad = 2022 - input_year;
let welcome = document.querySelector("#welcome");
let mensajeEdad;
let mensaje;

if(edad > 30){
    mensajeEdad = "Estas en la edad media!";
}else if (edad < 30){
    mensajeEdad = "Sos joven! ";
}else{
    mensajeEdad = "Llegaste a la edad media!";
}

mensaje = '<p style="text-align:center;">Hola, ' + input_name + " tu edad es " + edad + ", y naciste en el año " + input_year + "  <br>"+ mensajeEdad + "</p>";
welcome.innerHTML = mensaje;
}



