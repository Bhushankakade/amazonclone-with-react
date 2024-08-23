import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./Stateprovider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
          alt="Ad"
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          {/* {user ? <h3>{user.email}</h3> : <h3>Guest</h3>} */}
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
}

export default Checkout;
