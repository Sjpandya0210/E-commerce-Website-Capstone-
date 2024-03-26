import { useState } from "react";
//api
import { useRegisterMutation } from "../Redux/api";
import "../Style/Register.css"

function Register() {
  const [nameForm, setNameForm] = useState({
    firstname: "",
    lastname: "",
  });
  const [geoLocationForm, setGeoLocationForm] = useState({
    lat: "",
    long: "",
  });
  const [addressForm, setAddressForm] = useState({
    city: "",
    street: "",
    number: "",
    zipcode: "",
  });
  const [userForm, setUserForm] = useState({
    email: "",
    username: "",
    password: "",
    phone: "",
  });

  const [form, setForm] = useState({
    name: { ...nameForm },
    address: { geolocation: { ...geoLocationForm }, ...addressForm },
    ...userForm,
  });

   const [errorMsg, setError] = useState (null);
   const [register] = useRegisterMutation();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setForm({
    name: { ...nameForm },
    address: { geolocation: { ...geoLocationForm }, ...addressForm },
    ...userForm,
    })

    const {data, error } = await register(form);

    console.log("this is data", data)
    if (error) {
        //error.data.message --> error message
        setError(error.data.message);
        console.log(`error ${JSON.stringify(error.data.message)}`);
     } 
  };

  const handleChangeName = (e) =>
    setNameForm({ ...nameForm, [e.target.name]: e.target.value });

    const handleChangeGeolocation = (e) => {
        setGeoLocationForm ({...geoLocationForm, [e.target.name]: e.target.value });
    }
    const handleChangeAddress = (e) => {
        setAddressForm({...addressForm, [e.target.name]: e.target.value });
    }
    const handleChangeUserForm = (e) => {
        setUserForm({...userForm, [e.target.name]: e.target.value})
    }

  return (
    <div>
      <h2>Registration Form</h2>
        {errorMsg ? <p>{errorMsg}</p> : <span />}
      <form onClick={handleSubmit}>
        <label htmlFor="email">Email:
        <input
          type="text"
          value={userForm.email}
          name="email"
          onChange={handleChangeUserForm}
          placeholder="Email"
        />
        </label>

        <label htmlFor="username">Username:
        <input
          type="text"
          value={userForm.username}
          name="username"
          onChange={handleChangeUserForm}
          placeholder="Username"
        />
        </label>

        <label htmlFor="password">Password: 
        <input
          type="password"
          value={userForm.password}
          name="password"
          onChange={handleChangeUserForm}
          placeholder="Password"
        />
        </label>

        <label htmlFor="name">Firstname:
        <input
          type="text"
          value={nameForm.firstname}
          name="firstname"
          onChange={handleChangeName}
          placeholder="Firstname"
        />
        </label>

        <label htmlFor="name">Lastname: 
        <input
          type="text"
          value={nameForm.lastname}
          name="lastname"
          onChange={handleChangeName}
          placeholder="Lastname"
        />
        </label>
        <label htmlFor="address">City:
        <input
          type="text"
          value={addressForm.city}
          name="city"
          onChange={handleChangeAddress}
          placeholder="City"
        />
        </label>
        <label htmlFor="address">Street:
        <input
          type="text"
          value={addressForm.street}
          name="street"
          onChange={handleChangeAddress}
          placeholder="Street"
        />
        </label>
        <label htmlFor="address">Number:
        <input
          type="text"
          value={geoLocationForm.number}
          name="number"
          onChange={handleChangeAddress}
          placeholder="Number"
        />
        </label>

        <label htmlFor="address">Zipcode:
        <input
          type="text"
          value={geoLocationForm.zipcode}
          name="zipcode"
          onChange={handleChangeAddress}
          placeholder="Zipcode"
        />
        </label>
        <label htmlFor="geolocation">Latitude:
        <input
          type="text"
          name="lat"
          value={geoLocationForm.lat}
          onChange={handleChangeGeolocation}
          placeholder="Latitude"
        />
        </label>

        <label htmlFor="geolocation">Longitude:
        <input
          type="text"
          name="long"
          value={geoLocationForm.long}
          onChange={handleChangeGeolocation}
          placeholder="Longitude"
        />
        </label>

        <label htmlFor="phone">Phone Number:
        <input
          type="number"
          value={userForm.phone}
          name="phone"
          onChange={handleChangeUserForm}
          placeholder="Phone Number"
        />
        </label>

        <button >Submit</button>
      </form>
    </div>
  );
}
export default Register;
