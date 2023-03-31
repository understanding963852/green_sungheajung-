import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Alert, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Button variant="primary">버튼</Button>
      <Alert variant="primary">내용</Alert>
    </div>
  );
}

export default App;
