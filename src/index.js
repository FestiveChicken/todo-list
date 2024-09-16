// Create elements
const contentDiv = document.createElement('div');
contentDiv.id = 'content';

const projectsDiv = document.createElement('div');
projectsDiv.id = 'projects';

const projectDialog = document.createElement('dialog');
projectDialog.id = 'projectDialog';

const projectForm = document.createElement('form');
projectForm.id = 'projectForm';

const projectNameLabel = document.createElement('label');
projectNameLabel.setAttribute('for', 'projectName');
projectNameLabel.textContent = 'Enter a name for the project: ';

const projectNameInput = document.createElement('input');
projectNameInput.type = 'text';
projectNameInput.id = 'projectName';
projectNameInput.name = 'projectName';

const cancelButton = document.createElement('button');
cancelButton.value = 'cancel';
cancelButton.setAttribute('formmethod', 'dialog');
cancelButton.textContent = 'Cancel';

const confirmButton = document.createElement('button');
confirmButton.id = 'projectConfirmButton';
confirmButton.type = 'submit';
confirmButton.textContent = 'Confirm';

// Append elements to form and dialog
projectForm.appendChild(projectNameLabel);
projectForm.appendChild(projectNameInput);
projectForm.appendChild(cancelButton);
projectForm.appendChild(confirmButton);
projectDialog.appendChild(projectForm);

const newProjectButton = document.createElement('button');
newProjectButton.id = 'projectButton';
newProjectButton.textContent = 'New Project';

const plusImg = document.createElement('img');
plusImg.src = ''; // Add the image source here
plusImg.alt = 'Plus sign';
newProjectButton.appendChild(plusImg);

const projectListDiv = document.createElement('div');
projectListDiv.id = 'projectList';

const todoDiv = document.createElement('div');
todoDiv.id = 'todo';

const todoDialog = document.createElement('dialog');
todoDialog.id = 'todoDialog';

// Create elements for Todo section
const todoForm = document.createElement('form');
todoForm.id = 'todoForm';

const todoNameLabel = document.createElement('label');
todoNameLabel.setAttribute('for', 'todoName');
todoNameLabel.textContent = 'Task name: ';

const todoNameInput = document.createElement('input');
todoNameInput.type = 'text';
todoNameInput.id = 'todoName';
todoNameInput.name = 'todoName';

const todoDescriptionLabel = document.createElement('label');
todoDescriptionLabel.setAttribute('for', 'todoDescription');
todoDescriptionLabel.textContent = 'Brief Description: ';

const todoDescriptionInput = document.createElement('input');
todoDescriptionInput.type = 'text';
todoDescriptionInput.id = 'todoDescription';
todoDescriptionInput.name = 'todoDescription';

const todoDueDateLabel = document.createElement('label');
todoDueDateLabel.setAttribute('for', 'todoDueDate');
todoDueDateLabel.textContent = 'Due Date: ';

const todoDueDateInput = document.createElement('input');
todoDueDateInput.type = 'date';
todoDueDateInput.id = 'todoDueDate';
todoDueDateInput.name = 'todoDueDate';

const todoPriorityLabel = document.createElement('label');
todoPriorityLabel.setAttribute('for', 'todoPriority');
todoPriorityLabel.textContent = 'Priority: ';

const todoPrioritySelect = document.createElement('select');
todoPrioritySelect.id = 'todoPriority';
todoPrioritySelect.name = 'todoPriority';

const priorityOptions = ['Low', 'Medium', 'High'];

priorityOptions.forEach((option) => {
  const priorityOption = document.createElement('option');
  priorityOption.value = option;
  priorityOption.textContent = option;
  todoPrioritySelect.appendChild(priorityOption);
});

const todoNotesLabel = document.createElement('label');
todoNotesLabel.setAttribute('for', 'todoNotes');
todoNotesLabel.textContent = 'Notes: ';

const todoNotesInput = document.createElement('input');
todoNotesInput.type = 'text';
todoNotesInput.id = 'todoNotes';
todoNotesInput.name = 'todoNotes';

const todoCancelButton = document.createElement('button');
todoCancelButton.value = 'cancel';
todoCancelButton.setAttribute('formmethod', 'dialog');
todoCancelButton.textContent = 'Cancel';

const todoConfirmButton = document.createElement('button');
todoConfirmButton.id = 'todoConfirmButton';
todoConfirmButton.type = 'submit';
todoConfirmButton.textContent = 'Confirm';

// Append elements to form and dialog for Todo
todoForm.appendChild(todoNameLabel);
todoForm.appendChild(todoNameInput);
todoForm.appendChild(todoDescriptionLabel);
todoForm.appendChild(todoDescriptionInput);
todoForm.appendChild(todoDueDateLabel);
todoForm.appendChild(todoDueDateInput);
todoForm.appendChild(todoPriorityLabel);
todoForm.appendChild(todoPrioritySelect);
todoForm.appendChild(todoNotesLabel);
todoForm.appendChild(todoNotesInput);
todoForm.appendChild(todoCancelButton);
todoForm.appendChild(todoConfirmButton);
todoDialog.appendChild(todoForm);

// Append elements to respective parents
projectsDiv.appendChild(projectDialog);
projectsDiv.appendChild(newProjectButton);
projectsDiv.appendChild(projectListDiv);

todoDiv.appendChild(todoDialog);

contentDiv.appendChild(projectsDiv);
contentDiv.appendChild(todoDiv);

// Add the content to the body of the document
document.body.appendChild(contentDiv);
