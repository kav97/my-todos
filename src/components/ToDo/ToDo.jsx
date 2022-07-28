//import Button from "../Button/Button";
import "./ToDo.scss"
import { useState } from "react";

const ToDo = ({ toDoId, toDoSentence, deleteToDo }) => {
  const [checked, setChecked] = useState(false);

  const setCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <>
      <div className="to-do">
          <input className="to-do__checkbox" type="checkbox" id="toDo" onChange={setCheckbox} />
          <label className={checked ? "checked" : "unchecked"} htmlFor="toDo">
            {toDoSentence}
          </label>
          <button className="to-do__delete" onClick={() => deleteToDo(toDoId)}>X</button>
          {/* <Button onClick={() => deleteToDo(toDoId)} delButton={true} buttonText="X" /> */}
      </div>
    </>
  );
};

export default ToDo;
