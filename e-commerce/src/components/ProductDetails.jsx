import { useParams, useNavigate } from "react-router-dom";
//api
import { useProductDetailsQuery } from "../Redux/api";
function ProductDetails (){
    let { id } = useParams();
  const navigate = useNavigate();

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
  
  const handleCart = () => {
    navigate("/cart")
  };
//   const goToAddtoCart = () => {
//     navigate(`/addtoCart/${id}`);
//   };

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
            <button className="btn2" onClick = {handleCart}>Add to cart</button>
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