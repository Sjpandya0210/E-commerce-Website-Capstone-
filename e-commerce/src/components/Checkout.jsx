import { useState } from "react";
//style
import "../Style/Checkout.css"

const Checkout = () => {
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  
    const handlePlaceOrder = (e) => {
      e.preventDefault();
      setIsOrderPlaced(true);
    };
  
  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      {!isOrderPlaced ? (
        <div className="shipping-info">
          <h3>Shipping Information</h3>
          <form>
            <label>
              Name:
              <input type="text" className="input-field" />
            </label>
            <label>
              Address:
              <input type="text" className="input-field" />
            </label>
            <label>
              City:
              <input type="text" className="input-field" />
            </label>
            <label>
              Country:
              <input type="text" className="input-field" />
            </label>
            <button type="submit" className="submit-btn" onClick={handlePlaceOrder}>Place Order</button>
          </form>
        </div>
      ) : (
        <div className="checkout-success">
          <p>Your order has been successfully placed!</p>
          {/* You can display additional order details here */}
        </div>
      )}
    </div>
  );
};





export default Checkout;