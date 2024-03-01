import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"
import './App.css'
//Components without auth
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Products from "./components/Products"

//Components with auth
import Logout from './components/Logout'
import Account from "./components/Account"


function App() {
 const [token, setToken] = useState(null);
 
 console.log("This is token from app", token);

  return (
    <div>
      <BrowserRouter>
      <Navbar token = {token} setToken = {setToken}/>
      <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path="/register" element ={<Register/>}/>
      <Route path="/login" element ={<Login setToken={setToken}/>}/>
      <Route path="/products" element ={<Products/>}/>
      <Route path="" element ={<Logout/>}/>
      <Route path="/account" element ={<Account/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
