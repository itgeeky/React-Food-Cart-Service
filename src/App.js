import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const showCartHandler=()=>{
    setCartIsVisible(true);
  }

  const hideCartHandler =() =>{
    setCartIsVisible(false);
  }
  return (
    <CartProvider>
      {cartIsVisible && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
    );
}

export default App;
