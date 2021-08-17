"use strict";

document.querySelector('#add-button').addEventListener('click', () => {
    
    let task = document.querySelector('#textbox').value;
    let date = document.querySelector('#date').value;
    let ul = document.querySelector('#tasks');

    ul.appendChild(createTask(task, date));
    console.log(createTask('task', 'date'))
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
    addRemoveEvent(deleteButton, li);

    taskSection.appendChild(taskContent);
    taskSection.append(dateContent);
    buttonSection.appendChild(updateButton);
    buttonSection.appendChild(deleteButton);

    li.appendChild(taskSection);
    li.appendChild(buttonSection);

    return li;
}

function addRemoveEvent(button, anotherElem) {

    button.addEventListener('click', () => {

        anotherElem.remove();
    })
}

function addUpdateEvent(button, anotherElem) {

    button.addEventListener('click', () => {

        
    });
}