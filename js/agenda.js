let miFormulario = document.getElementById("formulario");

miFormulario.addEventListener("submit", validarForm);

let eventoValidado = false;


function validarForm(evento) {
    evento.preventDefault();
    const nombre = document.getElementById ("nombre");
    const fecha = document.getElementById("fecha");
    const horario = document.getElementById("horario");
    const deporte = document.getElementById("deporte");

    if (nombre.value == "") {
        alert("Ingrese un nombre por favor");
        return;
    }
    if (fecha.value == "") {
        alert("Ingrese una fecha por favor");
        return;
    }
    if (horario.value == "") {
        alert("Ingrese un horario por favor");
        return;
    } 
    if (deporte.value == 0 && (parseInt(horario.value) < 8 || parseInt(horario.value) > 11) ) {
        alert("Ese horario no esta disponible. \nHorario disponible: De 8:00 a 12:00");
        return;
    }
    if (deporte.value == 1 && (parseInt(horario.value) < 10 || parseInt(horario.value) > 16) ) {
        alert("Ese horario no esta disponible. \nHorario disponible: De 10:00 a 17:00");
        return;
    }
    if (deporte.value == 2 && (parseInt(horario.value) < 13 || parseInt(horario.value) > 17) ) {
        alert("Ese horario no esta disponible. \nHorario disponible: De 13:00 a 18:00");
        return;
    }
    if (deporte.value == 3 && (parseInt(horario.value) < 19 || parseInt(horario.value) > 21) ) {
        alert("Ese horario no esta disponible. \nHorario disponible: De 19:00 a 22:00");
        return;
    }
    else {
         eventoValidado = true;
         alert("Su horario quedo agendado correctamente. \nNombre: " + nombre.value + "\nFecha: " + fecha.value + "\nHorario: " + horario.value);
    }    
}

// Evento Onclick
let boton = document.getElementById("enviar");
boton.onclick = () => { if(eventoValidado == true){console.log("Se agendo a " + nombre.value + " el día: " + fecha.value)}};

