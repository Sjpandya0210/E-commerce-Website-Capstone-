import { useParams, useNavigate } from "react-router-dom";
//api
import { useProductDetailsQuery, useAddToCartMutation, useSingleCartQuery } from "../Redux/api";
function ProductDetails ({token, userId}){
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
      // Assuming you have the necessary product details in yourProductObject
      const cartProduct = {
        productId: productId,
        quantity: 1, // You may adjust the quantity based on your use case
      };
     const body = {id: userId, products: [cartProduct] }
      // Perform the mutation to add the product to the cart
      await addToCart({ token, body });

      // After the mutation is successful, you may want to refetch the cart data
      // to update the UI with the latest cart information
    
      navigate("/cart")
    } catch (error) {
    console.error("Error adding to cart", error)
   }
  };

// {API response
// 	"id": 6,
// 	"title": "Solid Gold Petite Micropave ",
// 	"price": 168,
// 	"description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
// 	"category": "jewelery",
// 	"image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
// 	"rating": {
// 		"rate": 3.9,
// 		"count": 70
// 	}
    return (
        <div>
            <button className="btn" onClick={handleClick}>X</button>
            {token &&
            <button className="btn2" onClick = {addtoCartbtn}>Add to cart</button>}
            <h2>Product Details</h2>
            <img className= "img" src={data.image}/>
            <p>Price: {data.price}</p>
            <p>Category: {data.category} </p>
            <p>{data.description}</p>
            <p>Rate: {data.rating.rate} Count: {data.rating.count}</p>

        </div>
    )
}
export default ProductDetails;