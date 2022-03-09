import { Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Register from "./routes/Register";
import User from "./routes/User";
import customhistory from "./history";
import Login from "./routes/Login";

function App() {
  return (
    <Router history={customhistory}>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/user-details" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
