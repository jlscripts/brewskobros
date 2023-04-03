import { useContext } from "react";
import CartIem from "./CartItem";

import CartContext from "../../store/cart-context";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartIem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
        ></CartIem>
      ))}
    </ul>
  );

  return <Modal>{cartItems}</Modal>;
};

export default Cart;
