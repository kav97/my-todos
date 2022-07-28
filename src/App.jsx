import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import SearchBar from "./containers/SearchBar/SearchBar";
import Main from "./containers/Main/Main";
import { useState } from "react";

const App = () => {
  const [toDo, setToDo] = useState([]);

  const appendToDo = (event) => {
    event.preventDefault();
    setToDo([...toDo, { id: toDo.length, sentence: event.target[0].value }]);

    event.target[0].value = null;
  };

  const deleteToDo = (id) => {
    setToDo(toDo.filter((toDo) => toDo.id !== id));
  };

  const reset = () => {
    setToDo([]);
  };

  return (
    <div className="app">
      <NavBar reset={reset} />
      <SearchBar appendToDo={appendToDo} />
      <Main toDo={toDo} deleteToDo={deleteToDo} />
    </div>
  );
};

export default App;