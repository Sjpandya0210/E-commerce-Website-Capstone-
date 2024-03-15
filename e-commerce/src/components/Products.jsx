import { Link } from "react-router-dom"
import { useState } from "react";
//api
import { useProductlistQuery } from "../Redux/api";
//style
import "../Style/Products.css"

function Products () {
    const {data, error, isLoading} = useProductlistQuery();
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);

    console.log("This is data from products", data)
    if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Something went wrong!</p>;
      }
      // Filter products by selected category
    // Filter products by selected category
    const filteredProductsByCategory = selectedCategory.length > 0
        ? data.filter(product => selectedCategory.includes(product.category))
        : data;


    // Filter products by selected price range
    const filteredProductsByPrice = data.filter(product => {
        const [min, max] = selectedPriceRange;
        return product.price >= min && product.price <= max;
    });
    function handleCategoryChange(event) {
        const category = event.target.value;
        if (event.target.checked) {
            setSelectedCategory([...selectedCategory, category]);
        } else {
            setSelectedCategory(selectedCategory.filter(item => item !== category));
        }
    }
    // Function to clear all selected categories
    function clearCategories() {
        setSelectedCategory([]);
    }
    //Function to handle price range checkbox change
    function handlePriceRangeChange(event) {
        console.log("This is event target",event.target.value)
        const [min, max] = JSON.parse(event.target.value);
        if (event.target.checked) {
            setSelectedPriceRange([min, max]);
        } else {
            setSelectedPriceRange([0, 1000]); // Reset to default if all ranges are cleared
        }
    }

    // Function to clear selected price range
    function clearPriceRange() {
        setSelectedPriceRange([0, 1000]);
    }

    
    return(
        <div>
            <h2>List of All Products</h2>
            <div className="filters">
            <div className="categoryBtn">
                    <label>
                        <input type="checkbox" 
                        value="men's clothing" 
                        onChange={handleCategoryChange} 
                        checked={selectedCategory.includes("men's clothing")} /> Men's Clothing
                    </label>
                    <label>
                        <input type="checkbox" 
                        value="women's clothing" 
                        onChange={handleCategoryChange} 
                        checked={selectedCategory.includes("women's clothing")} /> Women's Clothing
                    </label>
                    <label>
                        <input type="checkbox" 
                        value="jewelery" 
                        onChange={handleCategoryChange} 
                        checked={selectedCategory.includes("jewelery")} /> Jewelery
                    </label>
                    <label>
                        <input type="checkbox" 
                        value="electronics" 
                        onChange={handleCategoryChange} 
                        checked={selectedCategory.includes("electronics")} /> Electronics
                    </label>
                    <button onClick={clearCategories} className="btnClear">Clear All</button>
                </div>
                <div className="priceBtn">
                    <label>
                        <input type="checkbox" value="[0, 100]" onChange={handlePriceRangeChange} checked={selectedPriceRange[0] === 0 && selectedPriceRange[1] === 100} /> 0-100
                    </label>
                    <label>
                        <input type="checkbox" value="[101, 300]" onChange={handlePriceRangeChange} checked={selectedPriceRange[0] === 101 && selectedPriceRange[1] === 300} /> 101-300
                    </label>
                    <label>
                        <input type="checkbox" value="[301, 700]" onChange={handlePriceRangeChange} checked={selectedPriceRange[0] === 301 && selectedPriceRange[1] === 700} /> 301-700
                    </label>
                    <label>
                        <input type="checkbox" value="[701, 1000]" onChange={handlePriceRangeChange} checked={selectedPriceRange[0] === 701 && selectedPriceRange[1] === 1000} /> 700 - 1000
                    </label>
                    <button onClick={clearPriceRange}>Clear All Prices</button>
                </div>
            </div>
            <div className="productContainer">
            {filteredProductsByCategory.filter(product => filteredProductsByPrice.includes(product)).map((product) => {
                    // console.log("this is data.products", product);
                return(
                    <div className = "productsInfo" key = {product.id}>
                        <h2>{product.title}</h2>
                        <img className= "img" src={product.image}/>
                        <p><strong>Price:</strong> {product.price}</p>
                        <p><strong>Rate:</strong> {product.rating.rate} <strong>Reviews:</strong> {product.rating.count}</p>
                        <p><strong>Category:</strong> {product.category} </p>
                        <Link to={`/productdetails/${product.id}`} className="btnDetails">See Details</Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
  
}
export default Products;