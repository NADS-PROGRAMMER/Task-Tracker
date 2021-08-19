import {UpdateComponent} from './container/UpdateComponent.js';

"use strict";

document.querySelector('#add-button').addEventListener('click', () => {
    
    let task = document.querySelector('#textbox');
    let date = document.querySelector('#date');
    let ul = document.querySelector('#tasks');

    ul.appendChild(createTask(task.value, date.value));
    task.value = '';
    date.value = '';
})

function createTask(task, date) {

    let li = document.createElement('li');
    let taskContent = document.createElement('p');
    let dateContent = document.createElement('p');
    let taskSection = document.createElement('section');
    let buttonSection = document.createElement('section');
    let updateButton = document.createElement('button');
    let deleteButton = document.createElement('button');
    let updateSection = UpdateComponent(li);

    li.setAttribute('class', 'task');
    taskContent.setAttribute('id', 'task-content');
    dateContent.setAttribute('id', 'date-content');
    taskSection.setAttribute('class', 'task-section');
    buttonSection.setAttribute('class', 'button-section');
    updateButton.setAttribute('id', 'update-button');
    deleteButton.setAttribute('id', 'delete-button');

    taskContent.textContent = task;
    dateContent.textContent = date;
    updateButton.textContent = 'Update';
    deleteButton.textContent = 'Delete';

    // add event listener to both buttons
    addRemoveEvent(deleteButton, li);
    addUpdateEvent(updateButton, updateSection, li);


    taskSection.appendChild(taskContent);
    taskSection.appendChild(dateContent);
    buttonSection.appendChild(updateButton);
    buttonSection.appendChild(deleteButton);

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

function addUpdateEvent(button, anotherElem, li) {

    button.addEventListener('click', () => {

        anotherElem.style.display = 'flex';
        anotherElem.childNodes[0].lastChild.value = li.childNodes[0].firstChild.textContent;
        anotherElem.childNodes[1].lastChild.value = parseDate(li.childNodes[0].lastChild.textContent);
    })
}
/** FIXED */
function parseDate(date) {

    let newDate = String(date).split('-');
    return `${newDate[0]}-${newDate[1]}-${newDate[2]}`;
}

