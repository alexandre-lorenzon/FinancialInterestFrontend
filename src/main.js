import React from "react";
import Home from "./components/home/home";
import Juros from "./components/juros/juros";
import { Container } from "react-materialize";
import { Switch, Route } from "react-router-dom";
import "./index.css";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/juros" component={Juros} />
      </Switch>
    </Container>
  </main>
);

export default Main;
