import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./views/Layout";
import Routing from "./router";

export const App = () => (
  <Router>
    <MainLayout>
      <Routing />
    </MainLayout>
  </Router>
);
