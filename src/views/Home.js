import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  CreatePlayerForm,
  RecentPlayerCard,
  ToastNotification,
} from "../components";

const Home = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    experience: "",
    level: "",
  });

  const [recentData, setRecentData] = useState({});
  const [showToast, setShowToast] = useState(false);

  let localData = localStorage.getItem("playerData");
  localData = localData ? JSON.parse(localData) : [];

  return (
    <Row>
      <Col>
        <ToastNotification
          showToast={showToast}
          setShowToast={setShowToast}
          title="Yeay !!"
          msg="New player has been added !"
        />
        <CreatePlayerForm
          stateData={data}
          setStateDate={setData}
          localData={localData}
          setRecentData={setRecentData}
          setShowToast={setShowToast}
        />
      </Col>
      <Col>
        <RecentPlayerCard recentData={recentData} />
      </Col>
    </Row>
  );
};

export default Home;
