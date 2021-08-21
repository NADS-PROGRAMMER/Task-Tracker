import {UpdateComponent} from './UpdateComponent.js';

"use strict";

function TaskComponent(task, date) {

    let li = document.createElement('li');
    let updateSection = UpdateComponent(li);

    li.appendChild(createTaskSection(

        createContent({task: task, element: 'p', id: 'task-content'}),
        createContent({task: date, element: 'p', id: 'date-content'}),
    ))

    li.appendChild(createButtonSection(li, updateSection));
    li.appendChild(updateSection);

    return li;
}

/** 
 * Creates a cotent for the task.
 * 
 * @param textContent 
 * - the content text of the element.
 * 
 * @param element 
 * - element to be created.
 * 
 * @param id 
 * - id of the created element.
 * 
 * ALL PARAMETERS SHOULD BE IN TYPE STRING. */
function createContent({textContent, element, id}) {

    let createdElem = document.createElement(element);
    createdElem.setAttribute('id', id);
    createdElem.textContent = textContent;

    return createdElem;
}

function createTaskSection(...elements) {

    let taskSection = document.createElement('section');
    taskSection.setAttribute('class', 'taskSection');

    elements.forEach(element => {

        taskSection.appendChild(element);
    })

    return taskSection;
}

/** Create a button element. */
function createButton({textContent, id}) {

    let button = document.createElement('button');
    button.setAttribute('id', id);
    button.textContent = textContent;

    return button;
}

/** Creates a section tag. */
function createButtonSection(li, updateSection) {

    let section = document.createElement('section');
    section.setAttribute('class', 'button-section');

    let updateButton = createButton({textContent: 'Update', id: 'update-button'});
    let deleteButton = createButton({textContent: 'Delete', id: 'delete-button'});

    updateButton.addEventListener('click', () => {

        updateSection.style.display = 'flex';
        updateSection.childNodes[0].lastChild.value = li.childNodes[0].firstChild.textContent;
        updateSection.childNodes[1].lastChild.value = parseDate(li.childNodes[0].lastChild.textContent);
    });

    deleteButton.addEventListener('click', () => {

        li.remove();
    });

    // Appends the two buttons.
    section.appendChild(updateButton);
    section.appendChild(deleteButton);

    return section;
}

/**
 * Converts the date that appropriate to the 
 * date input field date format */
function parseDate(date) {

    let newDate = String(date).split('-');
    return `${newDate[0]}-${newDate[1]}-${newDate[2]}`;
}

console.log(TaskComponent('Wow', '11/23/00'))