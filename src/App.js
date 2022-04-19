import Footer from "./components/Footer";
import Header from "./components/Header";

import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}
