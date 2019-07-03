import React from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Ccon.css";
class Ccon extends React.Component {
  state = {
    citys: [],
    searchInputText1: ""
  };
  filterNews(arr, searchInputText) {
    return arr.map((item, index) => {
      return (
        <div id={item.idx} key={index} className="_6IANSkIBg3GaTtsOe_M29">
          <p className="_2n1hqzrsKVFRov5kp9hPGe">{item.idx}</p>
          <ul className="_38oiPUMN-EdnpLgcQZ5YWy">
            <li className="_3NNz8-W9KmqdehqJ-nM6dG">
              {item.cities
                .filter(item => {
                  if (item.city_name.indexOf(searchInputText) > -1) {
                    return item;
                  }
                })
                .map((item1, index) => {
                  return <p key={index}>{item1.city_name}</p>;
                })}
            </li>
          </ul>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="_17pc-TXhx6XzEm1r0tLptz">
        <div className="_3j370YN5Ay_-KcXXKE1_dg">
          <i className="_36ALI_BnPijgSZcrmuTbPm" />
          <div className="WXOWNMERZZk13xiCcqPB3">
            <form className="_3oQ6i1l6-2ttyFDFRSvTs" action="#">
              <input
                type="search"
                placeholder="城市中文名或拼音"
                value={this.state.searchInputText1}
                onChange={this.getInputValue1.bind(this)}
              />
            </form>
          </div>
          <Link
            className="SuZsSJdPBtdNlPXS02JX9"
            to={{
              pathname: "/"
            }}
          >
            取消
          </Link>
        </div>
        <div
          className="_2QAqvIjYOnDuIj2QvMhZ1D"
          id="cityListContainer"
          style={{ height: "667px" }}
        >
          <div className="vyGX7Q-D0dZwZxwQ45IU7">
            <span className="X0W6Uk5rjDTYda2JnPKIl">#</span>

            {this.state.citys.map((item, index) => {
              return (
                <a
                  key={index}
                  className="xlX4CuQieD9C_hxJKl6xM active"
                  onClick={() => this.scrollToAnchor(item.idx)}
                >
                  {item.idx}
                </a>
              );
            })}
          </div>
          <div className="_3AUdpkonFmrMYlegAMIPEC">
            <div className="aVjgZMvT5jfVOXFY-Ph6p">
              <i className="_1AS5otinZ9yWmGwqMzyOeP" />
              当前定位城市
              <span className="_3UJDSt6hWPrS0ifmwsJJAZ">广州市</span>
            </div>
            <div className="_1zXiVA85XEdITTZNgeE9IO">
              <p className="_1mdEDCmDO-ziD0ZrOOv4I4">热门城市</p>
              <div className="_24j9ZhsYw6YM5cEh1HM71h">
                <span className="_3b44uLE9LUwfHRlNJT-B7N">北京</span>
                <span className="_3b44uLE9LUwfHRlNJT-B7N">上海</span>
                <span className="_3b44uLE9LUwfHRlNJT-B7N">广州</span>
                <span className="_3b44uLE9LUwfHRlNJT-B7N">深圳</span>
                <span className="_3b44uLE9LUwfHRlNJT-B7N">成都</span>
                <span className="_3b44uLE9LUwfHRlNJT-B7N">杭州</span>
                <span className="_3b44uLE9LUwfHRlNJT-B7N">南京</span>
                <span className="_3b44uLE9LUwfHRlNJT-B7N">苏州</span>
                <span className="_3b44uLE9LUwfHRlNJT-B7N">重庆</span>
                <span className="_3b44uLE9LUwfHRlNJT-B7N">天津</span>
                <span className="_3b44uLE9LUwfHRlNJT-B7N">武汉</span>
                <span className="_3b44uLE9LUwfHRlNJT-B7N">西安</span>
              </div>
            </div>
            <div className="_1duSmk2VSzxfnY-8Pa_hSe">
              {this.filterNews(this.state.citys, this.props.searchInputText1)}
            </div>
          </div>

          <div className="ljqeVP47kMtYJpkjGfMqm" />
        </div>
      </div>
    );
  }
  componentWillMount() {
    this.loadCity();
  }

  async loadCity() {
    this.setState({
      //请求数据之前显示菊花
      loadingStatus: "show"
    });
    const citys = (await axios.get(
      "https://www.easy-mock.com/mock/5cf660b4c51c246c3655bf97/example/cconlist"
    )).data.data.city_nav;

    console.log(citys);
    this.setState({
      // page: ++this.state.page,
      citys: [...this.state.citys, ...citys],
      //在获取合并渲染后隐藏
      loadingStatus: "hide"
    });
  }
  getInputValue1(e) {
    console.log(e.target.value);
    let searchInputText1 = e.target.value;
    this.props.dispatch({
      type: "GETINPUTVALUE1",
      searchInputText1
    });
    this.setState({
      searchInputText1
    });
  }
  getValue(e) {
    console.log(e.target.value);
  }
  scrollToAnchor = anchorName => {
    if (anchorName) {
      // 找到锚点
      let anchorElement = document.getElementById(anchorName);
      // 如果对应id的锚点存在，就跳转到锚点
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };
}
export default withRouter(
  connect(state => {
    return state;
  })(Ccon)
);
