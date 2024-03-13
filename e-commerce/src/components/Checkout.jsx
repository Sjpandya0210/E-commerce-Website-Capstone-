//style
import "../Style/Checkout.css"

const Checkout = () => {
  const dummyItems = [
    { id: 1, name: 'Ring', price: 10, quantity: 2 },
    { id: 2, name: 'T-shirt', price: 15, quantity: 1 },
    { id: 3, name: 'Earring', price: 20, quantity: 3 },
  ];

  const calculateTotal = () => {
    return dummyItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {dummyItems.map((item) => (
            <li key={item.id}>
              {item.name}: ${item.price} x {item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${calculateTotal()}</p>
      </div>
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
          <button type="submit" className="submit-btn">Place Order</button>
        </form>
      </div>
    </div>
  );
};



export default Checkout;