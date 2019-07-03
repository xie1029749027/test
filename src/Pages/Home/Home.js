import React, { Component } from "react";
import "./Home.css";
import Mheader from "../../components/Mheader/Mheader";
import Mnav from "../../components/Mnav/Mnav";
import Mnear from "../../components/Mnear/Mnear";
import Mrander from "../../components/Mrander/Mrander";
import Mkklist from "../../components/Mkklist/Mkklist";
import Mjiazai from "../../components/Mjiazai/Mjiazai";
import Mfooter from "../../components/Mfooter/Mfooter";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Mheader />
        <Mnav />
        <Mnear />
        <Mrander />
        <Mkklist />
        <Mfooter tab={0} />
      </div>
    );
  }
}
