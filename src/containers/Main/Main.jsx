import ToDo from "../../components/ToDo/ToDo";
//import "./Main.scss"

const Main = ({ toDo, deleteToDo }) => {
  const listOfToDos = toDo.map((toDo) => {
    return (
      <ToDo
        key={toDo.id}
        toDoId={toDo.id}
        toDoSentence={toDo.sentence}
        deleteToDo={deleteToDo}
      />
    );
  });

  return <div className="to-do-container">{listOfToDos}</div>
};

export default Main;