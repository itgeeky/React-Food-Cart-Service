import classes from "./MealsItem.module.css"
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealsItem = props => {
  let price = `$${props.price.toFixed(2)}`
  const cartCtx = useContext (CartContext);
  const addItemToCart = (amount) => {
    cartCtx.addItem ({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}><h3>{props.desc}</h3></div>
        <div className={classes.price}><h3>{price}</h3></div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addItemToCart}/>
      </div>
    </li>
  )

}

export default MealsItem;