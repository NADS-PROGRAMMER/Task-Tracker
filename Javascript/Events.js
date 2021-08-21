"use strict";


function addOnInputEvent(...fields) {

    fields.forEach(field => {
        field.addEventListener('input', () => {

            if (field.value === '')
                field.style.border = '2px solid #d9534f';
            else 
                field.style.border = '2px solid #5cb85c';
        });
    })
}

export {addOnInputEvent};