import { createProject } from "./createProject"
import { createTodo } from "./createTodo"

//add logic to display todo items per project

//Creates a new project card
const newProjectCard = (title) => {
    const projects = document.getElementById('projects')
    const projectCard = document.createElement('button')
    const projectEdit = document.createElement('button')
    const projectDelete = document.createElement('button')
    const heading = document.createElement('h1')

    projectCard.setAttribute('id', title)
    heading.textContent = title
    projectEdit.textContent = 'Edit'
    projectEdit.setAttribute('class', 'edit')
    projectDelete.textContent = 'Delete'
    projectDelete.setAttribute('class', 'delete')
    
    projects.appendChild(projectCard)
    projectCard.appendChild(heading)
    projectCard.appendChild(projectEdit)
    projectCard.appendChild(projectDelete)
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

//New Project Button
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

//Deletes Project
const deleteProject = () => {
    console.log('did this work')
}

export {
    newProjectCard,
    newTodoCard,
    newProjectButton,
    deleteProject
}