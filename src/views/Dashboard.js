import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    const localData = localStorage.getItem("playerData");
    console.log(JSON.parse(localData));
  }, []);
  return <div>Dashboard</div>;
};

export default Dashboard;
