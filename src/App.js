import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function addToCart(name, price) {
      setCartItems([
        ...cartItems,
        {name: name, price: price}
      ]);
      setTotalPrice(totalPrice + price);
    }
  
  return (
    <div className="App">
      <h1>My Bakery</h1>

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image} addToCart={addToCart}/> // replace with BakeryItem component
      ))}

      <div className="cart">
        <h2>Cart</h2>
        {cartItems.map((item) => 
          <li key={item.name}>{item.name + ': $' + item.price}</li>)}
        <p><strong>Total:</strong> ${totalPrice}</p>

      </div>
    </div>
  );
}

export default App;
