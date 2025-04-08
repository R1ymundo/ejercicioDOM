let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let lista = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");
let otroElemento = document.querySelector("ul>li");
let otrosElementos = document.querySelectorAll("ul>li");
let btnMostrar = document.getElementById("btnMostrar");

let contador = 0;

console.log(lista.length);
console.log(lista[0]);
console.log(lista.item(1))
console.log(elementos.length);
console.log(elementos.item(2));
console.log("otroElemento:", otroElemento);
console.log("otrosElementos:", otrosElementos.length);

function modifica(){
    encabezado1.innerText = "Ejercicio DOM";
    encabezado2.innerHTML = "<em> DOM Exercise <em>";
}

console.log(encabezado1.innerText);
console.log(encabezado2.innerText);

btnMostrar.addEventListener("click", function(event){
    event.preventDefault(); //no hagas lo que haces por defecto
    console.log("Botón btnModificar presionado");
    
});