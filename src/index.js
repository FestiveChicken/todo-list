import { createTodo } from "./createTodo";
import { newProjectButton } from "./DOM";
import { newTodoButton } from "./DOM";
import { clearTodo } from "./DOM";
import './styles.css';
import PlusIcon from './assets/PlusSign.svg';

newProjectButton('click')
newTodoButton('click')
clearTodo('click')

const loadIcons = () => {
    const projectImg = document.querySelector('#projectButton img');
    const todoImg = document.querySelector('#todoButton img');
    
    if (projectImg) projectImg.src = PlusIcon;
    if (todoImg) todoImg.src = PlusIcon;
};

loadIcons();