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
  const { productsInCart } = useContext(AppContext);
  const productInCart = productsInCart
    ? productsInCart.find((item) => item.id === product.id)
    : null;

  const parseCurrentPrice = current_price
    ? parseFloat(current_price.replace(/\./g, "").replace(",", "."))
    : 0;

  const totalValue = parseCurrentPrice * ((100 - discount) / 100);
  const priceWithDiscount = totalValue.toFixed(2);

  const convertingNum = (num) => {
    if (typeof num !== "number") {
      num = parseFloat(num);
    }

    if (isNaN(num)) {
      return "N/A";
    }

    let formatted = num.toFixed(2);

    let [integerPart, decimalPart] = formatted.split(".");

    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `${integerPart},${decimalPart}`;
  };

  return (
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
        <p style={{ textDecoration: "line-through" }}>{current_price} rsd</p>
        <p>{convertingNum(priceWithDiscount)} rsd</p>
      </Text>
      <Button
        className="btn-products"
        onClick={() =>
          onClick({ ...product, discountedPrice: priceWithDiscount })
        }
      >
        <FaShoppingCart className="icon icon-card" />
        {productInCart ? <p>Remove from cart</p> : <p>Add to cart</p>}
      </Button>
    </Card>
  );
};

export default OutletCard;
