import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import {CardCtxProvider} from "./context/CardCtxProvider.jsx";

function App() {
  return (
    <CardCtxProvider>
      <Header/>
      <Meals/>
    </CardCtxProvider>
  );
}

export default App;
