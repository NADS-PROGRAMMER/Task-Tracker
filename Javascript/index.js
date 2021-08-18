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

    // add event listener
    addRemoveEvent(deleteButton, li);
    updateButton.addEventListener('click', () => {

        updateSection.style.display = 'flex';
    })


    taskSection.appendChild(taskContent);
    taskSection.append(dateContent);
    buttonSection.appendChild(updateButton);
    buttonSection.appendChild(deleteButton);

    li.appendChild(taskSection);
    li.appendChild(buttonSection);
    let updateSection = UpdateComponent(li);
    li.appendChild(updateSection);

    return li;
}

function addRemoveEvent(button, anotherElem) {

    button.addEventListener('click', () => {

        anotherElem.remove();
    })
}