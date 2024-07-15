import { useEffect, useState } from "react";
import "./Products.css";
import products from "../../common/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from '../../components/Paginations/Pagination'
const Products = () => {
  const [page, setPage] = useState(1);
  const numOfProductsPerPage = 12;
  const numOfProducts = products.length;
  const numOfPages = Math.ceil(numOfProducts / numOfProductsPerPage);
  // const [products, setProducts] = useState(json);

  // const setNewProducts = () => {
  //   const newProducts = products.map((products, index) => {
  //     return {
  //       ...products,
  //       id: index + 1,
  //       stock: Math.floor(Math.random() * 50) + 10,
  //     };
  //   });
  //   setProducts(newProducts)
  // }
  // useEffect(() => {
  //   setNewProducts()
  // }, [])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [page])
  return (
    <>
      <div className="product-page">
        {products
          .map((product) => (
            <ProductCard
              key={product.id}
              image_url={product.image_url}
              brand_name={product.brand_name}
              title={product.title}
              description={product.short_description}
              price={product.current_price}
              stock={product.stock}
            />
          ))
          .slice(
            numOfProductsPerPage * (page - 1),
            numOfProductsPerPage * page
          )}
      </div>
      <Pagination page={page} numOfPages={numOfPages} setPage={setPage} />
      <div  className="div-numOfPage"><p>Page:{page}</p></div>
    </>
  );
};

export default Products;
