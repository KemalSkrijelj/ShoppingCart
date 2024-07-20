import { useContext } from "react";
import "./CartCard.css";
import { FaTrash } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";

const CartCard =({
  image,
  title,
  description,
  stock,
  price,
  onClick,
  quantity,
  decrementProduct,
  incrementProduct,
}) => {
const {formatNumber} = useContext(AppContext)

  const displayPrice = price ? formatNumber(price) : "N/A";

  return (
    <div className="product-cart">
      <img className="product-image" src={image} alt="img-product" />
      <div className="product-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="quantity-product">
        <button
          onClick={decrementProduct}
          disabled={quantity === 0}
          className="decrement-btn"
        >
          -
        </button>
        <p style={{ fontWeight: "bold" }}>
          Quantity: {quantity === 0 ? 0 : quantity}
        </p>
        <button
          onClick={incrementProduct}
          disabled={stock === 0}
          className="increment-btn"
        >
          +
        </button>
      </div>
      <div className="product-price">
        <h2>{displayPrice} rsd</h2>
        <p>In stock: {stock}</p>
      </div>
      <button onClick={onClick} className="remove-button">
        <FaTrash />
      </button>
    </div>
  );
}

export default CartCard