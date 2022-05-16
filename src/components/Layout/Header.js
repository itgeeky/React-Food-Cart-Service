import React from "react";
import classes from "./Header.Module.css";
import mealsImg from "../../assets/img/meals.jpeg"
import HeaderCartButton from "./HeaderCartButton";

const Header = (props)=> {
    return(
    <div>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img  src={mealsImg} alt="food-header"/>
        </div>
    </div>
    );
};

export default Header 