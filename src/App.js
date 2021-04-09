import Home from "./components/Home";
import SuccessPage from "./components/SuccessPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
