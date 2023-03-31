import UserContext from "../context/DataContext";
import { useState, useContext } from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";

const ProductModal = ({ product }) => {
  const state = useContext(UserContext);

  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = (e) => {
    console.log(state);
    if (e && e.target.innerHTML === "작성") {
      const nextComments = {
        id: 2,
        user: state.state.user,
        product: product,
        text: text,
      };
      state.action.setComments([...state.state.comments, nextComments]);
    }

    setShow(false);
  };
  const handleShow = () => setShow(true);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        후기작성
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>후기를 작성해주세요</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control onChange={onChange} as="textarea" placeholder="Leave a comment here" style={{ height: "100px" }} />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={handleClose}>
            작성
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductModal;
