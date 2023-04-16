import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isFourChars = (value) => value.trim().length === 4;

const Checkout = () => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const cityInputRef = useRef();
  const postalInputRef = useRef();

  const nameControlClasses = `${classes.nameContainer} ${
    !formValidity.name ? classes.invalid : ""
  }`;
  const streetControlClasses = `${classes.streetContainer} ${
    !formValidity.street ? classes.invalid : ""
  }`;
  const cityControlClasses = `${classes.cityContainer} ${
    !formValidity.city ? classes.invalid : ""
  }`;
  const postalControlClasses = `${classes.postalContainer} ${
    !formValidity.postal ? classes.invalid : ""
  }`;

  const onConfirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;

    const nameIsValid = isNotEmpty(enteredName);
    const streetIsValid = isNotEmpty(enteredStreet);
    const cityIsValid = isNotEmpty(enteredCity);
    const postalIsValid = isFourChars(enteredPostal);

    setFormValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postal: postalIsValid,
    });

    if (!nameIsValid && !streetIsValid && !cityIsValid && !postalIsValid) {
      console.log("invalid");
    }
  };

  return (
    <form onSubmit={onConfirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" ref={nameInputRef}></input>
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street address</label>
        <input id="street" type="text" ref={streetInputRef}></input>
      </div>
      <div className={classes.cityAndPostalContainer}>
        <div className={cityControlClasses}>
          <label htmlFor="city">City</label>
          <input id="city" type="text" ref={cityInputRef}></input>
        </div>
        <div className={postalControlClasses}>
          <label htmlFor="postal">Postal code</label>
          <input id="postal" type="text" ref={postalInputRef}></input>
        </div>
      </div>
      <div className={classes.btnContainer}>
        <button type="button" className={classes.cancelBtn}>
          Cancel
        </button>
        <button className={classes.confirmBtn}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
