import { useEffect, useState } from "react";
import './Products.css'
import products from "../../common/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
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

  return (
    <div className="product-page">
      {products.map((product) => (
        <ProductCard 
        key={product.id}
        image_url={product.image_url}
        brand_name={product.brand_name}
        description={product.description}
        />
      ))}
    </div>
  );
};

export default Products;
