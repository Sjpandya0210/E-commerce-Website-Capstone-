import { useState} from "react"
import { useNavigate } from "react-router-dom";
//api
import { useLoginMutation } from "../Redux/api";
import { useGetAllUsersQuery } from "../Redux/api";
//style
import "../Style/Login.css"

function Login(props) {
  
    const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  
  const [errorMsg, setError] = useState(null);
  
  const [login] = useLoginMutation();

  const navigate = useNavigate();
  
  const {data :allUserData, error} = useGetAllUsersQuery();

  if (error) {
    return <h2>Something went wrong!</h2>
  } 
  
  const eventHandler = async (event) => {
    event.preventDefault();
    const { data, error } = await login(userInfo);

    if (error) {
      setError(error.data);
    } else {
      const userData = allUserData.find((user)=> {
        if (userInfo.username === user.username && userInfo.password === user.password){
          return user
        } 
      })
      // console.log("This is userdata", userData)
      props.setToken(data.token);
      props.setUserId(userData.id);
      //change to Product list route
      navigate(`/account`);
    }
  };

  const onUserInput = (e) => {
    if (errorMsg) {
      setError(null);
    }

    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={eventHandler} className="lForm">
        <div className="inputGroup">
        <label>
          Username: johnd
          <input
            className="uName"
            type="text"
            placeholder="Username"
            name="username"
            autoComplete="on"
            value={userInfo.username}
            onChange={onUserInput}
          />
        </label>
        <label htmlFor="password">Password: m38rmF$
        <input
          className="pName"
          type="password"
          placeholder="password"
          name="password"
          autoComplete="on"
          value={userInfo.password}
          onChange={onUserInput}
        />
        </label>
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
export default Login;
