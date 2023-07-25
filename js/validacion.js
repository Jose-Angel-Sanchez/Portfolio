export function validaInput (input) {
    const tipoDeInput = input.dataset.tipo;
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }
    if(input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = '';
        if(input.value.length > input.maxLength - 1){
            input.parentElement.classList.add('input-container--invalid');
            input.parentElement.querySelector('.input-message-error').innerHTML = "El campo no puede contener más de " + input.maxLength + " caracteres.";
        }   
    }
    else{
        input.parentElement.classList.add('input-container--invalid');
        input.parentElement.querySelector('.input-message-error').innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
    
}
export function validaTextarea (textarea){
    const correo = textarea.dataset.tipo;
    if (validadores[correo]) {  
        validadores[correo](textarea);
    }
    if(textarea.validity.valid) {
        textarea.parentElement.classList.remove('textarea-container--invalid');
        textarea.parentElement.querySelector('.textarea-message-error').innerHTML = '';
        if(textarea.value.length > textarea.maxLength - 1){
            textarea.parentElement.classList.add('textarea-container--invalid');
            textarea.parentElement.querySelector('.textarea-message-error').innerHTML = "El campo no puede contener más de " + textarea.maxLength + " caracteres.";
        }
    }
    else{
        textarea.parentElement.classList.add('textarea-container--invalid');
        textarea.parentElement.querySelector('.textarea-message-error').innerHTML = mostrarMensajeDeError(correo, textarea);
    }   
}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "customError",
    "tooShort",
];
const mensajesDeError = {
    nombreCl:{
        valueMissing: 'Por favor indica quién redacta el mensaje.',
        tooShort: 'El nombre debe contener al menos 3 caracteres.',
    },
    emailCl: {
        valueMissing: 'El email es obligatorio.',
        tooShort: 'El email debe contener al menos 3 caracteres, no olvides agregar el @.',
        typeMismatch: 'El email ingresado no es válido o no existe.',
    },
    asuntoCl: {
        valueMissing: 'Escribe el asunto, mientras más descriptivo mejor.',
        tooShort: 'El asunto debe contener al menos 10 caracteres.',
    },
    mensajeCl: {
        valueMissing: 'No es posible enviar un correo en blanco.',
        tooShort: 'El mensaje debe contener al menos 20 caracteres.',
    },
};
const validadores = {
    nombre: input => input.setCustomValidity('Campo obligatorio')
};

function mostrarMensajeDeError (tipoDeInput, input) {
    let mensaje = '';
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensaje;
}