import {isFieldNotEmpty} from './container/UpdateComponent.js';
import {TaskComponent} from './container/TaskComponent.js';
import {addOnInputEvent} from './Events.js';

"use strict";

function showMessage(message, color) {
    let successMessage = document.querySelector('#adding-message');
    successMessage.style.color = color;
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    
}

function hideMessage() {
    let successMessage = document.querySelector('#adding-message');
    successMessage.style.display = 'none';
}

function addTask() {

    let task = document.querySelector('#textbox');
    let date = document.querySelector('#date');

    return new Promise((resolve, reject) => {

        if (isFieldNotEmpty(task) && isFieldNotEmpty(date)) {
            resolve({

                message: 'Task added successfully!',
                task: task.value, 
                date: date.value,
            });
            task.value = '';
            date.value = '';
        }
        reject("Please fill up the required fields.");
    })
}

/** An asynch function for creating a task.
 */
async function createTask() {

    try {

        let ul = document.querySelector('#tasks');

        // If the addTask() is resolve, it returns an object that contains the necessary information for the task.
        let {message, task, date} = await addTask();
        showMessage(message, '#5cb85c'); // show message and specified the color of the text into green.

        ul.appendChild(TaskComponent(task, date)); // append the main TaskComponent.
        document.querySelector('#textbox').style.border = '1px solid black';
        document.querySelector('#date').style.border = '1px solid black';

        // Wait for 2 sec before hiding a message
        setTimeout(() => {
            
            hideMessage();

        }, 2000);

    } catch (err) {

        // If the addTask() is rejected, we show the error message and specified the color of the text to red.
        showMessage(err, '#d9534f');
    }
}
/** 
 * Adds an event to the ADD button */
document.querySelector('#add-button').addEventListener('click', () => {
    
    createTask();
})

addOnInputEvent(document.querySelector('#textbox'));
addOnInputEvent(document.querySelector('#date'));
// addOnInputEvent(document.querySelectorAll('.update-input-events'));
