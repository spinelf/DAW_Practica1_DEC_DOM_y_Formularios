
function validacion() {
    /*Generamos las validaciones para comprobar que no hay campos vacios en el formulario y que estan
    en el formato correcto*/
    
    console.log("comprobando la validación")
    if (nombre.value.trim() == "") {
        alert('Por favor, escribe tu nombre');
        nombre.focus();
        return false;
    } 
    console.log("comprobado el nombre")
    if (direccion.value.trim() == "") {
        alert('Por favor, escribe tu dirección');
        direccion.focus();
        return false;
    }
    console.log("comprobada la dirección")
    if (telefono.value.trim() == "") {
        alert('Por favor, escribe tu teléfono');
        telefono.focus();
        return false;
    }
    console.log("comprobado el teléfono")
    if (email.value.trim() == "") {
        alert('Por favor, escribe tu e-mail');
        direccion.focus();
        return false;
    }
    //console.log("comprobado e-mail")  

    /*Cargamos en una array los distintos tamaños del formulario y utilizamos un for para recorrerlo
    y ver que opcion está marcada.*/

    tamano = document.getElementsByName("tamano");
            var seleccionado = false;
            for(var i=0; i<tamano.length; i++) {
                if(tamano[i].checked) {
                    seleccionado = true;
                    break;
                }
            }

    // Informamos al usuario que tiene que marcar un tamaño de pizza obligatorio.
            if(!seleccionado) {
                alert('Debes seleccionar un tamaño para tu pizza');
                return false;
            }
    
    // console.log("comprobado tamaño")

    //Informamos al usuario que debe seleccionar al menos un ingrediente.

    if(!bacon.checked && !cebolla.checked && !peperoni.checked && !champinon.checked) {
        alert ("debes elegir al menos un ingrediente")
        return false
    }
    //console.log("comprobados los ingredientes")  
    
    alert("el precio de tu pizza es " + calcularPrecioPizza()+ "€. Ya va en camino");
}

/*Funcion que nos calcula el precio de la pizza teniendo en cuenta 
el tamaño seleccionado y el numero de ingredientes.*/

function calcularPrecioPizza () {
    let listadoPrecios={"pequeña" : 5, "mediana" : 10, "grande": 15}
    var precioPizzaSeleccionado = 0; //Creamos la variable para recoger el valor del for por el tamaño y el for de los ingrediente
    tamano = document.getElementsByName("tamano");
    for(var i=0; i<tamano.length; i++) {
        if(tamano[i].checked) {
            precioPizzaSeleccionado=listadoPrecios[tamano[i].value] 
            break;
        }     
    }
    ingredientes=document.getElementsByClassName("ingredientes")
    for(var i=0; i<ingredientes.length; i++){
        if(ingredientes[i].checked) {
            precioPizzaSeleccionado++; //Incrementamos el precio de la pizza 1€ por cada ingrediente seleccionado.
        }
    }
    return precioPizzaSeleccionado; //Devolvemos el precio de la pizza teniendo en cuenta el tamaño y los ingredientes.
}
// Cargamos las funciones cuando se carga la página lo que nos permite tener el js 
window.onload = function(){
    formulario_pizza.onsubmit = validacion;  //Cuando le damos al botón submitir llamamos al javascript.                                   
}
