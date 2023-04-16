import classes from "./Checkout.module.css";

const Checkout = () => {
  return (
    <form>
      <div className={classes.nameContainer}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text"></input>
      </div>
      <div className={classes.streetContainer}>
        <label htmlFor="street">Street address</label>
        <input id="street" type="text"></input>
      </div>
      <div className={classes.cityAndPostalContainer}>
        <label htmlFor="city">City</label>
        <input id="city" type="text"></input>
        <label htmlFor="postal">Postal code</label>
        <input id="postal" type="text"></input>
      </div>
      <button>Cancel</button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
