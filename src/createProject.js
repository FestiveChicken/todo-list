import { newProjectCard } from "./DOM"

class createProject {
    constructor (name, todoArray = []) {
        this.name = name
        newProjectCard(name)
    }
    
}

export {
    createProject
}