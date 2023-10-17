import { newProjectCard } from "./DOM"

class createProject {
    constructor (name) {
        this.name = name
        newProjectCard(name)
    }
    
}

export {
    createProject
}