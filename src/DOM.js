import { createProject } from "./createProject"
import { createTodo } from "./createTodo"
import './style.css';

//Creates a new project card
const newProjectCard = (name) => {
    const projectList = document.getElementById('projectList')
    const projectCard = document.createElement('button')
    const projectEdit = document.createElement('button')
    const projectDelete = document.createElement('button')
    const heading = document.createElement('h1')

    projectCard.setAttribute('id', name)
    projectCard.setAttribute('class', 'projectItem')
    heading.setAttribute('id', name+'-heading')
    heading.textContent = name
    projectEdit.textContent = 'Edit'
    projectEdit.setAttribute('class', 'edit')
    projectDelete.textContent = 'Delete'
    projectDelete.setAttribute('class', 'delete')
    
    projectList.appendChild(projectCard)
    projectCard.appendChild(heading)
    projectCard.appendChild(projectEdit)
    projectCard.appendChild(projectDelete)

    projectEdit.addEventListener('click', editProject)
    projectDelete.addEventListener('click', deleteProject)
    projectCard.addEventListener('click', getProjectID)
}

//New project button
const newProjectButton = (eventType) => {
    const projectButton = document.getElementById('projectButton') 
    const projectDialog = document.getElementById('projectDialog')
    const projectConfirmButton = document.getElementById('projectConfirmButton')
    const projectForm = document.getElementById('projectForm')

    projectButton.addEventListener(eventType, () => {
        projectForm.reset()
        projectDialog.showModal()
    })

    projectConfirmButton.addEventListener(eventType, (e) => {
        e.preventDefault()
        let projectName = document.getElementById('projectName').value
        new createProject(projectName)
        checkEmptyProjectList()
        projectForm.reset()
        projectDialog.close()
    })
}

//Deletes project
const deleteProject = (e) => {
    e = e.target
    if (e.nodeName === 'BUTTON') {
        const projectList = document.getElementById('projectList')
        const parent = document.getElementById(e.parentNode.id)
        projectList.removeChild(parent)
        checkEmptyProjectList()
    }
}

//Edit project name
const editProject = (e) => {
    e = e.target

    //Creating input box
    const content = document.getElementById('content')
    const background = document.createElement('div')
    const holder = document.createElement('div')
    const newName = document.createElement('h3')
    const inputText = document.createElement('input')
    const confirmButton = document.createElement('button')
    const cancelButton = document.createElement('button')

    background.setAttribute('id', 'background')
    holder.setAttribute('id', 'holder')
    newName.innerText = 'New Project Name?'
    inputText.type = 'text'
    confirmButton.innerText = 'Confirm'
    cancelButton.innerText = 'Cancel'

    content.appendChild(background)
    background.appendChild(holder)
    holder.appendChild(newName)
    holder.appendChild(inputText)
    holder.appendChild(confirmButton)
    holder.appendChild(cancelButton)

    //Changes project name if clicked
    confirmButton.addEventListener('click', () => {
        if (e.nodeName === 'BUTTON') {
            const heading = document.getElementById(e.parentNode.id+'-heading')
            const projectList = document.getElementById(e.parentNode.id)
            heading.innerText = inputText.value
            projectList.removeAttribute('id')
            projectList.setAttribute('id', inputText.value)
            content.removeChild(background)
        }
    })

    //Ignores changes
    cancelButton.addEventListener('click', () => {
        content.removeChild(background)
    })
}

//Creates a new todo card
const newTodoCard = (name, dueDate) => {
    const todo = document.getElementById('todo')
    const todoCard = document.createElement('div')
    const todoName = document.createElement ('p')
    const todoDate = document.createElement('p')
    const checkbox = document.createElement('input')
    const todoEdit = document.createElement('button')
    const todoDelete = document.createElement('button')

    todoCard.setAttribute('id', name)
    todoCard.setAttribute('class', 'todoCard')
    todoDate.setAttribute('class', dueDate)
    todoName.textContent = name
    todoDate.textContent = dueDate
    checkbox.type = 'checkbox'
    todoEdit.textContent = 'Edit'
    todoEdit.setAttribute('class', 'edit')
    todoDelete.textContent = 'Delete'
    todoDelete.setAttribute('class', 'delete')

    todoName.style.margin = '10px'
    todoDate.style.margin = '10px'
    checkbox.style.margin = '10px'

    todo.appendChild(todoCard)
    todoCard.appendChild(todoName)
    todoCard.appendChild(todoDate)
    todoCard.appendChild(todoEdit)
    todoCard.appendChild(todoDelete)
    todoCard.appendChild(checkbox)

    todoEdit.addEventListener('click', editTodo)
    todoDelete.addEventListener('click', deleteTodo)
}

//New todo button
const newTodoButton = () => {
    const todoButton = document.getElementById('todoButton') 
    const todoDialog = document.getElementById('todoDialog')
    const todoConfirmButton = document.getElementById('todoConfirmButton')
    const todoForm = document.getElementById('todoForm')

    todoButton.addEventListener('click', () => {
        todoForm.reset()
        todoDialog.showModal()
    })

    todoConfirmButton.addEventListener('click', (e) => {
        e.preventDefault()
        let todoName = document.getElementById('todoName').value
        let todoDescription = document.getElementById('todoDescription').value
        let todoDueDate = document.getElementById('todoDueDate').value
        let todoPriority = document.getElementById('todoPriority').value
        let todoNotes = document.getElementById('todoNotes').value
        new createTodo(todoName, todoDescription, todoDueDate, todoPriority, todoNotes)
        todoForm.reset()
        todoDialog.close()
    })
}

//Deletes todo
const deleteTodo = (e) => {
    e = e.target
    if (e.nodeName === 'BUTTON') {
        const todo = document.getElementById('todo')
        const parent = document.getElementById(e.parentNode.id)
        todo.removeChild(parent)
    }

}

//NEEDS EDIT
const editTodo = (e) => {
    e = e.target

    //Creating input box
    const content = document.getElementById('content')
    const background = document.createElement('div')
    const holder = document.createElement('div')

    const newName = document.createElement('h3')
    const nameInput = document.createElement('input')
    const newDescription = document.createElement('h3')
    const descriptionInput = document.createElement('input')
    const newDueDate = document.createElement('h3')
    const dueDateInput = document.createElement('input')
    const newPriority = document.createElement('h3')
    const priorityInput = document.createElement('select')
    const priorityArray = ['low', 'medium', 'high']
    const newNotes = document.createElement('h3')
    const notesInput = document.createElement('input')

    const confirmButton = document.createElement('button')
    const cancelButton = document.createElement('button')

    background.setAttribute('id', 'background')
    holder.setAttribute('id', 'holder')

    newName.innerText = 'New Todo Name?'
    nameInput.type = 'text'
    newDescription.innerText = 'Change Description?'
    descriptionInput.type = 'text'
    newDueDate.innerText = 'Change Date?'
    dueDateInput.type = 'date'
    newPriority.innerText = 'Change Priority?'
    newNotes.innerText = 'Change Notes?'
    notesInput.type = 'text'

    confirmButton.innerText = 'Confirm'
    cancelButton.innerText = 'Cancel'

    content.appendChild(background)
    background.appendChild(holder)

    holder.appendChild(newName)
    holder.appendChild(nameInput)
    holder.appendChild(newDescription)
    holder.appendChild(descriptionInput)
    holder.appendChild(newDueDate)
    holder.appendChild(dueDateInput)
    holder.appendChild(newPriority)
    holder.appendChild(priorityInput)
    //Appends all the options for for selection
    for (let i = 0; i < priorityArray.length; i++) {
        const priorityOption = document.createElement("option");
        priorityOption.value = priorityArray[i];
        priorityOption.text = priorityArray[i];
        priorityInput.appendChild(priorityOption);
    }
    holder.appendChild(newNotes)
    holder.appendChild(notesInput)


    holder.appendChild(confirmButton)
    holder.appendChild(cancelButton)

    //Changes project name if clicked
    confirmButton.addEventListener('click', () => {
        if (e.nodeName === 'BUTTON') {
            const heading = document.getElementById(e.parentNode.id)
            heading.innerText = nameText.value
            content.removeChild(background)
        }
    })

    //Cancel button
    cancelButton.addEventListener('click', () => {
        content.removeChild(background)
    })
}

//Clears todo list
//NEEDS EDIT
const clearTodo = () => {

}

//Checks if project list is empty
const checkEmptyProjectList = () => {
    const projectList = document.getElementById('projectList')
    const todo = document.getElementById("todo")

    const p = document.createElement("p")
    p.setAttribute('id', "pleaseCreateProject")

    const createTodoButton = document.createElement('button')
    createTodoButton.setAttribute('id', 'todoButton')
    createTodoButton.innerText = 'New todo item'
    
    const plusImage = document.createElement('img')
    plusImage.src = ''
    plusImage.alt = 'Plus Sign'
    
    //If there is no project it will remove the create todo button and ask you to create a project
    if (projectList.innerHTML == "") {
        p.innerText = "Please create a project to add items on your todo list"
        todo.appendChild(p)
        if (document.getElementById('createTodoButton') == null) {
            return
        }
        else {
            todo.removeChild(document.getElementById('createTodoButton'))
        }
    }
    //Creates todo button and removes initial text
    else {
        if (document.getElementById('pleaseCreateProject') == null) {
            return
        }
        else {
            todo.removeChild(document.getElementById('pleaseCreateProject'))
            todo.appendChild(createTodoButton)
            createTodoButton.appendChild(plusImage)
            newTodoButton()
        }
    }
}

//Returns ID of project
const getProjectID = (e) => {
    const projectItem = document.querySelector('.projectItem')
    const editButton = document.querySelector('.edit')
    const deleteButton = document.querySelector('.delete')
    e = e.target
    if (projectItem !== e) {
        if (editButton == e) {
            return
        }
        else if (deleteButton == e) {
            return
        }
        switchProject(e.parentNode.id)
        return
    }
    switchProject(e.id)
    return 
}

//Sets active class to project that is clicked
const switchProject = (projectID) => {
    const projectItems = document.querySelectorAll('.projectItem');
    projectItems.forEach(item => {
        item.classList.remove('active');
    });
    const selectedProject = document.getElementById(projectID);
    selectedProject.classList.add('active');
}


export {
    newProjectCard,
    newTodoCard,
    newProjectButton,
    newTodoButton,
    clearTodo,
    checkEmptyProjectList,
    getProjectID,
    switchProject
}