import { Card, Button } from "react-bootstrap";
import ProductModal from "./ProductModal";

const ProductDispaly = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require(`../img/${product.img}`)} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.text}</Card.Text>
        <Button variant="primary">buy</Button>
        <ProductModal product={product.name} />
      </Card.Body>
    </Card>
  );
};

ProductDispaly.defaultProps = {
  product: {
    img: "1.png",
    name: "책",
    text: "소개",
  },
};
export default ProductDispaly;
