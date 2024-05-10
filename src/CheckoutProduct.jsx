import React from "react";
import "./checkoutProduct.css";
import { useStateValue } from "./StateProvider";
import StarIcon from "@material-ui/icons/Star";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="picture" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="starIcon" />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From The Basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
