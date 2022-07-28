import "./NavBar.scss";
//import Button from "../../components/Button/Button";

const NavBar = ({reset}) => {
  return (
    <div className="navbar">
      <h1 className="navbar__header">My Todos</h1>
      {/* <Button onClick={() =>reset()} buttonText="Reset" />  */}
      <button className="navbar__reset" onClick={() =>reset()}>Reset</button>
    </div>
);
};

export default NavBar;