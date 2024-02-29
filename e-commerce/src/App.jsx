import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"
import './App.css'
//Components 
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Logout from './components/Logout'
import Home from "./components/Home"


function App() {
 const [token, setToken] = useState(null);
 
 console.log("This is token from app", token);

  return (
    <div>
      <BrowserRouter>
      <Navbar token = {token} setToken = {setToken}/>
      <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path="/register" element ={<Register setToken = {setToken}/>}/>
      <Route path="" element ={<Login/>}/>
      <Route path="" element ={<Logout/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
