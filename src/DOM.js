import { createProject } from "./createProject"
import { createTodo } from "./createTodo"
import './style.css';

//Creates a new project card
const newProjectCard = (name) => {
    const projects = document.getElementById('projects')
    const projectCard = document.createElement('button')
    const projectEdit = document.createElement('button')
    const projectDelete = document.createElement('button')
    const heading = document.createElement('h1')

    projectCard.setAttribute('id', name)
    heading.setAttribute('id', name+'-heading')
    heading.textContent = name
    projectEdit.textContent = 'Edit'
    projectEdit.setAttribute('class', 'edit')
    projectDelete.textContent = 'Delete'
    projectDelete.setAttribute('class', 'delete')
    
    projects.appendChild(projectCard)
    projectCard.appendChild(heading)
    projectCard.appendChild(projectEdit)
    projectCard.appendChild(projectDelete)

    projectEdit.addEventListener('click', editProject)
    projectDelete.addEventListener('click', deleteProject)
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
        projectForm.reset()
        projectDialog.close()
    })
}

//Deletes project
const deleteProject = (e) => {
    e = e.target
    if (e.nodeName === 'BUTTON') {
        const projects = document.getElementById('projects')
        const parent = document.getElementById(e.parentNode.id)
        projects.removeChild(parent)
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
            heading.innerText = inputText.value
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
const newTodoButton = (eventType) => {
    const todoButton = document.getElementById('todoButton') 
    const todoDialog = document.getElementById('todoDialog')
    const todoConfirmButton = document.getElementById('todoConfirmButton')
    const todoForm = document.getElementById('todoForm')

    todoButton.addEventListener(eventType, () => {
        todoForm.reset()
        todoDialog.showModal()
    })

    todoConfirmButton.addEventListener(eventType, (e) => {
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
    const inputText = document.createElement('input')
    const confirmButton = document.createElement('button')
    const cancelButton = document.createElement('button')

    background.setAttribute('id', 'background')
    holder.setAttribute('id', 'holder')
    newName.innerText = 'New Todo Name?'
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
            const heading = document.getElementById(e.parentNode.id)
            heading.innerText = inputText.value
            content.removeChild(background)
        }
    })

    //Ignores changes
    cancelButton.addEventListener('click', () => {
        content.removeChild(background)
    })
}

//Clears todo list
//NEEDS EDIT
const clearTodo = (eventType) => {
    const todoCards = document.querySelectorAll('.todoCard')
    const todo = document.getElementById('todo')
    test.addEventListener(eventType, () => {
        todo.removeChild(todoCards[0])
    })
        
}

//NEEDS EDIT
//Load project and todo items 
const loadProject = () => {
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
        projectForm.reset()
        projectDialog.close()
    })
}

export {
    newProjectCard,
    newTodoCard,
    newProjectButton,
    newTodoButton,
    clearTodo
}