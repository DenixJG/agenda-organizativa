/**
 * Codigo basico para una lista de tareas demostrativa, no guarda datos.
 * 
 * @author Rafael Popescu
 * @author Pedro Jorquera
 * @author Denis Ghimpu
 * 
 */

// Variables
var lista = document.getElementById('lista');
var tareaInput = document.getElementById('tareaInput');
var btnBorrarTarea = document.getElementById('btn-borrar');
var btnCompletarTarea = document.getElementById('btn-completado');

/**
 * Agrega una tarea nueva
 * 
 */
function agregarTarea() {
    // Mas variables
    var tarea = tareaInput.value;
    var nuevaTarea = document.createElement('li');
    var enlace = document.createElement('a');
    var botonBorrar = document.createElement('div');
    var botonCompletar = document.createElement('div');
    var contenido = document.createTextNode(tarea);

    // Evitamos que el input no tenga texto
    if (tarea === '') {
        tareaInput.setAttribute('placeholder', 'Agrega una tarea valida');
        tareaInput.className = 'error';
        return false;
    }

    // Texto de los div que funcionan como boton
    botonBorrar.innerHTML = 'Borrar';
    botonCompletar.innerHTML = 'Completar';

    // Funciones integradas en los botones
    botonBorrar.setAttribute('onclick', 'borrarTarea(this);');
    botonCompletar.setAttribute('onclick', 'completarTarea(this);');

    // Agregamos a los div las clases para que tomen la forma de boton
    botonBorrar.setAttribute('class', 'btn-borrar');
    botonCompletar.setAttribute('class', 'btn-completado');

    // Agregamos a las listas los div que funcionan de boton
    nuevaTarea.appendChild(botonBorrar);
    nuevaTarea.appendChild(botonCompletar);

    // Agregamos el contenido al enlace
    enlace.appendChild(contenido);
    // Le establecemos un atributo href
    enlace.setAttribute('href', '#');
    // Agrergamos el enlace (a) a la nueva tarea (li)
    nuevaTarea.appendChild(enlace);
    // Agregamos la nueva tarea a la lista
    lista.appendChild(nuevaTarea);

    // Dejamos vacio el input para que vuelva a escribir
    tareaInput.value = '';
}

/**
 * Comprueba el input de agegar tarea
 */
function comprobarInput() {
    tareaInput.className = '';
    teareaInput.setAttribute('placeholder', 'Agrega tu tarea');
}

/**
 * Elimina una tarea de la lista
 * 
 * @param {*} tarea Tarea a eliminar, por defecto usar this
 */
function borrarTarea(tarea) {
    var borrarLi = tarea.parentNode;
    document.getElementById('lista').removeChild(borrarLi);
}

/**
 * Marca una tarea de la lista como completada
 * 
 * @param {*} tarea Tarea a completar, por defecto usar this
 */
function completarTarea(tarea) {
    var completarTarea = tarea.parentNode;
    completarTarea.setAttribute('class', 'tarea-completada');
}
