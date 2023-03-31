import UserContext from "../context/DataContext";
import { useState, useContext, useEffect } from "react";
import { Button, Modal, FloatingLabel, Form } from "react-bootstrap";

const ProductModal = ({ product }) => {
  const state = useContext(UserContext);

  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [files, setFiles] = useState('');

  const onLoadFile = (e) =>{
    const file = e.target.files
    console.log(file);
    setFiles(file)
  }

  const preview = () => {
    if (!files) return false;
    const img = document.querySelector('#img_box')

    // const reader = new FileReader();
    // reader.onload = () => {
    //   img.style.backgroundImage = `url(${reader.result})`
    // }
    // reader.readAsDataURL(files[0]);

    img.style.backgroundImage = `url(${URL.createObjectURL(files[0])})`
  }

  useEffect(()=> {

    preview();
    return () => preview();
  });

  const handleClose = (e) => {
    if (e && e.type === "submit") {
      e.preventDefault(true);
      console.log(URL.createObjectURL(files[0]));

      const nextComments = {
        id: 2,
        user: state.state.user,
        product: product,
        text: text,
        img : URL.createObjectURL(files[0])
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
        <Form onSubmit={handleClose} >
          <Modal.Body>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control onChange={onChange} as="textarea" placeholder="Leave a comment here" style={{ height: "100px" }} required  />
            </FloatingLabel>
            
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control type="file" onChange={onLoadFile}/>
            </Form.Group>
          <div id="img_box" style={{width: "100px", height: "50px",  backgroundSize: "cover"}}></div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              취소
            </Button>
            <Button variant="primary" type="submit">
              작성
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ProductModal;
