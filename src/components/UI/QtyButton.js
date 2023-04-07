import classes from "./QtyButton.module.css";

const QtyButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default QtyButton;
