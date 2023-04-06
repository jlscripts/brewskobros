import DeleteButton from "./DeleteButton";
import QtyButton from "../UI/QtyButton";

import classes from "./CartItem.module.css";

const CartIem = (props) => {
  return (
    <li className={classes.item}>
      <DeleteButton></DeleteButton>
      <div className={classes.photo}>PHOTO</div>
      <div className={classes.productNameContainer}>
        <h3 className={classes.productName}>{props.name}</h3>
      </div>
      <div className={classes.quantityContainer}>
        <QtyButton>-</QtyButton>
        <p>{props.quantity}</p>
        <QtyButton>+</QtyButton>
      </div>
      <h3 className={classes.price}>₱{props.price}</h3>
    </li>
  );
};

export default CartIem;
