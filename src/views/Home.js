import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const Home = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  let localData = localStorage.getItem("playerData");
  localData = localData ? JSON.parse(localData) : [];

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      localData.push(data);
      localStorage.setItem("playerData", JSON.stringify(localData));
    }

    setValidated(true);
  };

  return (
    <Card className="border">
      <Card.Title className="text-center py-3">Create Player</Card.Title>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => setData({ ...data, username: e.target.value })}
              minLength="5"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              minLength="5"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your password with anyone else.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Home;
