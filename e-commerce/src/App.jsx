
import './App.css'
//Components 
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Logout from './components/Logout'

function App() {


  return (
    <div>
      <Navbar/>
      <Register/>
      <Login/>
      <Logout/>
    </div>
  )
}

export default App
