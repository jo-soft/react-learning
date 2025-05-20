import {JSX, useContext} from 'react';
import Todo from "./Todo";
import classes from './Todos.module.css';
import {TodoItem} from "../lib/todoItem";
import {ITodoContext, TodoCtx} from "../store/TodoCtx";

export default function Todos(): JSX.Element{

    const { todos } : ITodoContext= useContext(TodoCtx)

    return (
        <div>
            <ul className={classes.todos}>
                {
                    todos.map( (todo: TodoItem) => <li key={todo.id}><Todo todo={todo}/></li>
                )}
            </ul>
        </div>
    )
}