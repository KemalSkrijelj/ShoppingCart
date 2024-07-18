import { useContext, useEffect, useState } from "react";
import outletData from "../../common/onSaleProducts.json";
import OutletCard from "../../components/OutletCard/OutletCard";
import Pagination from "../../components/Paginations/Pagination";
import "./Outlet.css";
import { AppContext } from "../../context/AppContext";
const Outlet = () => {
  const { addToCartOutlet, productsInCartOutlet, removeFromCartOutlet } = useContext(AppContext);

  const [page, setPage] = useState(1);
  const numOfProductsPerPage = 12;
  const numOfProducts = outletData.length;
  const numOfPages = Math.ceil(numOfProducts / numOfProductsPerPage);

  // const setNewProducts = () => {
  //   const newProducts = outlet.map((product) => {
  //     const newProduct = {
  //       ...product,
  //       discount:Math.ceil( (Math.random() * 60 ) + 10),
  //     };
  //     return newProduct;
  //   });
  //   console.log( newProducts);
  //   setOutlet(newProducts);
  // };

  // useEffect(() => {
  //   setNewProducts();
  // }, []);
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
            const productInCartOutlet = productsInCartOutlet
            ? productsInCartOutlet.find((item) => item.id === product.id)
            : null;
          const strPrice = product.current_price;
          const numPrice = +strPrice.replace(".", "").replace(",", ".");
          const newPrice = (
            numPrice -
            (product.percentage / 100) * numPrice
          ).toFixed(2);
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
                  if (productInCartOutlet) {
                    removeFromCartOutlet(product);
                  } else {
                    addToCartOutlet(product);
                  }
                }}
                product={product}
                price={product.current_price}
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
