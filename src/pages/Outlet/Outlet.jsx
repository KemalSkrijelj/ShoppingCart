/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import outletData from "../../common/onSaleProducts.json";
import OutletCard from "../../components/OutletCard/OutletCard";
import Pagination from "../../components/Paginations/Pagination";
import "./Outlet.css";
import { AppContext } from "../../context/AppContext";

const Outlet = () => {
  const { productsInCart, removeFromCart, addToCart } = useContext(AppContext);

  const [page, setPage] = useState(1);
  const numOfProductsPerPage = 12;
  const numOfProducts = outletData.length;
  const numOfPages = Math.ceil(numOfProducts / numOfProductsPerPage);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  
  return (
    <>
      <div className="outlet-page">
        {outletData
          .map((product) => {
            const productInCart = productsInCart
              ? productsInCart.find((item) => item.id === product.id)
              : null;
              const strPrice = product.current_price;
              const numPrice = +strPrice.replace(".", "").replace(",", ".");
              const newPrice = numPrice - (product.percentage / 100) * numPrice;
  
            const discountedPrice = (
              newPrice -
              (product.discount / 100) * numPrice
            );

            return (
              <OutletCard
                key={product.id}
                image_url={product.image_url}
                brand_name={product.brand_name}
                title={product.title}
                short_description={product.short_description}
                stock={product.stock}
                current_price={product.current_price}
                onClick={() => {
                  if (productInCart) {
                    removeFromCart(product);
                    alert("Izbacili ste proizvod iz korpe")
                  } else {
                    addToCart({
                      ...product,
                      discountedPrice, 
                    });
                    alert("Dodali ste proizvod u korpu! Idite do korpe.")
                  }
                }}
                product={product}
                price={numPrice}
                discount={product.discount}
              />
            );
          })
          .slice(
            numOfProductsPerPage * (page - 1),
            numOfProductsPerPage * page
          )}
      </div>
      <Pagination page={page} numOfPages={numOfPages} setPage={setPage} />
    </>
  );
};

export default Outlet;
