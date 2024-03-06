//api
import { useCartByUserQuery } from "../Redux/api";
function Cart (){
 //add token and id inside params 
    // const {data, error} = useCartByUserQuery({token, id});


    // if (error) {
    //     return <p>Something went wrong!</p>
    //   } else {
        // const userData = allUserData.find((user)=> {
        //   if (userInfo.username === user.username && userInfo.password === user.password){
        //     return user
        //   } 
        // })
        // console.log("This is userdata", userData)
        // props.setToken(data.token);
        // props.setUserId(userData.id);
        // we want to get the cart 
        //get all users
//match the email, username, password
//gives us id?
//setUserId function 

// }

//     console.log("this is data from Cart", data)

// Dummy cart data
    const cartItems = [
    { id: 1, name: 'T-shirt', price: 20.99, quantity: 2 },
    { id: 2, name: 'Phone Case', price: 15.49, quantity: 1 },
    { id: 3, name: 'Socks', price: 10.00, quantity: 3 },
  ];
// Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


    return (
        <div>
            <h2>Your Selected Items</h2>
            {/* <button>X</button> */}
           
            {cartItems.map(item => (
          <ul key={item.id}>
            <li>{item.name}: 
            Quantity: {item.quantity},
            Price: ${item.price}, 
            Total: ${(item.price * item.quantity)}</li>
            </ul>
        ))}
           
            <h3>Total Price: ${totalPrice}</h3>
            {/* <button>Delete Item</button> */}
        </div>
    )
}
export default Cart;