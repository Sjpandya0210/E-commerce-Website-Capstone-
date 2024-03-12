import { useParams, useNavigate} from "react-router-dom";
import { useState } from "react";
//api
import { useProductDetailsQuery, useAddToCartMutation, useSingleCartQuery } from "../Redux/api";
function ProductDetails ({token, userId, cartItems, setCartItems}){
    let { id } = useParams();
  const navigate = useNavigate();
  const [addToCart] = useAddToCartMutation();
  const { data, error, isLoading } = useProductDetailsQuery( id );
 
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  const handleClick = () => {
    navigate("/products")
  };
  
  const addtoCartbtn = async () => {
    try {
      const productId = id;
      const cartProduct = {
        name: data.title,
        productId: productId,
        quantity: 1,
        price: data.price,
        image: data.image
      };
    // Perform the mutation to add the product to the cart
    await addToCart({ token, body: { id: userId, products: [cartProduct], productId} });
    const ls = localStorage.getItem("cartItems")
    const lsArr = JSON.parse(ls)
    lsArr.push(cartProduct)
    localStorage.setItem("cartItems", JSON.stringify(lsArr))
    setCartItems(prev => [...prev, cartProduct])
    navigate("/cart");
    } catch (error) {
    console.error("Error adding to cart", error)
   }
  };

    return (
        <div>
            <button className="btn" onClick={handleClick}>X</button>
            {token &&
            <button className="btn2" onClick = {addtoCartbtn}>Add to cart</button>}
            <h2>Product Details</h2>
            <p>Name: {data.title}</p>
            <img className= "img" src={data.image}/>
            <p>Price: {data.price}</p>
            <p>Category: {data.category} </p>
            <p>{data.description}</p>
            <p>Rate: {data.rating.rate} Count: {data.rating.count}</p>

        </div>
    )
}
export default ProductDetails;