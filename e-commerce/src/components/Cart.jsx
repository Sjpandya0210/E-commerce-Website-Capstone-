import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import { useSelector } from 'react-redux';

//api
import { useCartByUserQuery, useDeleteCartMutation } from "../Redux/api";
//style
import "../Style/Cart.css"

function Cart ({token, userId, cartItems, setCartItems}){
  let {id} = useParams();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  const [deleteCart] = useDeleteCartMutation();
  // console.log("this is userId", userId);

  const {data: cartData, error: cartError} = useCartByUserQuery({token, id: userId});
  console.log("This is cart data Api", cartData)
  useEffect(() => {
    console.log("Entering useEffect");
    try {
      if (!cartData) {
        console.log("No cart data available");
        return;
      }// Return early if cartData is not available
     
      const storedCartItems = cartData?.products || [];
      //Calculate total price
      const total = storedCartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      setTotalPrice(total);
      
       // Merge storedCartItems with local cartItems and remove duplicates
      // const mergedItems = [...cartItems, ...storedCartItems];
      // const uniqueItems = Array.from(new Set(mergedItems.map((item) => item.id))).map(
      //   (itemId) => mergedItems.find((item) => item.id === itemId)
      // );

      // Update cartItems state
      // setCartItems(uniqueItems);

      // Save cart items to localStorage
      // localStorage.setItem("cartItems", JSON.stringify(uniqueItems));
      
    } catch (error) {
      // Handle the error here
      console.error("Error in useEffect:", error);
    }
  }, [cartData]);

  //Clicking on x we go back to all products
  const handleXbtn = () =>{
    navigate("/products")
  }
  const handleCheckout = () => {
    navigate("/checkout")
  }
  const removeFromCart = async (productId) => {
    console.log("This is product ID", productId)
    try {
      // Call the deleteCart mutation to remove the entire cart from the server
      // await deleteCart({ token, userId, productId });

      localStorage.getItem("cartItems")
      const updatedCart = cartItems.filter((item) => item.productId !== productId);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart))
      setCartItems(updatedCart);
     // Update the local state and localStorage
     
    //  localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    } catch (error) {
      console.error("Error removing cart:", error);
    }
  };

    return (
        <div className="cartDiv">
            <h2>Your Selected Items</h2>
            <button onClick = {handleXbtn} className="btn1">Back to Products</button>
            <button onClick = {handleCheckout} className="btn2">Checkout</button>
            {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div className="cart2">
          <ul key={item.productId} className="cartUl">
            <li>
              {item.name}:
              {item.image && <img className = "image12" src={item.image} />}
              {/* <input type= "number" value= {`${item.quantity}`}>
              </input> */}
              Quantity: {item.quantity},
              Price: ${item.price},
              Total: ${(item.price * item.quantity).toFixed(2)}
              <button onClick={() => removeFromCart(item.productId)}>Remove from cart</button>
            </li>
          </ul>
          </div>
          
        ))
      ) : (
        <p>No items in the cart</p>
      )}

        </div>
    )
}

export default Cart;