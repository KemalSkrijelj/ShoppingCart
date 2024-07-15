import "./OutletCard.css";
import { Badge, Card, Group, Image, Text } from "@mantine/core";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@mantine/core";

const OutletCard = ({ image_url, title, current_price }) => {
  return (
    <>
      <Card
        shadow="sm"
        component="a"
        target="_blank"
        style={{ width: "200px" }}
        className="outlet-card"
      >
        <Card.Section>
          <Image src={image_url} className="img-product" alt="No way!" />
        </Card.Section>

        <Group style={{ display: "flex", width: "100%", gap: "60px" }}>
          <Text fw={500} style={{ width: "100px" }}>
            {title}
          </Text>
          <Badge className="badge-onSale" >On Sale</Badge>
        </Group>
        <Text mt="xs" c="dimmed" size="sm" style={{textDecoration: "line-through"}}>
          {current_price}rsd
        </Text>
        <Button className="btn-products" onClick={() => {}}>
          <FaShoppingCart className="icon icon-card" />
          <p>Add to Cart</p>
        </Button>
      </Card>
    </>
  );
};

export default OutletCard;
