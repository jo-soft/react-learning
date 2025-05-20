import {Dispatch, SetStateAction, useState,createContext, JSX, PropsWithChildren } from "react";
import {TodoItem} from "../lib/todoItem";
import { TOnAddItem } from "../components/NewTodo";

export interface ITodoContext {
    todos: TodoItem[];
    addTodo: TOnAddItem;
    removeTodo: (id: number) => void;
}

export const TodoCtx = createContext<ITodoContext>({
    todos: [],
    addTodo: (todo: TodoItem) => {
    },
    removeTodo: (id: number) => {
    }
})

export default function TodoCtxProvider ({ children}: PropsWithChildren<unknown>): JSX.Element{

    const [todos, setTodos]: [ TodoItem[], Dispatch<SetStateAction<TodoItem[]>>]
        = useState<TodoItem[]>([]);

    const addTodo:  TOnAddItem = (todo: TodoItem)  => {
        setTodos(
            (prevTodos: TodoItem[]) => {
                return [...prevTodos, todo];
            }
        );
    }


    const removeTodo = (id: number) => {
        setTodos(
            (prevTodos: TodoItem[]) => {
                return prevTodos.filter((todo: TodoItem) => todo.id !== id);
            }
        );
    }


    return <TodoCtx.Provider value={{
        todos,
        addTodo,
        removeTodo
    }}>
        { children }
    </TodoCtx.Provider>
}