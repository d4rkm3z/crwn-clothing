import React from "react";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";

export const App = () => (
  <div>
    <Switch>
      <Route exact location="/" component={HomePage} />
    </Switch>
  </div>
);
