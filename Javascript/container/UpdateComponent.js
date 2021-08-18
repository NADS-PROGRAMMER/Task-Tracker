"use strict";

function UpdateComponent(task) {

    let updateSection = document.createElement('section');
    updateSection.setAttribute('class', 'update-section');

    updateSection.appendChild(
        createSection(
        {
            labelContent: 'New Task Name', 
            type: 'text'
        }
    ));

    updateSection.appendChild(
        createSection(
        {
            labelContent: 'Due Date',
            type: 'date'
        }
    ))

    updateSection.appendChild(createButtonSection(task));

    return updateSection;
}

function createSection ({labelContent, type}) {

    let section = document.createElement('section');
    let label = document.createElement('label');
    let input = document.createElement('input');

    label.textContent = labelContent;
    input.setAttribute("type", type);

    section.appendChild(label);
    section.appendChild(input);

    return section;
}

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
    })

    cancelButton.addEventListener('click', () => {

        task.firstChild.nextSibling.nextElementSibling.style.display = 'none';
    })
    section.appendChild(doneButton);
    section.appendChild(cancelButton);

    return section;
}
export {UpdateComponent}