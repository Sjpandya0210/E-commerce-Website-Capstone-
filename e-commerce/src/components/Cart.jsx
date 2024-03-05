//api
import { useCartByUserQuery } from "../Redux/api";
function Cart ({token, id}){

    const {data, error} = useCartByUserQuery({token, id});


    if (error) {
        return <p>Something went wrong!</p>
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

}

    console.log("this is data from Cart", data)
    return (
        <div>
            <h2>Your Selected Items</h2>
            <button>Delete Item</button>
        </div>
    )
}
export default Cart;