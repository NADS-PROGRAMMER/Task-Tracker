import {UpdateComponent} from './UpdateComponent.js';

"use strict";

function TaskComponent(task, date) {

    let li = document.createElement('li');
    li.setAttribute('class', 'task');
    let updateSection = UpdateComponent(li);

    // Appends the three section.
    li.appendChild(createTaskSection(task, date))
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
function createContent({textContent, element, ids}) {

    let createdElem = document.createElement(element);
    createdElem.textContent = textContent;
    createdElem.setAttribute('id', ids);
    

    return createdElem;
}

function createTaskSection(taskContent, dateContent) {

    let taskSection = document.createElement('section');
    taskSection.setAttribute('class', 'task-section');

    let task = createContent({textContent: taskContent, element: 'p', ids: 'task-content'});
    let date = createContent({textContent: dateContent, element: 'p', ids: 'date-content'})

    taskSection.appendChild(task);
    taskSection.appendChild(date);

    return taskSection;
}

/** Create a button element.
 * 
 * @param textContent
 * - the text of the button.
 * 
 * @param id 
 * - the id of the button. */
function createButton({textContent, id}) {

    let button = document.createElement('button');
    button.setAttribute('id', id);
    button.textContent = textContent;

    return button;
}

/** Creates a button tag
 * 
 * @param li
 * - a <li> tag or the task.
 * 
 * @param updateSection 
 * - the update section for the update button to open when the update 
 * button is clicked
 */
function createButtonSection(li, updateSection) {

    let section = document.createElement('section');
    section.setAttribute('class', 'button-section');

    let updateButton = createButton({textContent: 'Update', id: 'update-button'});
    let deleteButton = createButton({textContent: 'Delete', id: 'delete-button'});

    // Events for the update button.
    updateButton.addEventListener('click', () => {

        updateSection.style.display = 'flex';
        updateSection.childNodes[0].lastChild.value = li.childNodes[0].firstChild.textContent;
        updateSection.childNodes[1].lastChild.value = parseDate(li.childNodes[0].lastChild.textContent);
    });

    // Events for the delete button.
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


export {TaskComponent}