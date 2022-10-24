import { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>HappyMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://i.ytimg.com/vi/NOgPQvUWfHk/maxresdefault.jpg"
          alt="A table full of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
