import { createProject } from "./createProject"
import { createTodo } from "./createTodo"
import './style.css';

//Creates a new project card
const newProjectCard = (title) => {
    const projects = document.getElementById('projects')
    const projectCard = document.createElement('button')
    const projectEdit = document.createElement('button')
    const projectDelete = document.createElement('button')
    const heading = document.createElement('h1')

    projectCard.setAttribute('id', title)
    heading.setAttribute('id', title+'-heading')
    heading.textContent = title
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

//Creates a new todo card
const newTodoCard = (name, dueDate) => {
    const todo = document.getElementById('todo')
    const todoCard = document.createElement('div')
    const todoName = document.createElement ('p')
    const todoDate = document.createElement('p')

    todoName.setAttribute('class', name)
    todoDate.setAttribute('class', dueDate)
    todoName.textContent = name
    todoDate.textContent = dueDate

    todo.appendChild(todoCard)
    todoCard.appendChild(todoName)
    todoCard.appendChild(todoDate)
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

    confirmButton.addEventListener('click', () => {
        if (e.nodeName === 'BUTTON') {
            const heading = document.getElementById(e.parentNode.id+'-heading')
            heading.innerText = inputText.value
            content.removeChild(background)
        }
    })
    cancelButton.addEventListener('click', () => {
        content.removeChild(background)
    })
    
    
}

//Prompts user for input
//Seperate for ease of editing code
const editProjectInput = () => {

    }

export {
    newProjectCard,
    newTodoCard,
    newProjectButton,
}