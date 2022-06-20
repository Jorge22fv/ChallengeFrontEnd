import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import './App.css';
import { Form } from './views/form';
import { ResultForm } from "./views/resultForm";
import { UserList } from "./views/userList"

function App() {
  const basename = process.env.BASENAME || "";

  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/resultForm">
            <ResultForm />
          </Route>
          <Route exact path="/userList">
            <UserList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
