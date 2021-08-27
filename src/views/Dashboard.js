import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Dashboard = () => {
  const styles = {
    playerGrid: {
      overflowY: "overlay",
      maxHeight: "70vh",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 25rem))",
      gap: "1rem",
      justifyContent: "center",
    },
  };
  const [data, setData] = useState();

  useEffect(() => {
    const localData = localStorage.getItem("playerData");
    setData(JSON.parse(localData));
  }, []);

  return (
    <Row>
      <Col>
        <h3 className="text-center">PLAYER LIST</h3>
        <div className="bg-dark rounded py-2" style={styles.playerGrid}>
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
        </div>
      </Col>
    </Row>
  );
};

export default Dashboard;
