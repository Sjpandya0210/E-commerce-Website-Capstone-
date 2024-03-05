//api
import { useParams } from "react-router-dom";
import { useAccountQuery } from "../Redux/api";

function Account ({token, userId}) {
    let { id } = useParams();
    console.log("This is ID from Account", id)
    // {
        //user body from api
    //     "address": {
    //         "geolocation": {
    //             "lat": "-37.3159",
    //             "long": "81.1496"
    //         },
    //         "city": "kilcoole",
    //         "street": "new road",
    //         "number": 7682,
    //         "zipcode": "12926-3874"
    //     },
    //     "id": 1, 
    //     "email": "john@gmail.com",
    //     "username": "johnd",
    //     "password": "m38rmF$",
    //     "name": {
    //         "firstname": "john",
    //         "lastname": "doe"
    //     },
    //     "phone": "1-570-236-7033",
    //     "__v": 0
    // }

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
            {/* {data.user.name? <li>Name: {data.name.firstname} {data.name.lastname}</li>: ""} */}
            { data.name.firstname ? (
          <li>First Name: {data.name.firstname} </li>
        ) : (
          ""
        )}
        { data.name.lastname ? <li>Last Name: {data.name.lastname} </li> : ""}
            {/* <li>Address: {data.address.number} {data.address.street}{data.address.city} {data.address.zipcode}</li>
            <li>Geolocation:{data.address.geolocation.lat} {data.address.geolocation.long}</li> */}
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