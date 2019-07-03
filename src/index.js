// import React from "react";
// import ReactDOM from "react-dom";
// import Mheader from "./components/Mheader/Mheader";

// import Mnear from "./components/Mnear/Mnear";
// import Mnav from "./components/Mnav/Mnav";
// import Mrander from "./components/Mrander/Mrander";
// import Mjiazai from "./components/Mjiazai/Mjiazai";
// import Mkklist from "./components/Mkklist/Mkklist";
// import Mfooter from "./components/Mfooter/Mfooter";
// import "./index.css";
// ReactDOM.render(
//   <div>
//     <Mheader />
//     <Mnav />
//     <Mnear />
//     <Mrander />
//     <Mkklist />
//     <Mjiazai />
//     <Mfooter />
//   </div>,
//   document.getElementById("root")
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "weui";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import Search from "./Pages/Search/Search";
import City from "./Pages/City/City";
import Ccon from "./Pages/Ccon/Ccon";
import Baidu from "./Pages/Baidu/Baidu";
import In from "./Pages/In/In";
// import Mind from "./Pages/Mind/Mind";
import My from "./Pages/My/My";
import Mune from "./Pages/Mune/Mune";
import { Provider } from "react-redux";
import store from "./stores/stores";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route path="/search" component={Search} />{" "}
        <Route path="/mune" component={Mune} />{" "}
        <Route path="/city" component={City} />{" "}
        <Route path="/ccon" component={Ccon} />{" "}
        <Route path="/my" component={My} />{" "}
        <Route path="/detail" component={Detail} />{" "}
        <Route path="/baidu" component={Baidu} />
        <Route path="/in" component={In} />
      </Switch>{" "}
    </Router>{" "}
  </Provider>,
  document.getElementById("root")
);
