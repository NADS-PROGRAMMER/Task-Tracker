"use strict";

/**
 * A function that creates an UpdateComponent.
 * 
 * @param task 
 * - task that this UpdateComponent to attached to.
 * @returns 
 * - the UpdateComponent, as a whole.
 */
function UpdateComponent(task) {

    let updateSection = document.createElement('section');
    updateSection.setAttribute('class', 'update-section');

    updateSection.appendChild(
        createInputField(
        {
            labelContent: 'New Task Name', 
            type: 'text'
        }
    ));

    updateSection.appendChild(
        createInputField(
        {
            labelContent: 'Due Date',
            type: 'date'
        }
    ))

    updateSection.appendChild(createErrorMessage());
    updateSection.appendChild(createButtonSection(task));

    return updateSection;
}

/**
 * A function that creates an input tag and specified
 * the type by its parameter labelContent.
 * 
 * @param labelContent 
 * - Content of the label tag.
 * @param type 
 * - type of the input 
 * @returns 
 * - the section that contains the input tag.
 */
function createInputField ({labelContent, type}) {

    let section = document.createElement('section');
    let label = document.createElement('label');
    let input = document.createElement('input');

    label.textContent = labelContent;
    input.setAttribute("type", type);

    section.appendChild(label);
    section.appendChild(input);

    return section;
}

function createErrorMessage() {

    let section = document.createElement('section');
    let small = document.createElement('small');
    small.textContent = 'Please fill up the required fields.'
    small.setAttribute('class', 'error-message');

    section.appendChild(small);
    return section;
}

/**
 * A function that creates a button that 
 * accepts textContent and id.
 * 
 * @param textContent
 * - the text of the button.
 * @param id 
 * - the id of the button
 * @returns 
 * - the button tag.
 */
function createButton({textContent, id}) {

    let button = document.createElement('button');
    button.setAttribute('id', id);
    button.textContent = textContent;

    return button;
}

function createButtonSection(task) {

    let section = document.createElement('section');
    section.setAttribute('class', 'update-button-section');

    let doneButton = createButton({textContent: 'Done', id: 'done-button'});
    let cancelButton = createButton({textContent: 'Cancel', id: 'cancel-button'});

    // Add Event listener to 'DONE' button on update section.
    doneButton.addEventListener('click', () => {

        let textbox = task.childNodes[2].firstChild.lastChild;
        let date = task.childNodes[2].childNodes[1].lastChild;

        if (isFieldNotEmpty(textbox) && isFieldNotEmpty(date)) {
            task.firstChild.firstChild.textContent = textbox.value;
            task.firstChild.lastChild.textContent = date.value;
            hideUpdateSection(task);
            hideErrorMessage(task);
            textbox.value = '';
            date.value = '';
            return;
        }
        showErrorMessage(task);
    });

    cancelButton.addEventListener('click', () => {

        hideUpdateSection(task);
    });

    // Appends the two buttons.
    section.appendChild(doneButton);
    section.appendChild(cancelButton);

    return section;
}

function isFieldNotEmpty(inputField) {

    return inputField.value !== '';
}

function hideUpdateSection(task) {

    task.firstChild.nextSibling.nextElementSibling.style.display = 'none';
}

function showErrorMessage(task) {

    task.childNodes[2].childNodes[2].firstChild.style.display = 'block';
}

function hideErrorMessage(task) {
    task.childNodes[2].childNodes[2].firstChild.style.display = 'none';
}

export {UpdateComponent, isFieldNotEmpty}