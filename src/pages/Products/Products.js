import { useContext, useEffect, useState } from "react";
import "./Products.css";
import products from "../../common/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";
import Pagination from "../../components/Paginations/Pagination";
import { AppContext } from "../../context/AppContext";
import "@mantine/notifications/styles.css";
// import Notifications from "../../components/Notifications";

const Products = () => {
  const { addToCart, productsInCart, removeFromCart } = useContext(AppContext);
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
    });
  }, [page]);
  return (
    <>
      <div className="product-page">
        {products
          .map((product) => {
            const productInCart = productsInCart.find(
              (item) => item.id === product.id
            );
            return (
              <ProductCard
                key={product.id}
                image_url={product.image_url}
                brand_name={product.brand_name}
                title={product.title}
                description={product.short_description}
                price={product.current_price}
                product={product}
                stock={product.stock}
                discount={product.discount}
                onClick={() => {
                  if (productInCart) {
                    removeFromCart(product);
                    // Notifications.show({
                    //   title: "You successfully removed product from cart!",
                    //   message: "You can go to cart to check it out!",
                    //   color: "red",
                    // });
                  } else {
                    addToCart(product);
                    // Notifications.show({
                    //   title: "You successfully added product in cart!",
                    //   message: "You can go to cart to check it out!",
                    //   color: "green",
                    // });
                  }
                }}
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

export default Products;
