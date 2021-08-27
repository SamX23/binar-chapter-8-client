import { useEffect, useState } from "react";
import {
  Card,
  Col,
  Dropdown,
  DropdownButton,
  FormControl,
  Row,
} from "react-bootstrap";

const Dashboard = () => {
  const playerGrid = {
    overflowY: "overlay",
    maxHeight: "70vh",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 25rem))",
    gap: "1rem",
    justifyContent: "center",
  };

  const [data, setData] = useState();
  const [searchData, setSearchData] = useState("");
  const [textFilter, setTextFilter] = useState("Filter");

  useEffect(() => {
    const localData = localStorage.getItem("playerData");
    setData(JSON.parse(localData));
  }, []);

  return (
    <Row>
      <Col>
        <h3 className="text-center">PLAYER LIST</h3>
        <div className="d-flex align-items-center">
          <FormControl
            type="search"
            placeholder="Search"
            className="my-2"
            aria-label="Search"
          />
          <DropdownButton id="dropdown-basic-button" title={textFilter}>
            <Dropdown.Item
              onClick={(e) => setTextFilter(e.target.innerText)}
              href="#"
            >
              Username
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setTextFilter(e.target.innerText)}
              href="#"
            >
              Email
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setTextFilter(e.target.innerText)}
              href="#"
            >
              Experience
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => setTextFilter(e.target.innerText)}
              href="#"
            >
              Level
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="bg-dark rounded py-2" style={playerGrid}>
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
            <p className="text-center text-light">
              No data, please add one from dashboard
            </p>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Dashboard;
