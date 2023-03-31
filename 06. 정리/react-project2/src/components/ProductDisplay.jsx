import { Card, Button } from "react-bootstrap";
import ProductModal from "./ProductModal";
import UserContext from "../context/DataContext";
import { useState, useContext, useEffect } from "react";

const ProductDispaly = ({ product }) => {
  const state = useContext(UserContext);


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require(`../img/${product.img}`)} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.text}</Card.Text>
        <Button variant="primary">buy</Button>
        <ProductModal product={product.name} />
        
      </Card.Body>
      <Card.Footer className="text-muted">
      {
        state.state.comments.map((comment)=>{
          console.log(comment.img);

          return (
          <li key={comment.id}>
            <div style={{width: "100px", height: "50px",  backgroundSize: "cover", backgroundImage : `url(${comment.img})`}}></div>
            {comment.user} : {comment.text}
            </li>
          )
        }
        )
    }
      </Card.Footer>

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
