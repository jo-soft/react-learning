import './App.css';
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodoCtxProvider from "./store/TodoCtx";

function App() {
    return (
      <TodoCtxProvider>
          <NewTodo/>
          <Todos/>
      </TodoCtxProvider>
  );
}

export default App;
