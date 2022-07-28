const Button = ({buttonText, appendButton, delButton, resetButton}) => {

    let buttonStyle = "button";

    if (appendButton) {
        buttonStyle += " append"
    } 
    if (delButton) {
        buttonStyle += " delete"
    } 
    if (resetButton) {
        buttonStyle += " reset"
    }

    return (
      <button className={buttonStyle}>{buttonText}</button>
    );
}
  
export default Button;