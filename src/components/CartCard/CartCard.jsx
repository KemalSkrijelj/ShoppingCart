import "./CartCard.css";
import { FaTrash } from "react-icons/fa";
export default function CartCard({
  image,
  title,
  description,
  stock,
  price,
  onClick,
  quantity,
  decrementProduct,
  incrementProduct,
}) 
{
  console.log(quantity, "Quanitiy initial")
  return (
    <div className="product-cart">
      <img className="product-image" src={image} />
      <div className="product-info">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="">
        <button onClick={decrementProduct} disabled={quantity === 0}>-</button>
        <p>{quantity === 0 ? 0 : quantity}</p>
        <button onClick={incrementProduct} >+</button>
      </div>
      <div className="product-price">
        <h2>{price}</h2>
        <p>In stock: {stock}</p>
      </div>
      <button onClick={onClick} className="remove-button">
        <FaTrash />
      </button>
    </div>
  );
}