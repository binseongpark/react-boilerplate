import {
  useHistory,
  useLocation,
  Switch,
  Route,
  BrowserRouter,
  Router,
} from "react-router-dom";

import HomePage from "./containers/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
