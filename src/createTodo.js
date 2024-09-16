import { newTodoCard } from "./main.js"
import { createProject } from "./createProject"
//Add select project logic

class createTodo {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        //this.addToActiveProject(); // Call a method to add this todo to the active project
        newTodoCard(title, description, dueDate, priority, notes)

    }
}

export {
    createTodo
}