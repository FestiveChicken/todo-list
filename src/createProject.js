import { newProjectCard } from "./main.js"
import { createTodo } from "./createTodo.js";

class createProject {
    constructor(name) {
        this.name = name;
        this.todos = [];
        newProjectCard(name);
    }

    addTodo(todo) {
        if (todo instanceof createTodo) {
            this.todos.push(createTodo)
        }
    }
}

export {
    createProject,
}