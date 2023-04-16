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
        <button className={classes.orderNowBtn} onClick={onClickHandler}>
          ORDER NOW
        </button>
      </div>
    </section>
  );
};

export default Home;
