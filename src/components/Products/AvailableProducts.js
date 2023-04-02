import classes from "./AvailableProducts.module.css";
import Button from "../UI/Button";

const DUMMY_PRODUCTS = [
  {
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
  {
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
  {
    name: "Vanillia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
  {
    name: "Machiato",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
  {
    name: "Mocha",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
  {
    name: "Capuccino",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
];

const AvailableProducts = () => {
  return DUMMY_PRODUCTS.map((product) => (
    <li className={classes.container}>
      <div className={classes.photo}>PHOTO</div>
      <div className={classes.productDetails}>
        <h1 className={classes.name}>{product.name}</h1>
        <i>{product.description}</i>
        <h1 className={classes.price}>{`₱${product.price}`}</h1>
      </div>
      <Button className={classes.button}>+</Button>
    </li>
  ));
};

export default AvailableProducts;
