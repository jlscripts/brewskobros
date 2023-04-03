import coffeeBeans from "../../assets/coffee-beans.jpg";
import coffeeShop from "../../assets/coffee-shop.jpg";
import smilingGirl from "../../assets/smiling-girl.jpg";

import AboutUsItem from "./AboutUsItem";

import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={classes.section}>
      <h1 className={classes.title}>About us</h1>
      <div className={classes.container}>
        <AboutUsItem src={smilingGirl} className={classes.img}></AboutUsItem>
        <AboutUsItem src={coffeeBeans} className={classes.img}></AboutUsItem>
        <AboutUsItem src={coffeeShop} className={classes.img}></AboutUsItem>
      </div>
    </section>
  );
};

export default AboutUs;
