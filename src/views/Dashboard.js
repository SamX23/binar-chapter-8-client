import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const localData = localStorage.getItem("playerData");
    setData(JSON.parse(localData));
  }, []);

  return (
    <Row>
      <Col>
        <h3>Player List</h3>
        {data ? (
          data.map((item, key) => (
            <Card key={key} className="my-1">
              <Card.Body>
                <p>Username : {item.username}</p>
                <p>Email : {item.email}</p>
                <p>Experience : {item.experience}</p>
                <p>Level : {item.level}</p>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No data</p>
        )}
      </Col>
    </Row>
  );
};

export default Dashboard;
