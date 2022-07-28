// import Button from "../../components/Button/Button";
import "./SearchBar.scss"

const SearchBar = ({appendToDo}) => {
    return (
        <form onSubmit={appendToDo} className="submit-todo">
            <input className="submit-todo__text" placeholder="Add to your list..." type="text" />
            {/* <Button className="submit-todo__append" appendButton={true} buttonText="+" /> */}
            <button className="submit-todo__append">+</button>
        </form>
    );
}
  
export default SearchBar;