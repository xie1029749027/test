import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Search.css";
class Search extends React.Component {
  state = {
    searchInputText: "",
    search: [],
    hotList: [
      "烧烤",
      "粥",
      "店",
      "点点香",
      "龙虾",
      "王胖烧烤",
      "乡村基",
      "茶",
      "锅",
      "宜宾",
      "肯德基",
      "华莱士",
      "麦当劳",
      "鳄鱼肉"
    ]
  };
  filterNews1(arr, searchInputText) {
    return arr
      .filter(item => {
        if (item.shopName.indexOf(searchInputText) > -1) {
          return item;
        }
      })
      .map((item, index) => {
        return (
          <li key={index} className="qk_Os-HiqK4-eUiFigrFu">
            <div className="_3JNvwQuZM6Tz2CjsZhtZ2T _3qPDuaSfkmAwoSkKEIc7Yv">
              <i className="_21M8VZqfGH4HjAXYjcdtfH" />
              <span className="Y4IsO2i6jwQS-5aWs-OCZ">
                <strong>{item.shopName}</strong>
              </span>
            </div>
          </li>
        );
      });
  }
  render() {
    console.log(this);
    return (
      <div className="_2AX-0KIke_hi9xczRAvQHE">
        <div style={{ width: "100%", height: "50px" }}>
          <div
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              position: "fixed",
              width: "100%",
              zIndex: "1000"
            }}
          >
            <div className="uO9whxUfHiWRiV6G5GBiA tm2-Xe5MgkhKl7jd09lo-">
              <i
                className="Ew1X4LyRc6w1Ybtp768N _1xYBF7VbiJPjnsXdvS9Sw3"
                onClick={() => {
                  this.props.history.push("/");
                }}
              />
              <div>
                <div
                  className="_2hnjuTZDqLPTm_PSybunpO"
                  style={{ padding: "18px 0px" }}
                >
                  <div className="_25c3pW7gqBC1E-obW7ILRj">搜索页</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="_1Viz1mHQBJTZC4LNRbACBr">
          <div className="MledJ7PgcHJrGk3HqztQ6">
            <form className="_2hjN8YEXvUlBjZpbgiB8pW">
              <input
                type="text"
                placeholder="请输入商家或商品名称"
                className="_2dKIhWcVoK6dKmAsuB2ilE"
                ref="input"
                value={this.state.searchInputText}
                onChange={this.getInputValue.bind(this)}
              />
              <span className="_3OmedCRCknKzWOgR5ljiKF" />
            </form>
          </div>
          <i
            className="GYeczk8gsrSrgBGyZp8Wk nGpU9BLTYLmEcgByFKB6X"
            onClick={this.searchClear.bind(this)}
          />
          <Link
            to={{
              pathname: "/in",
              search: `?name=${this.state.searchInputText}`
            }}
            className="_1XvjUOPMjzQ0GChHyalouv"
          >
            搜索
          </Link>
        </div>
        <ul
          className="_1zGXHLaBXgaBbiVFuaSauS"
          style={{ display: this.state.searchInputText ? "block" : "none" }}
        >
          {this.filterNews1(this.state.search, this.props.searchInputText)}
        </ul>
        <div
          className="_3cINVluqHj6tCTNiKRF1iN"
          style={{ display: this.state.searchInputText ? "none" : "block" }}
        >
          <nav className="_2sfI29f85VTfXX91JT2Cu1">热门搜索</nav>
          <section className="_1OkBHtjTymSCVcNtCceay9">
            {this.state.hotList.map((item, index) => {
              return (
                <Link
                  to={{
                    pathname: "/in",
                    search: `?name=${this.state.searchInputText}`
                  }}
                  href="javascript:;"
                  className="_3btjiM1xrniZzfprwVfwT-"
                  key={index}
                  onClick={this.add.bind(this)}
                >
                  {item}
                </Link>
              );
            })}
          </section>
        </div>
        <div
          className="_2jh-GWIDQu0AL9LO6wNZ5L"
          style={{ display: this.state.searchInputText ? "none" : "block" }}
        >
          <nav className="_206R4t_-PeSw2bXsejYUHu">
            历史搜索
            <span className="zJMUxgYuD6h5g_9SAoP9X" />
          </nav>
          <div className="oYyQ00rZdXndU0VNpAMhe">
            {this.props.sousuo.map((item, index) => {
              return (
                <a
                  key={index}
                  href="javascript:;"
                  className="Setzgy6lNmmWKJEGaDBYD"
                >
                  <i className="_1ggM-3Mxi7_wDfrFhgPwwR" />
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  componentWillMount() {
    this.qingqiu();
  //   const searchInputText  = this.state.searchInputText
  //   console.log(searchInputText)
  //   if (sessionStorage.getItem(tab)) {
  //     const news = JSON.parse(sessionStorage.getItem(tab))
  //     this.setState({
  //         search
  //     })
  // } else {
  //     // 否则发请求，并把数据加进缓存里面
  //     this.loadMore(tab);
  // }
  }
  add(e) {
    console.log(e.target.innerText);
    let searchInputText = e.target.innerText;
    this.props.dispatch({
      type: "GETINPUTVALUE",
      searchInputText
    });
    this.setState({
      searchInputText
    });
  }
  async qingqiu() {
    const search = (await axios.get(
      "https://www.easy-mock.com/mock/5cf660b4c51c246c3655bf97/example/shoplist"
    )).data.data.shopList;
    // sessionStorage.setItem(, JSON.stringify([...this.state.news, ...news]))
    console.log(search);
    this.setState({
      search: [...this.state.search, ...search]
    });
  }
  getInputValue(e) {
    console.log(e.target.value);
    let searchInputText = e.target.value;
    this.props.dispatch({
      type: "GETINPUTVALUE",
      searchInputText
    });
    this.setState({
      searchInputText
    });
  }
  searchClear() {
    this.refs.input.focus();
    this.setState({
      searchInputText: ""
    });
  }
}
export default connect(state => {
  return state;
})(Search);
