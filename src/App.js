import Footer from "./components/Footer";
import Header from "./components/Header";
import NewList from "./components/NewList";

import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
      </Switch>
    </div>
  );
}
