class Profe {
    constructor(nombre, deporte, horario) {
        this.nombre = nombre;
        this.deporte = deporte;
        this.horario = horario;
    }
    horarioProfe() {
        if (ingresarDeporte.toLowerCase() == "futbol" || ingresarDeporte.toLowerCase() == "fútbol") {
            const disponible = horarioFutbol.filter(elemento => elemento < 10);
            alert("Profesor: " + profeFutbol.nombre + "\nTiene disponible en el horario: " + disponible);
        }
        else if (ingresarDeporte.toLowerCase() == "handball") {
            const disponible = horarioHandball.filter(elemento => elemento > 12);
            alert("Profesor: " + profeHandball.nombre + "\nTiene disponible en el horario: " + disponible);
        }
        else if (ingresarDeporte.toLowerCase() == "volleyball") {
            const disponible = horarioVolley.filter(elemento => (elemento < 19 && elemento > 16));
            alert("Profesor: " + profeVolley.nombre + "\nTiene disponible en el horario: " + disponible);
        }
        else if (ingresarDeporte.toLowerCase() == "libre" || ingresarDeporte.toLowerCase() == "entrenamiento libre") {
            const disponible = horarioLibre.filter(elemento => elemento == 20);
            alert("Profesor: " + profeLibre.nombre + "\nTiene disponible en el horario: " + disponible);
        }
    }
    agendado() {
        alert("Muchas gracias " + ingresarNombre + " fue agendado correctamente.\nLe enviaremos un mail de confirmación al siguiente correo: " + ingresarMail)
    }
}
// Profesores
const profeFutbol = new Profe("Matias", "Futbol", "Matutino");
const profeHandball = new Profe("Mateo", "Handball", "Matutino o vespertino");
const profeVolley = new Profe("Juan", "Volleyball", "Vespertino");
const profeLibre = new Profe("Mario", "Entrenamiento Libre", "Nocturno");

// Horarios determinados de cada profesor
const horarioFutbol = [8, 9, 10, 11, 12];
const horarioHandball = [8, 9, 10, 11, 12, 14, 15, 16, 17];
const horarioVolley = [15, 16, 17, 18, 19];
const horarioLibre = [19, 20, 21, 22];

// Ingreso del nombre, mail y  validación
let ingresarNombre = prompt("Ingrese su nombre completo: ")
let ingresarMail = prompt("Ingrese su correo de mail: ")
while (ingresarNombre == "" || ingresarMail == "") {
    alert("No ingreso alguno de los datos solicitados: Nombre o Mail");
    ingresarNombre = prompt("Ingrese su nombre completo: ");
    ingresarMail = prompt("Ingrese su correo de mail: ");
}
// Validar si ingreso un número
function horas(ingresarHorario) {
    if (isNaN(ingresarHorario)) {
        alert('No ingrestaste un numero! Vuelve a completar los datos.');
    }
    return ingresarHorario;
}

// Ingreso del deporte y horario que se quiere agendar
let arrayAgenda = [];
let ingresarDeporte = prompt("Ingresar que deporte desea practicar: \n-Fútbol \n-Handball \n-Volleyball \n-Entrenamiento Libre \n- Salir");
let ingresarHorario = 0;

while (ingresarDeporte.toLowerCase() != "salir") {
    switch (ingresarDeporte.toLowerCase()) {
        case "fútbol":
        case "futbol":
            profeFutbol.horarioProfe();
            ingresarHorario = parseInt(prompt("Ingresar horario de preferencia: "));
            horas(ingresarHorario);
            while (ingresarHorario < 8 || ingresarHorario > 9) {
                alert("Debe elegir un horario disponible:\n8hrs\n9hrs");
                ingresarHorario = parseInt(prompt("Ingresar horario " + profeFutbol.horario + ":"));
                horas(ingresarHorario);
            }
            if (isNaN(ingresarHorario) == false) {
                profeFutbol.agendado();
                arrayAgenda.push(new Profe(profeFutbol.nombre, profeFutbol.deporte, ingresarHorario));
                for (const profe of arrayAgenda) {
                    let mostrarAgenda = document.createElement("div");
                    mostrarAgenda.innerHTML = `<div><h4>Nombre Profesor:</h4> <p>${profeFutbol.nombre} </p>
                                            <h4>Deporte:</h4> <p>${profeFutbol.deporte} </p>
                                            <h4>Hora:</h4> <p>${ingresarHorario}:00 </p>
                                            <hr></div>`;
                    document.body.appendChild(mostrarAgenda);
                }
            }
            break;
        case "handball":
            profeHandball.horarioProfe();
            ingresarHorario = parseInt(prompt("Ingresar horario de preferencia: "));
            horas(ingresarHorario);
            while (ingresarHorario < 14 || ingresarHorario > 17) {
                alert("Debe elegir un horario disponible:\n14hrs\n15hrs\n16hrs\n17hrs ");
                ingresarHorario = parseInt(prompt("Ingresar horario " + profeHandball.horario + ":"));
                horas(ingresarHorario);
            }
            if (isNaN(ingresarHorario) == false) {
                profeHandball.agendado();
                arrayAgenda.push(new Profe(profeHandball.nombre, profeHandball.deporte, ingresarHorario));
                for (const profe of arrayAgenda) {
                    let mostrarAgenda = document.createElement("div");
                    mostrarAgenda.innerHTML = `<div><h4>Nombre Profesor:</h4> <p>${profeHandball.nombre} </p>
                                            <h4>Deporte:</h4> <p>${profeHandball.deporte}</p>
                                            <h4>Hora:</h4> <p>${ingresarHorario}:00</p>
                                            <hr></div>`;
                    document.body.appendChild(mostrarAgenda);
                }
            }
            break;
        case "volleyball":
            profeVolley.horarioProfe();
            ingresarHorario = parseInt(prompt("Ingresar horario de preferencia: "));
            horas(ingresarHorario);
            while (ingresarHorario < 17 || ingresarHorario > 18) {
                alert("Debe elegir un horario disponible:\n17hrs \n18hrs");
                ingresarHorario = parseInt(prompt("Ingresar horario " + profeVolley.horario + ":"));
                horas(ingresarHorario);
            }
            if (isNaN(ingresarHorario) == false) {
                profeVolley.agendado();
                arrayAgenda.push(new Profe(profeVolley.nombre, profeVolley.deporte, ingresarHorario));
                for (const profe of arrayAgenda) {
                    let mostrarAgenda = document.createElement("div");
                    mostrarAgenda.innerHTML = `<div><h4>Nombre Profesor:</h4> <p>${profeVolley.nombre} </p>
                                            <h4>Deporte:</h4> <p>${profeVolley.deporte}</p>
                                            <h4>Hora:</h4> <p>${ingresarHorario}:00</p>
                                            <hr></div>`;
                    document.body.appendChild(mostrarAgenda);
                }
            }
            break;
        case "libre":
        case "entrenamiento libre":
            profeLibre.horarioProfe();
            ingresarHorario = parseInt(prompt("Ingresar horario de preferencia: "));
            horas(ingresarHorario);
            while (ingresarHorario !== 20) {
                alert("Debe elegir un horario disponible:\n20hrs");
                ingresarHorario = parseInt(prompt("Ingresar horario " + profeVolley.horario + ":"));
                horas(ingresarHorario);
            }
            if (isNaN(ingresarHorario) == false) {
                profeLibre.agendado();
                arrayAgenda.push(new Profe(profeLibre.nombre, profeLibre.deporte, ingresarHorario));
                for (const profe of arrayAgenda) {
                    let mostrarAgenda = document.createElement("div");
                    mostrarAgenda.innerHTML = `<div> <h4>Nombre Profesor:</h4> <p>${profeLibre.nombre} </p>
                                            <h4>Deporte: </h4> <p>${profeLibre.deporte}</p>
                                            <h4>Hora:</h4> <p>${ingresarHorario}:00</p>
                                            <hr></div>`;
                    document.body.appendChild(mostrarAgenda);
                }
            }
            break;
        default:
            alert("Debe elegir alguna de las opciones disponibles: Fútbol, Handball, Volleyball, Libre o Salir")
    }
    ingresarDeporte = prompt("Ingresar que deporte desea practicar: \n-Fútbol \n-Handball \n-Volleyball \n-Entrenamiento Libre \n- Salir");
}

document.getElementById("nombre").value = ingresarNombre;
document.getElementById("email").value   = ingresarMail;


// Ordenar horarios del día
let ordenarHorario = [];
ordenarHorario = arrayAgenda.map(elemento => elemento);
ordenarHorario = arrayAgenda;
ordenarHorario.sort(function (a, b) {
    return a.horario - b.horario;
});
let boton = document.getElementById("ordenarAgenda");
boton.onclick = () => {console.log(ordenarHorario)};

// Formulario Agenda
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
let registroAgendados = document.getElementById("enviar");
registroAgendados.onclick = () => { if(eventoValidado == true){console.log("Se registra un entrenamiento para el día: " + fecha.value)}};