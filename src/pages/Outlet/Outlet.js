import { useState } from "react";
import products from "../../common/products.json";
import OutletCard from "../../components/OutletCard/OutletCard";
import Pagination from "../../components/Paginations/Pagination";
import "./Outlet.css";
const Outlet = () => {
  const [page, setPage] = useState(1);
  const numOfProductsPerPage = 12;
  const numOfProducts = products.length;
  const numOfPages = Math.ceil(numOfProducts / numOfProductsPerPage);
  return (
    <>
      <div className="outlet-page">
        {products
          .map((product) => (
            <OutletCard
              key={product.id}
              image_url={product.image_url}
              brand_name={product.brand_name}
              title={product.title}
              short_description={product.short_description}
              stock={product.stock}
              current_price={product.current_price}
            />
          ))
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
