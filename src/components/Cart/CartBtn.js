import classes from "./CartBtn.module.css";

const CartBtn = (props) => {
  return (
    <div className={classes.container} onClick={props.onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classes.icon}
        fill="#554949"
        viewBox="0 0 256 256"
      >
        <path d="M96,216a16,16,0,1,1-16-16A16,16,0,0,1,96,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,184,200ZM231.65,74.35l-28.53,92.71A23.89,23.89,0,0,1,180.18,184H84.07A24.11,24.11,0,0,1,61,166.59L24.82,40H8A8,8,0,0,1,8,24H24.82A16.08,16.08,0,0,1,40.21,35.6L48.32,64H224a8,8,0,0,1,7.65,10.35ZM213.17,80H52.89l23.49,82.2a8,8,0,0,0,7.69,5.8h96.11a8,8,0,0,0,7.65-5.65Z"></path>
      </svg>
      <p className={classes.cartNumber}>0</p>
    </div>
  );
};

export default CartBtn;