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
  // const cartItems = useSelector(state => state.cartItems);
  // const [deleteCart] = useDeleteCartMutation();
  console.log("this is userId", userId);
  const {data: cartData, error: cartError} = useCartByUserQuery({token, id: userId});
  console.log("This is cart data Api", cartData)
  useEffect(() => {
    try {
      // Code that might throw an error
      const storedCartItems = cartData?.products || [];
      console.log("Stored Cart Items 123:", cartData?.products); 
      //Calculate total price
      const total = storedCartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      setTotalPrice(total);
      
    } catch (error) {
      // Handle the error here
      console.error("Error in useEffect:", error);
    }
  }, [cartData]);

  // if (error) {
  //   return <p>Something went wrong!</p>
  // } 
  // console.log("This is userdata", data)

  //Clicking on x we go back to all products
  const handleXbtn = () =>{
    navigate("/products")
  }
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  
    // Save updated cart to localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

    return (
        <div>
            <h2>Your Selected Items</h2>
            <button onClick = {handleXbtn}>X</button>
            {console.log("This is cartitems", cartItems)}
            {cartItems.length > 0 ? (
        cartItems.map(item => (
          <ul key={item.id} className="cartUl">
            <li>
              {console.log("This is item from cart",item)}
              {item.name}:
              {item.image && <img className = "image12" src={item.image} />}
              {/* <input type= "number" value= {`${item.quantity}`}>
              </input> */}
              Quantity: {item.quantity},
              Price: ${item.price},
              Total: ${(item.price * item.quantity).toFixed(2)}
            </li>
          </ul>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
           <button onClick = {removeFromCart}>Remove from cart</button>
           
            {/* <button onClick = {handleDelete}>Delete Item</button> */}
        </div>
    )
}

export default Cart;