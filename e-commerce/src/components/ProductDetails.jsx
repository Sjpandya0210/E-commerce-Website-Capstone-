import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
//api
import {
  useProductDetailsQuery,
  useAddToCartMutation,
  useSingleCartQuery,
} from "../Redux/api";
//Style
import "../Style/ProductDetails.css";
function ProductDetails({ token, userId, cartItems, setCartItems }) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [addToCart] = useAddToCartMutation();
  const { data, error, isLoading } = useProductDetailsQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }

  const handleClick = () => {
    navigate("/products");
  };

  const addtoCartbtn = async () => {
    try {
      const productId = id;
      const cartProduct = {
        name: data.title,
        productId,
        quantity: 1,
        price: data.price,
        image: data.image,
      };
    //Check if the item already exists in cartItems
      const existingItem = cartItems.find(item => item.productId === productId);

      if (existingItem) {
        // If item exists, update its quantity
        const updatedCart = cartItems.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Update localStorage
      } else {
        const updatedCart = [...cartItems, cartProduct];
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Update localStorage
      }

      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart", error);
    }
  };

  return (
    <div className="box">
      <button className="btn" onClick={handleClick}>
        Back
      </button>
      <div className="pDetails">
        {userId && (
          <button className="btn2" onClick={addtoCartbtn}>
            Add to cart
          </button>
        )}
        <h2>Product Details</h2>
        <p>Name: {data.title}</p>
        <img className="img" src={data.image} />
        <p>
          <strong>Price:</strong> {data.price}
        </p>
        <p>
          <strong>Category: </strong>
          {data.category}{" "}
        </p>
        <p>{data.description}</p>
        <p>
          <strong>Rate:</strong> {data.rating.rate} <strong>Reviews: </strong>
          {data.rating.count}
        </p>
      </div>
    </div>
  );
}
export default ProductDetails;
