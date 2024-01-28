"use strict"

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if(name === "" || lastName === "" || email === "" || phone === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if(!email.includes("@")) {
        alert("Por favor, introduce un email válido.");
        return false;
    }

    if(isNaN(phone)) {
        alert("Por favor, introduce un número de teléfono válido.");
        return false;
    }

    alert("Formulario enviado con éxito.");
    return true;
});