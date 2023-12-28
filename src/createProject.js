import { newProjectCard } from "./main.js"

class createProject {
    constructor(name, todoArray = []) {
        this.name = name;
        this.todoArray = todoArray;
        newProjectCard(name);
    }

    addTodo(todo) {
        this.todoArray.push(todo); // Add todo to the project's todo array
    }
}

export {
    createProject
}