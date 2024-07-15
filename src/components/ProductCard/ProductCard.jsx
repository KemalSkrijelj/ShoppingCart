import { Card, Image, Text } from "@mantine/core";
import "./ProductCard.css";
import "../../common/products.json";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@mantine/core";

const ProductCard = ({ image_url, description, brand_name, price, title }) => {
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
      <Button className="btn-products" onClick={() => {}}>
        <FaShoppingCart className="icon icon-card" />
        <p>Add to Cart</p>
      </Button>
    </Card>
  );
};

export default ProductCard;
