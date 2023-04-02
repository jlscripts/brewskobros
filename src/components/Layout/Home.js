import Button from "../UI/Button";

import classes from "./Home.module.css";

const Home = (props) => {
  const onClickHandler = () => {
    props.onShowMenu("menu");
  };

  return (
    <section className={classes["home-section"]}>
      <div className={classes.container}>
        <h2 className={classes["first-line"]}>Sip, savor, and smile</h2>
        <h1 className={classes["second-line"]}>
          Your daily dose <br></br>of happiness <br></br>starts here
        </h1>
        <Button onClick={onClickHandler}>ORDER NOW</Button>
      </div>
    </section>
  );
};

export default Home;
