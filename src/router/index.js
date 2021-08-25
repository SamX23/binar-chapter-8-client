import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading";

const Home = lazy(() => import("../App"));

export default function CreateRoutes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/dashboard">
            <Home title="dashboard" />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}
