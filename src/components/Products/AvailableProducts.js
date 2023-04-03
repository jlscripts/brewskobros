import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem";

const DUMMY_PRODUCTS = [
  {
    id: "c1",
    name: "Espresso",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
  {
    id: "c2",
    name: "Americano",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
  {
    id: "c3",
    name: "Vanillia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
  {
    id: "c4",
    name: "Machiato",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
  {
    id: "c5",
    name: "Mocha",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
  {
    id: "c6",
    name: "Capuccino",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus magna nec lectus bibendum, eu convallis nibh dignissim.",
    price: 100,
  },
];

const AvailableProducts = () => {
  return (
    <ul className={classes.menuItems}>
      {DUMMY_PRODUCTS.map((product) => (
        <ProductItem
          name={product.name}
          description={product.description}
          price={product.price}
        ></ProductItem>
      ))}
    </ul>
  );
};

export default AvailableProducts;
