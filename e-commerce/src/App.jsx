import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react"
import './App.css'
//Components without auth
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Products from "./components/Products"
import ProductDetails from "./components/ProductDetails"

//Components with auth
import Logout from './components/Logout'
import Account from "./components/Account"
import Cart from "./components/Cart"


function App() {
 const [token, setToken] = useState(null);
 const [userId, setUserId] = useState(() => {
  // Initialize userId with data from localStorage or null
  return localStorage.getItem("userId") || null;
});
 const [cartItems, setCartItems] = useState(() => {
  // Initialize cartItems with data from localStorage or an empty array
  const storedCartItems = localStorage.getItem("cartItems");
  return storedCartItems ? JSON.parse(storedCartItems) : [];
});
useEffect(() => {
  // console.log("userId from APP:******", userId);
  // console.log("cartItems: from APP*******", cartItems);
  // Save userId to localStorage whenever it changes
  localStorage.setItem("userId", userId);
}, []);

  return (
    <div>
      <BrowserRouter>
      <Navbar token = {token} setToken = {setToken} />
      <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path="/register" element ={<Register/>}/>
      <Route path="/products" element ={<Products/>}/>
      <Route path="/login" element ={<Login setToken={setToken} setUserId={setUserId}/>}/>
      <Route path="" element ={<Logout/>}/>
      <Route path="/productdetails/:id" element ={<ProductDetails token={token} userId={userId} cartItems= {cartItems} setCartItems = {setCartItems}/>}/>
      {/* <Route path="/account" element ={<Account token={token}/>}/> */}
      <Route path="/account" element ={<Account token={token} userId={userId}/>}/>
      <Route path="/cart" element ={<Cart token = {token} userId={userId} cartItems= {cartItems} setCartItems = {setCartItems}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
