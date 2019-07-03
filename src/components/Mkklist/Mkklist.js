import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading/Loading";
import "./Mkklist.css";
class Mkklist extends React.Component {
  state = {
    news: [],
    loadingStatus: "show",
    page: 1
  };

  render() {
    return (
      <div
        className="_3uTnjGaICQR0QQJ0b-Nk8k _2yCMxFCzKcIRQuCBS1XZ_k"
        ref="onPullUp"
      >
        <div className="_3XRWZqdyupCVEnwa2XBFGr homeshoplist">
          <ul ref="list" className="_2db1e1m154ODnjL1-ivQvq">
            {this.state.news.map((item, index) => {
              return (
                <Link
                  to={{
                    pathname: "/detail",
                    search: `?${item.mtWmPoiId}`
                  }}
                  key={item.mtWmPoiId}
                  data-watch="991524449078060"
                >
                  <div
                    className="FcKg0z7ZA3tlZo-vSxopN"
                    role="logo"
                    aria-label="尊宝比萨（柯木塱店）"
                  >
                    <div
                      className="_2q5HWkq__CHgEQLE76bhCF"
                      role="logo"
                      aria-label="尊宝比萨（柯木塱店）"
                    >
                      <img
                        src="http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png"
                        alt="icon"
                        className="_3f5at3Y6MnNFz0hFltS3GS"
                      />
                      <div>
                        <div className="_2igkDNMjpxxIgHzE1Ptqyk lazyimage-holder">
                          <img
                            src={item.picUrl}
                            alt="icon"
                            className="lazyimage-img"
                            style={{ height: "57px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="_2L_M6YlchG3yfnSSg7L6mL">
                      <div className="_3ce4X4pC6NTjqy4_fKHA8E">
                        {item.shopName}
                      </div>
                      <div className="_21yyPg0MxIEFMCg8RnTeUo">
                        <div>
                          <div className="D11MX3M-SDa4TXs8lmgHq">
                            <i className="_1ukqM-8qHp61SdF68btTCh" />
                            <i className="_1ukqM-8qHp61SdF68btTCh" />
                            <i className="_1ukqM-8qHp61SdF68btTCh" />
                            <i className="_1ukqM-8qHp61SdF68btTCh" />
                            <i className="_1ukqM-8qHp61SdF68btTCh" />
                          </div>
                          <span className="_34MB4leIjAhG3LXl-DN8Ed _19QQt5prXpFQr9QhCVfwC5">
                            {item.wmPoiScore / 10}
                          </span>
                          <span className="_1V9_Khfd3oEDl7_xSgGuGL _34MB4leIjAhG3LXl-DN8Ed mtsi-num">
                            {item.monthSalesTip}
                          </span>
                        </div>
                        <div className="_20HnNmr2Skt7lyGyrsg5R7">
                          <span className="_34MB4leIjAhG3LXl-DN8Ed mtsi-num">
                            {item.deliveryTimeTip}
                          </span>
                          <span className="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num">
                            {item.distance}
                          </span>
                        </div>
                      </div>
                      <div className="_1wRyOmTit2wxvwxcfx4tf1">
                        <span className="_34MB4leIjAhG3LXl-DN8Ed mtsi-num">
                          {item.minPriceTip}
                        </span>
                        <span className="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num">
                          {item.shippingFeeTip}
                        </span>
                        <span className="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num">
                          {item.averagePriceTip}
                        </span>
                      </div>
                      <div className="_2t-V7ElqTaDS-PIn3jWR_X">
                        <span className="_2kkldfTxIX9haSW1LXDlCS" />
                        <p className="_3ykJaIHGFSdjdQuChaUN6z">
                          <img
                            src="http://p0.meituan.net/activityconfig/6087b33fd42d14fd94e899084aaef56d1720.png"
                            alt="activity icon"
                            className="_1vvO5ZUocEXs-aSvyWfhGT"
                          />
                          <span className="_34MB4leIjAhG3LXl-DN8Ed mtsi-num">
                            满30减17;满44减20;满55减30
                          </span>
                        </p>
                        <p className="_3ykJaIHGFSdjdQuChaUN6z">
                          <img
                            src="http://p0.meituan.net/activityconfig/3da2d9c7a4ddf89e4e71cfdfff168c391088.png"
                            alt="activity icon"
                            className="_1vvO5ZUocEXs-aSvyWfhGT"
                          />
                          <span className="_34MB4leIjAhG3LXl-DN8Ed mtsi-num">
                            折扣商品4.6折起
                          </span>
                        </p>
                        <p className="_3ykJaIHGFSdjdQuChaUN6z">
                          <img
                            src="http://p0.meituan.net/xianfu/476ba65ee80b6385bab292c085baed17940.png"
                            alt="activity icon"
                            className="_1vvO5ZUocEXs-aSvyWfhGT"
                          />
                          <span className="_34MB4leIjAhG3LXl-DN8Ed mtsi-num">
                            本店支持开发票，开票金额50元起
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
        <div
          className="_2DWI5MQavfzP27kRciy2ia"
          style={{
            display:
              this.state.loadingStatus === "show" ||
              this.state.news.length >= 48
                ? "none"
                : "block"
          }}
          // onClick={this.loadMore.bind(this)}
        >
          <div className="_33vevPA4wCUHDSyh8YgZyS" />
          <span> 点击加载</span>{" "}
        </div>
        <Loading status={this.state.loadingStatus} />
      </div>
    );
  }

  componentWillMount() {
    this.loadMore();
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    // 卸载异步操作设置状态
    window.removeEventListener("scroll", this.onScroll);
  }
  onScroll = () => {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    let onPullUpHeight = this.refs.onPullUp.clientHeight;
    let documentHeight = document.documentElement.clientHeight;
    let documentTop = window.scrollY;
    // console.log(scrollTop, onPullUpHeight, documentHeight, documentTop);
    if (
      onPullUpHeight > documentHeight &&
      onPullUpHeight === documentHeight + documentTop - 323
    ) {
      this.loadMore();
    } else {
      this.setState({
        loadingStatus: "hide"
      });
    }
  };
  async loadMore() {
    this.setState({
      //请求数据之前显示菊花
      loadingStatus: "show"
    });
    const news = (await axios.get(
      "https://www.easy-mock.com/mock/5cf660b4c51c246c3655bf97/example/shoplist",
      {
        params: {
          page: this.state.page,
          limit: 10
        }
      }
    )).data.data.shopList;

    console.log(news);
    this.setState({
      // page: ++this.state.page,
      news: [...this.state.news, ...news],
      //在获取合并渲染后隐藏
      loadingStatus: "hide"
    });
  }
  shouldComponentUpdate() {
    if (this.state.news.length >= 48) {
      return false;
    } else {
      return true;
    }
  }
}
export default withRouter(Mkklist);
