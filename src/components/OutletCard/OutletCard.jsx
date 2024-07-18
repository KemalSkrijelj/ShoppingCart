import "./OutletCard.css";
import { Badge, Card, Group, Image, Text } from "@mantine/core";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@mantine/core";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const OutletCard = ({
  image_url,
  title,
  current_price,
  discount,
  product,
  onClick,
}) => {
  const { productsInCartOutlet } = useContext(AppContext);
  const productInCart = productsInCartOutlet
    ? productsInCartOutlet.find((item) => item.id === product.id)
    : null;
  let parseCurrentPrice = 0;
  if (current_price) {
    parseCurrentPrice = parseFloat(
      current_price.replace(/\./g, "").replace(",", ".")
    );
  }
  var totalValue = parseCurrentPrice * ((100 - discount) / 100);
  const priceWithDiscount = totalValue.toFixed(2);

  return (
    <>
      <Card
        shadow="sm"
        component="a"
        target="_blank"
        style={{ width: "200px" }}
        className="outlet-card"
      >
        <Card.Section className="card-section-outlet">
          <Image src={image_url} className="img-product" alt="No way!" />
          <p>{discount}%</p>
        </Card.Section>

        <Group style={{ display: "flex", width: "100%", gap: "60px" }}>
          <Text fw={500} style={{ width: "145px" }}>
            {title}
          </Text>
          <Badge className="badge-onSale">On Sale</Badge>
        </Group>
        <Text
          mt="xs"
          c="dimmed"
          size="sm"
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100px",
          }}
        >
          <p style={{ textDecoration: "line-through" }}>{current_price}rsd</p>
          <p>{priceWithDiscount} rsd</p>
        </Text>
        <Button className="btn-products" onClick={onClick}>
          <FaShoppingCart className="icon icon-card" />
          {productInCart ? <p>Remove from cart</p> : <p>Add to cart</p>}
        </Button>
      </Card>
    </>
  );
};

export default OutletCard;
