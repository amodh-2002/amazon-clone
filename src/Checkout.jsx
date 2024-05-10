import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
          alt="picture"
        />
        <div>
          <h3>Hello ,{user?.email}</h3>
          {/* the above gives an error so please fix it  */}
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* checkoutProduct */}
          {basket.map((item) => (
            <CheckoutProduct
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
        {/* subtotal will go here */}
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
