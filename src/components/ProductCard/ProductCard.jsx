import { Card, Image, Text } from "@mantine/core";
import "./ProductCard.css";
import "../../common/products.json";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@mantine/core";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ProductCard = ({
  image_url,
  description,
  price,
  title,
  product,
  onClick,
}) => {
  const { productsInCart } = useContext(AppContext);
  const productInCart = productsInCart.some((item) => item.id === product.id);
  return (
    <Card
      shadow="sm"
      component="a"
      target="_blank"
      style={{ width: "200px" }}
      className="product-card"
    >
      <Card.Section>
        <Image src={image_url} className="img-product" alt="No way!" />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {title}
      </Text>
      <Text mt="xs" c="dimmed" size="sm">
        {description}
      </Text>
      <Text mt="xs" c="dimmed" size="sm">
        {price}rsd
      </Text>
      <Button className="btn-products" onClick={onClick}>
        <FaShoppingCart className="icon icon-card" />
        {productInCart ? <p>Remove from cart</p> : <p>Add to cart</p>}
      </Button>
    </Card>
  );
};

export default ProductCard;
