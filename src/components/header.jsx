import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Loop from "./LoopExample.jsx";
import Compo from "./compo";
import States from "./states";
import StatesObject from "./statesobject";
import StateLifeCycle from "./StateLifeCycle";
import FetchAPI from "./FetchAPI";
import BtnRedirect from "./BtnRedirect";
import FunctionIntro from "./FunctionalCompo/01FunctionIntro";
import UseState from "./FunctionalCompo/02UseState";
import UseEffect from "./FunctionalCompo/03UseEffect";
import ImpHndl from "./FunctionalCompo/07ImpHndl";
import Validation from "./FunctionalCompo/09Validation";
import FunctionApi from "./FunctionalCompo/08FunctionApi";
import ReduxApp from "./ReduxApp";

export default function header() {
  const numbers = {
    "/home": "Home",
    "/about": "About",
    "/loop": "Loop",
    "/compo": "Component",
    "/states": "States",
    "/statesobject": "StatesObject",
    "/StateLifeCycle": "StateLifeCycle",
    "/FetchAPI": "FetchAPI",
    "/BtnRedirect": "BtnRedirect",
    "/FunctionIntro": "FunctionIntro",
    "/UseState": "UseState",
    "/UseEffect": "UseEffect",
    "/ImpHndl": "ImpHndl",
    "/FunctionApi": "FunctionApi",
    "/Validation": "Validation",
    "/ReduxApp": "ReduxApp",
  };

  const returndata = Object.entries(numbers).map((res, i, arr) => {
    return (
      <li className="nav-item" key={i}>
        <Link className="nav-link" to={res[0]}>
          {res[1]}
        </Link>
      </li>
    );
  });

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                {returndata}

                <li className="nav-item dropdown"></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/loop" element={<Loop />}></Route>
        <Route path="/compo" element={<Compo />}></Route>
        <Route path="/states" element={<States />}></Route>
        <Route path="/statesobject" element={<StatesObject />}></Route>
        <Route path="/StateLifeCycle" element={<StateLifeCycle />}></Route>
        <Route path="/FetchAPI" element={<FetchAPI />}></Route>
        <Route path="/BtnRedirect" element={<BtnRedirect />}></Route>
        <Route path="/FunctionIntro" element={<FunctionIntro />}></Route>
        <Route path="/UseState" element={<UseState />}></Route>
        <Route path="/UseEffect" element={<UseEffect />}></Route>
        <Route path="/ImpHndl" element={<ImpHndl />}></Route>
        <Route path="/FunctionApi" element={<FunctionApi />}></Route>
        <Route path="/Validation" element={<Validation />}></Route>
        <Route path="/ReduxApp" element={<ReduxApp />}></Route>
      </Routes>
    </Router>
  );
}
