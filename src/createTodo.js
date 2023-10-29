import { newTodoCard } from "./DOM"
import { createProject } from "./createProject"
//Add select project logic

class createTodo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.notes = notes
        newTodoCard(title, dueDate)

    }
}

export {
    createTodo
}