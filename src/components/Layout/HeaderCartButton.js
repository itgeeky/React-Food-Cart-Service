import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) =>{
	const cartCtx = useContext(CartContext);
	const cartItemsAmount = cartCtx.items.reduce((currentNumber, item)=>{
		return currentNumber + item.amount
	}, 0)
	const [animation, setAnimation] = useState(false);
	const {items} = cartCtx;


	const btnClasses = `${classes.button} ${animation ? classes.bump : ''}`
	useEffect(()=> {
		if (items.length === 0){
			return;
		}
		const timer = setAnimation(true);
		setTimeout(() => {
			setAnimation(false);
		}, 300);
		
		return () =>{
			clearTimeout(timer);
		}
	},[items])

	return(
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon/>
			</span>
			<span>Your cart</span>
			<span className={classes.badge}>{cartItemsAmount}</span>
		</button>
	);
}

export default HeaderCartButton;