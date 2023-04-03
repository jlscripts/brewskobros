import classes from "./CartItem.module.css";

const CartIem = (props) => {
  return (
    <li>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <button>-</button>
      <p>{props.quantity}</p>
      <button>+</button>
    </li>
  );
};

export default CartIem;
