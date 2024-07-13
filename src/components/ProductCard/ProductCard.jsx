import { Card, Image, Text } from "@mantine/core";
import "./ProductCard.css";
import '../../common/products.json'

const ProductCard = ({image_url, description, brand_name }) => {
  return (
    <div className="cards">
      <Card
        shadow="sm"
        component="a"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        style={{ width: "200px" }}
      >
        <Card.Section>
          <Image src={image_url} h={160} alt="No way!" />
        </Card.Section>

        <Text fw={500} size="lg" mt="md">
          {brand_name}
        </Text>

        <Text mt="xs" c="dimmed" size="sm">
          {description}
        </Text>
      </Card>
    </div>
  );
};

export default ProductCard;
