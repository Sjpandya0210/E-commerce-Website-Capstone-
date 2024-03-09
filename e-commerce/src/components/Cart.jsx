import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
//api
import { useCartByUserQuery, useDeleteCartMutation } from "../Redux/api";
function Cart ({token, userId}){
  let {id} = useParams();
  const navigate = useNavigate();
  const [cartItems, setCartItems]= useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // const [deleteCart] = useDeleteCartMutation();
  console.log("this is userId", userId);
  const {data, error} = useCartByUserQuery({token, id: userId});

  if (error) {
    return <p>Something went wrong!</p>
  } 
  console.log("This is userdata", data)

  //Clicking on x we go back to all products
  const handleXbtn = () =>{
    navigate("/products")
  }
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

    return (
        <div>
            <h2>Your Selected Items</h2>
            <button onClick = {handleXbtn}>X</button>
            {console.log("This is cartitems", cartItems)}
            {cartItems.map(item => (
          <ul key={item.id}>
            <li>{item.name}: 
            Quantity: {item.quantity},
            Price: ${item.price}, 
            Total: ${(item.price * item.quantity)}</li>
            </ul>
            //  <h3>Total Price: ${totalPrice}</h3>
            ))}
           <button onClick = {removeFromCart}>Remove from cart</button>
           
            {/* <button onClick = {handleDelete}>Delete Item</button> */}
        </div>
    )
}

export default Cart;