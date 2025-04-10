let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let lista = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");
let otroElemento = document.querySelector("ul>li");
let otrosElementos = document.querySelectorAll("ul>li");
let btnMostrar = document.getElementById("btnMostrar");
let txtRFC = document.getElementById("txtRFC");
let txtCURP = document.getElementById("txtCURP");
let txtTelefono = document.getElementById("txtTelefono");
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

    let element = document.createElement("li");
    element.innerText = "Another item"; //<li> Another item </li>
    element.classList.add("list-group-item");
    
    let element2 = element.cloneNode(true);
    
    // before insertta el elemento antes de la lista
    // lista.item(0).before(element);

    // prendend insertta el elemento al principio de la lista
    // lista.item(0).prepend(element2);

    // append insertta el elemento al final de la lista
    // lista.item(0).append(element);

    // after insertta el elemento despues de la lista
    // lista.item(0).after(element2);

    // afterbegin insertta el elemento al principio de la lista
    // lista.item(1).insertAdjacentElement("afterbegin", element);

    // beforeend insertta el elemento al final de la lista
    // lista.item(1).insertAdjacentElement("beforeend", element2);


    // beforebegin insertta el elemento antes de la lista
    lista.item(1).insertAdjacentHTML("beforebegin", `<li class="list-group-item">Before Begin</li>`)
    
    // afterend insertta el elemento despues de la lista
    lista.item(1).insertAdjacentHTML("afterend", `<li class="list-group-item">After End</li>`)

    // afterbegin insertta el elemento al principio de la lista
    lista.item(1).insertAdjacentHTML("afterbegin", `<li class="list-group-item">After Begin</li>`)

    // beforeend insertta el elemento al final de la lista
    lista.item(1).insertAdjacentHTML("beforeend", `<li class="list-group-item">Before End</li>`)
    
}); //btnMostrar

// Se jecuta cuando termina de cargar todos los elementos de la pagina
window.addEventListener("load",function(event){
    console.log("Se termino de cargar la página")
});//load

//txtToUpper funcion para hacer mayusculas
function txtToUpper(event){
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
}

//blur -> cuando se sale del campo
txtRFC.addEventListener("blur", txtToUpper); //txtRFC

txtTelefono.addEventListener("blur", function(event){
    event.preventDefault();
    txtTelefono.value = txtTelefono.value.trim().slice(0,10);
}); //txtTelefono

txtCURP.addEventListener("blur", txtToUpper); //txtCURP


// verion extensa --- Nota: no es mantenible a futuro

// txtRFC.addEventListener("blur",  function(event){
//     event.preventDefault();
//     event.target.value = event.target.value.trim().toUpperCase();
// });

// txtCURP.addEventListener("blur",  function(event){
//     event.preventDefault();
//     event.target.value = event.target.value.trim().toUpperCase();
// });
