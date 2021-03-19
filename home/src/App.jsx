import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Contacts from "./Contacts";
import Reception from "./Reception";
import Admin from "./Admin";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
function App() {
  return (
  <>
  <Navbar/>
                    <Switch> 
                          <Route exact path = "/" component = {Home}/>
                          <Route exact path = "/contacts" component = {Contacts}/>
                          <Route exact path = "/reception" component = {Reception}/>
                          <Route exact path = "/admin" component = {Admin}/>
                          <Redirect to="/"/>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
    </>
  );
};

export default App;