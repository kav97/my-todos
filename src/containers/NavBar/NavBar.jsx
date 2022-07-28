import "./NavBar.scss";
import Button from "../../components/Button/Button";

const NavBar = () => {
  return (
    <div className="navbar">
        <h1 className="header">My Todos</h1>
        <Button className="button-reset" buttonText="Reset" />
    </div>
);
};

export default NavBar;
