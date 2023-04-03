import classes from "./AboutUsItem.module.css";

const AboutUsItem = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img
          src={props.src}
          className={`${classes.img} ${props.className}`}
        ></img>
      </div>
      <h2 className={classes.firstLine}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h2>
      <p className={classes.secondLine}>
        Nullam dignissim massa nec dolor malesuada, ac posuere tellus molestie.
        Praesent eget nunc nulla. Ut posuere vestibulum nisi eu laoreet. Etiam
        lacinia lorem eu leo semper, at ullamcorper arcu bibendum.
      </p>
    </div>
  );
};

export default AboutUsItem;
