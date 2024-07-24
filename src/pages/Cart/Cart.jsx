import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import shopPhoto from "../../assets/shop.jpg";
import CartCard from "../../components/CartCard/CartCard";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import "./Cart.css";

export default function Cart() {
  const {
    productsInCart,
    removeFromCart,
    decrementProduct,
    incrementProduct,
    formatNumber,
  } = useContext(AppContext);
  const [productToRemove, setProductToRemove] = useState(null);


  const totalPrice = productsInCart.reduce((acc, curr) => {
    let newPrice;
    if (curr.discountedPrice) {
      newPrice = parseFloat(
        curr.discountedPrice.replace(/\./g, "").replace(",", ".") *
          curr.quantity
      );
    } else {
      newPrice = parseFloat(
        curr.current_price.replace(/\./g, "").replace(",", ".") * curr.quantity
      );
    }
    return acc + newPrice;
  }, 0);

  const handleRemoveClick = (product) => {
    setProductToRemove(product);
    setModalOpen(true);
  };
  const handleConfirmRemove = () => {
    if (productToRemove) {
      removeFromCart(productToRemove);
    }
    setModalOpen(false);
    setProductToRemove(null);
  };

  const handleCancelRemove = () => {
    setModalOpen(false);
    setProductToRemove(null);
  };

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="wrapper-page">
      {modalOpen && (
        <Modal onConfirm={handleConfirmRemove} onCancel={handleCancelRemove} />
      )}
      {productsInCart.length < 1 ? (
        <div className="error">
          <img className="error-img" src={shopPhoto} alt="img-error" />
          <h2>No items in cart</h2>
          <p>
            Start browsing <Link to="/products">products</Link>
          </p>
        </div>
      ) : (
        <div className="wrapper-cart">
          <h1>My Cart</h1>
          {productsInCart.map((product) => {
            const formattedPrice = product.discountedPrice
              ? parseFloat(
                  product.discountedPrice.replace(/\./g, "").replace(",", ".")
                )
              : parseFloat(
                  product.current_price.replace(/\./g, "").replace(",", ".")
                );

            return (
              <CartCard
                key={product.id}
                image={product.image_url}
                title={product.title}
                stock={product.stock}
                price={formattedPrice}
                description={product.short_description}
                onClick={() => handleRemoveClick(product)}
                quantity={product.quantity}
                decrementProduct={() => decrementProduct(product)}
                incrementProduct={() => incrementProduct(product)}
              />
            );
          })}
          <div className="last-div">
            <h1>Total amount: {formatNumber(totalPrice)} rsd</h1>
            <button
              className="pay-btn"
              onClick={() => setModalOpen(!modalOpen)}
            >
              Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
