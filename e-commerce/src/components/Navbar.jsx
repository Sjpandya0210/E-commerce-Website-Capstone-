import { NavLink, useNavigate } from "react-router-dom";
//style
import "../Style/Navbar.css"

function Navbar (props) {
    const navigate = useNavigate();
    const logoutUser = () => {
        props.setUserId(null);
        navigate("/");
      };
    

      if (props.userId) {
        return (
          <nav className="navbar123">
            <h2 >E-Store 🛍</h2>
            <NavLink to="/">Home</NavLink> 
            <NavLink to="/products">Products</NavLink>
            <NavLink to={`/account`}>Account</NavLink> 
            <NavLink to={`/cart`}>Cart</NavLink> 
            <a onClick={logoutUser}>Logout</a>
          </nav>
        );
      }
      return (
        <nav className="navbar123">
          <h2 >E-Store 🛍</h2>
          <NavLink to="/"className="lHome">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login"className="login-link">Login</NavLink>
          <NavLink to="/products">Products</NavLink>

        </nav>
      );
    }
export default Navbar;