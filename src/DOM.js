import { createProject } from "./createProject"
import { createTodo } from "./createTodo"

//add logic to display todo items per project

const content = document.getElementById('content')

//Creates a new project card
const newProjectCard = (title) => {
    const projectCard = document.createElement('div')
    const heading = document.createElement('h1')
    projectCard.setAttribute('id', title)
    content.appendChild(projectCard)
    heading.textContent = title
    projectCard.appendChild(heading)
}

//Creates a new todo card
const newTodoCard = (name, dueDate) => {
    const todoCard = document.createElement('div')
    const todoName = document.createElement ('p')
    const todoDate = document.createElement('p')

    todoName.setAttribute('class', name)
    todoDate.setAttribute('class', dueDate)
    todoName.textContent = name
    todoDate.textContent = dueDate

    content.appendChild(todoCard)
    todoCard.appendChild(todoName)
    todoCard.appendChild(todoDate)
}

const newProjectButton = () => {
    //const 
}

export {
    newProjectCard,
    newTodoCard
}