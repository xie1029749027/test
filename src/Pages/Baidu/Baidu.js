import React, { Component } from "react";
import ReactDom from "react-dom";
import fetchJsonp from "fetch-jsonp";
import "./Baidu.css";

export default class Baidu extends Component {
  constructor() {
    super();
    this.state = {
      ipt: "",
      arr: []
    };
    this.iptChange = this.iptChange.bind(this);
    this.fnOver = this.fnOver.bind(this);
    this.fnOut = this.fnOut.bind(this);
  }
  iptChange(ev) {
    this.setState({
      ipt: ev.target.value
    });
    let URL = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="; //或者将请求放在this.setState的回调函数里。即：this.setState(,()=>{...在这里请求数据就可以直接使用this.state.ipt了...})；

    // 切记，是URL+ev.target.value而非this.state.ipt↓因为setState（｛｝）是一个异步过程。
    fetchJsonp(URL + ev.target.value, { jsonpCallback: "cb" }).then(
      streamObj => {
        streamObj.json().then(data => {
          // console.log(data)
          this.setState({
            arr: data.s
          });
        });
      }
    );
  }
  fnOver(ev) {
    ev.target.className = "hover";
  }
  fnOut(ev) {
    ev.target.className = "";
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.ipt1} onChange={this.iptChange} />
        百度
        <ul>
          {this.state.arr.map((val, index) => {
            return (
              <li key={index} onMouseOver={this.fnOver} onMouseOut={this.fnOut}>
                {val}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
