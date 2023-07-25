import { validaInput, validaTextarea } from "./validacion.js";

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('blur', (input) => {
        validaInput(input.target);
    });
});

const textareas = document.querySelectorAll('textarea');

textareas.forEach((textarea) => {
    textarea.addEventListener('blur', (textarea) => {
        validaTextarea(textarea.target);
    });
}); 