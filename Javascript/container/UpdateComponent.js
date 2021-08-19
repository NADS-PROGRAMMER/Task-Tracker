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

        task.firstChild.firstChild.textContent = textbox.value;
        task.firstChild.lastChild.textContent = date.value;
        textbox.value = '';
        date.value = '';
    });

    cancelButton.addEventListener('click', () => {

        // Hides the update section.
        task.firstChild.nextSibling.nextElementSibling.style.display = 'none';
    });

    // Appends the two buttons.
    section.appendChild(doneButton);
    section.appendChild(cancelButton);

    return section;
}

export {UpdateComponent}