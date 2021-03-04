import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/Pages/NotFound";
import AddUser from "./components/users/AddUser";
import EditUsers from "./components/users/EditUsers";
import View from "./components/users/View";
// npm run start:dev
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUsers} />
          <Route exact path="/view/:id" component={View} />

          <Route component={NotFound} />
        </Switch>
        {/* <Home />
        <About />
        <Contact /> */}
      </div>
    </Router>
  );
}

export default App;
