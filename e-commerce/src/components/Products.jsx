import { Link } from "react-router-dom"
//api
import { useProductlistQuery } from "../Redux/api";
//style
import "../Style/Products.css"

function Products () {
    const {data, error, isLoading} = useProductlistQuery();
    console.log("This is data from products", data)
    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Something went wrong!</p>;
      }
    
    // {
	// 	"id": 1,
	// 	"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
	// 	"price": 109.95,
	// 	"description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
	// 	"category": "men's clothing",
	// 	"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
	// 	"rating": {
	// 		"rate": 3.9,
	// 		"count": 120
	// 	}
	// }

    return(
        <div>
            <h2>List of All Products</h2>
            {data.map((product) => {
                console.log("this is data.products", product);
                return(
                    <div className = "productsInfo" key = {product.id}>
                        <h2>{product.title}</h2>
                        <img className= "img" src={product.image}/>
                        <p>Price: {product.price}</p>
                        <p>Category: {product.category} </p>
                        <p>{product.description}</p>
                        <p>Rate: {product.rating.rate} Count: {product.rating.count}</p>
                        {/* add link to single product */}
                        <Link to={`/productdetails/${product.id}`}>See Details</Link>
                    </div>
                )
            })}
        </div>
    )
}
export default Products;