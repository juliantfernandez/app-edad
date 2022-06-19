function recogerDatos(e){
    // e.preventDefault();

let input_name = document.querySelector("#name").value;
let input_year = document.querySelector("#year").value;
let edad = 2022 - input_year;
let welcome = document.querySelector("#welcome");

welcome.innerHTML = '<p>Hola, ' + input_name + " tu edad es " + edad + ", y naciste en el año " + input_year + "</p>";
}

 let btn = document.getElementById("#btn");

