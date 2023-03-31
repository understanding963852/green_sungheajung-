import { useState, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/DataContext";

const LoginForm = () => {
  const [name, setName] = useState("");
  const user = useContext(UserContext);
  const navigator = useNavigate();
  const goHome = (e) => {
    e.preventDefault();
    user.action.setUser(name);
    navigator("/");
  };

  const onChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  return (
    <div className="mx-4">
      <Form onSubmit={goHome}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" onChange={onChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
