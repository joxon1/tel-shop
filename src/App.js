import Footer from "./components/Footer";
import Header from "./components/Header";

import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Registr from "./components/Registr";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registr">
          <Registr />
        </Route>
      </Switch>
    </div>
  );
}
