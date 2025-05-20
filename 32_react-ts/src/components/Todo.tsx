import { FC, MouseEvent, useContext} from "react";
import {TodoItem} from "../lib/todoItem";
import classes from './Todo.module.css'
import {ITodoContext, TodoCtx} from "../store/TodoCtx";

const TodoComponent: FC<{ todo: TodoItem}> = ({ todo} ) => {

    const { removeTodo } : ITodoContext= useContext(TodoCtx)

    const handleOnClick= (e: MouseEvent) => {
        e.preventDefault();
        removeTodo(todo.id)
    }

    return (
        <div className={classes.item} onClick={handleOnClick}>
            <h2>{todo.title}</h2>
            <p>{todo.completed ? "Completed" : "Not Completed"}</p>
            <p>{todo.date.toLocaleDateString()}</p>
        </div>
    );
}

export default TodoComponent