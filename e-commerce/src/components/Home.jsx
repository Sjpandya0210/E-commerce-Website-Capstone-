import store_img from "../assets/store_home.jpg"
import ring from "../assets/ring.jpg"
import jewelry from "../assets/jewelry.jpg"
import electronics from "../assets/electronics.jpg"
import "../Style/Home.css"
function Home() {
    return (
      <div className="main">
        <h1>Welcome to E-store</h1>
        <div className="container show-images">
        <div className="top-images">
        <img className="img1" src={ring} alt="image of ring" />
        <img className="img2" src={jewelry} alt="image of jewelry" />
        </div>
        <div className="bottom-images">
        <img className="img3" src={store_img} alt="image of cart in a store" />
        <img className="img4" src={electronics} alt="image of electronics" />
        </div>
        </div>
        <p>
        Welcome to our vibrant e-store, where shopping meets convenience and style! 
        </p>
        <p>
        Explore our exclusive deals, unbeatable discounts, and personalized recommendations, all customized just for you.
        </p>
      </div>
    );
  }
  
  export default Home;