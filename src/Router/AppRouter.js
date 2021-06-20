import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import ContactsList from "../components/ContactsList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route component={ContactForm} path="/" exact />
        <Route component={ContactsList} path="/list" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
