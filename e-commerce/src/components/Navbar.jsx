import { NavLink, useNavigate } from "react-router-dom";
//style
import "../Style/Navbar.css"
function Navbar (props) {
    const navigate = useNavigate();
    const logoutUser = () => {
        props.setToken(null);
        navigate("/");
      };
    

      if (props.token) {
        return (
          <nav className="token">
            <NavLink to="/">Home</NavLink> 
            <NavLink to="/products">Products</NavLink>
            <NavLink to={`/account`}>Account</NavLink> 
            <NavLink to={`/cart`}>Cart</NavLink> 
            <a onClick={logoutUser}>Logout</a>
          </nav>
        );
      }
      return (
        <nav className="noToken">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/products">Products</NavLink>
        </nav>
      );
    }
export default Navbar;