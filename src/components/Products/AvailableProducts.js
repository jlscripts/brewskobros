import React, { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem";

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://brewskobros-default-rtdb.asia-southeast1.firebasedatabase.app/coffees.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const productsData = await response.json();
      const loadedProducts = [];

      for (const key in productsData) {
        loadedProducts.push({
          id: key,
          name: productsData[key].name,
          description: productsData[key].description,
          price: productsData[key].price,
        });
      }

      setProducts(loadedProducts);
      setIsLoading(false);
    };

    fetchProducts()
      .then()
      .catch((error) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, []);

  return (
    <React.Fragment>
      {isLoading && <Loading></Loading>}
      {httpError && <p className={classes.errorContent}>{httpError}</p>}
      <ul className={classes.menuItems}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          ></ProductItem>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default AvailableProducts;
