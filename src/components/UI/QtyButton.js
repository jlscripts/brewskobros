import classes from "./QtyButton.module.css";

const QtyButton = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default QtyButton;
