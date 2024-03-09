//api
import { useParams } from "react-router-dom";
import { useAccountQuery } from "../Redux/api";

function Account ({token, userId}) {
    // let { id } = useParams();
    const {data, error, isLoading } = useAccountQuery({token, id: userId })
    console.log("This is data from Account", data)
    console.log("this is token from account", token)
    if (error || (!data && !isLoading)) {
        return <p>Something went wrong!</p>;
      }
    
      if (isLoading) {
        return <p>Loading...</p>;
      }

    return (
        <div>
        <h2>This is your Account</h2>
        <ul>
        <li>Username: {data.username}</li>
        {data.email? <li>Email: {data.email}</li> : ""}
        <li>Phone Number: {data.phone}</li>
        { data.name.firstname ? <li>First Name: {data.name.firstname} </li>: ""}
        { data.name.lastname ? <li>Last Name: {data.name.lastname} </li> : ""}
        { data.address.number ? <li>Address: {data.address.number} </li>: ""} 
        {data.address.street ? <li>Street: {data.address.street}</li>: ""}
        {data.address.city ?<li>City: {data.address.city}</li>: ""}
        {data.address.zipcode ? <li>Zipcode: {data.address.zipcode}</li>: ""}
        {data.address.geolocation.lat ? <li>Geolocation: Latitude: {data.address.geolocation.lat}</li> :""}
        {data.address.geolocation.long ? <li>Longitude: {data.address.geolocation.long}</li>: ""}
        </ul>
        </div>
    )
}
export default Account;


//get all users
//match the email, username, password
//gives us id?
//setUserId function 





















//