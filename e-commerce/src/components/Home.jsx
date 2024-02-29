import store_img from "../assets/store_home.jpg"
function Home() {
    return (
      <div>
        <h1>Welcome to E-store</h1>
        <img className= "img1" src={store_img} />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
        </p>
        <p>
        Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
    );
  }
  
  export default Home;