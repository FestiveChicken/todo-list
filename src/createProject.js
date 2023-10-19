import { newProjectCard } from "./DOM"

class createProject {
    constructor (name, todoArray) {
        todoArray = new Array 
        this.name = name
        newProjectCard(name)
    }
    
}

export {
    createProject
}