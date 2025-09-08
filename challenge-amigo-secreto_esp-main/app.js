//Estructura y DOM

let amigos = [];
let registroAmigo = document.getElementById ('amigo');
let ingresoLista = document.getElementById ('listaAmigos');

//Funcion agregar Nombre

function agregarAmigo() {

    let nombre = registroAmigo.value.trim (); // Toma el valor y elimina espacios al inicio y al final

        if (nombre == "") { // Error de campo vacio
            alert ('Ingrese un nombre'); 
            return;
        }

        let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Revisa que solo se ingresen letras en el nombre
            
            if (soloLetras.test(nombre)){

            }   else {
                alert('No se permiten caracteres especiales');
                return;
                }
        

        if (amigos.includes (nombre)) { //Revisa duplicados
            alert ('Este nombre ya fue ingresado'); 
            return;
            
        } 
    amigos.push (nombre); // Agrega el nombre al array
    registroAmigo.value = ""; // Limpia el imput
    actualizarLista ();
}

//Mostrar lista en pantalla

function actualizarLista(){
    
    ingresoLista.innerHTML = ""; //limpia lista
         for (let i = 0; i < amigos.length; i++){
            ingresoLista.innerHTML += `<li>${amigos[i]}</li>` //agrrega uno a uno los amigos al array
         }
}

//Funcion Sortear

function sortearAmigo(){
    if (amigos.length == 0) { //Verificar que el array tenga datos
        alert ('Ingrese los nombres de los participantes');
        return;
    }

let indice = Math.floor(Math.random () * amigos.length); // Indice aleatorio del largo del array
    alert (`El amigo secreto es: ${amigos[indice]}`); //Muestra una alerta con el resultado

let resultado = document.getElementById ('resultado'); //Opcional, si lo usas, eliminar el alert y reiniciar de esta funcion
    resultado.innerHTML = `<li>El amigo secreto es: ${amigos[indice]}</li>`; //Muestra en HTML el resultado

let permanent_result = amigos[indice];


reiniciar(); //Reinicia el sorteo

//Funcion Reiniciar

function reiniciar(){ //limpia todas los datos
    amigos =[];
    ingresoLista.innerHTML = "";
    registroAmigo.addEventListener('input', () => {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = "";
    });

    }
}

