import {UpdateComponent, isFieldNotEmpty} from './container/UpdateComponent.js';

"use strict";

/** A function that creates the task component. */
function TaskComponent(task, date) {

    let li = document.createElement('li');
    let taskContent = document.createElement('p');
    let dateContent = document.createElement('p');
    let taskSection = document.createElement('section');
    let buttonSection = document.createElement('section');
    let updateButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    let updateSection = UpdateComponent(li);

    /** Setting all the attributes that match the */
    li.setAttribute('class', 'task');
    taskContent.setAttribute('id', 'task-content');
    dateContent.setAttribute('id', 'date-content');
    taskSection.setAttribute('class', 'task-section');
    buttonSection.setAttribute('class', 'button-section');
    updateButton.setAttribute('id', 'update-button');
    deleteButton.setAttribute('id', 'delete-button');

    /** Sets all the values of the elements. */
    taskContent.textContent = task;
    dateContent.textContent = date;
    updateButton.textContent = 'Update';
    deleteButton.textContent = 'Delete';

    // Adds event listener to both buttons
    addRemoveEvent(deleteButton, li);
    addUpdateEvent(updateButton, updateSection, li);

    taskSection.appendChild(taskContent);
    taskSection.appendChild(dateContent);
    buttonSection.appendChild(updateButton);
    buttonSection.appendChild(deleteButton);

    // Appends the elements.
    li.appendChild(taskSection);
    li.appendChild(buttonSection);
    li.appendChild(updateSection);

    return li;
}

function addRemoveEvent(button, anotherElem) {

    button.addEventListener('click', () => {

        anotherElem.remove();
    })
}

function addUpdateEvent(button, updateSection, li) {

    button.addEventListener('click', () => {

        updateSection.style.display = 'flex';
        updateSection.childNodes[0].lastChild.value = li.childNodes[0].firstChild.textContent;
        updateSection.childNodes[1].lastChild.value = parseDate(li.childNodes[0].lastChild.textContent);
    })
}

/**
 * Converts the date that appropriate to the 
 * date input field date format */
function parseDate(date) {

    let newDate = String(date).split('-');
    return `${newDate[0]}-${newDate[1]}-${newDate[2]}`;
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

async function createTask() {

    try {

        let ul = document.querySelector('#tasks');
        let {message, task, date} = await addTask();
        showMessage(message, '#5cb85c');
        ul.appendChild(TaskComponent(task, date));

        setTimeout(() => {
            
            hideMessage();

        }, 2000);

    } catch (err) {

        showMessage(err, '#d9534f');
    }
}
/** 
 * Adds an event to the ADD button */
document.querySelector('#add-button').addEventListener('click', () => {
    
    createTask();
})