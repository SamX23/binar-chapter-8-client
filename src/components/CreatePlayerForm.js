import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const CreatePlayerForm = ({
  stateData,
  setStateDate,
  localData,
  setRecentData,
  setShowToast,
}) => {
  const [validated, setValidated] = useState(false);

  const handleUsernameChange = (e) =>
    setStateDate({ ...stateData, username: e.target.value });

  const handlePasswordChange = (e) =>
    setStateDate({ ...stateData, password: e.target.value });

  const handleEmailChange = (e) =>
    setStateDate({ ...stateData, email: e.target.value });

  const handleExperienceChange = (e) =>
    setStateDate({ ...stateData, experience: e.target.value });

  const handleLevelChange = (e) =>
    setStateDate({ ...stateData, level: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    } else {
      localData.push(stateData);
      setRecentData(stateData);
      setShowToast(true);
      localStorage.setItem("playerData", JSON.stringify(localData));
    }

    setValidated(true);
  };

  return (
    <Card className="shadow">
      <Card.Title className="text-center py-3">Create Player</Card.Title>
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={handleUsernameChange}
              value={stateData.username}
              minLength="5"
              autoComplete="username"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={stateData.password}
              minLength="5"
              autoComplete="current-password"
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

export default CreatePlayerForm;
