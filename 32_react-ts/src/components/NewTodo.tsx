import {JSX, RefObject, useRef, FormEvent, useContext} from "react";
import {TodoItem} from "../lib/todoItem";
import classes from './NewTodo.module.css'
import {ITodoContext, TodoCtx} from "../store/TodoCtx";
export type TOnAddItem = (todo: TodoItem) => void

export  default function NewTodo(): JSX.Element {
    const { addTodo } : ITodoContext= useContext(TodoCtx)

    const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const title = ref.current!.value;
        addTodo(
            new TodoItem(
                Math.random(),
                title,
                false,
                (new Date()).toISOString()
            )
        );
        ref.current!.form?.reset();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <label htmlFor='title'>Title</label>
            <input ref={ref} id='title' type='text' />
            <button>Add</button>
        </form>
    )

}