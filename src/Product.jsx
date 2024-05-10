import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    // dispatch the items into the data layer
    // dispatch is like gun
    dispatch({
      type: "ADD TO BASKET",
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="starIcon" />
            ))}
        </div>
      </div>
      <img src={image} alt="picture" />
      <button className="product__button" onClick={addToBasket}>
        Add To Basket{" "}
      </button>
    </div>
  );
}

export default Product;
