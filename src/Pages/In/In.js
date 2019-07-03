import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./In.css";
class In extends React.Component {
  state = {
    search1: [],
    fit: this.props.match.params.name
  };
  filterNews2(arr, searchInputText) {
    console.log(arr);
    return arr
      .filter(item => {
        if (item.shopName.indexOf(searchInputText) > -1) {
          return item;
        }
      })
      .map((item, index) => {
        return (
          <ul key={index} className="_1CYiFfKvFMfHu4uovts_l5">
            <li className="qWPdOrqhAr3u8ozJYxSNh">
              <div className="_VP0HXLwJ84Yel0b8EXDx">
                <div
                  className="_1ySAjTXG3ePwxTmfpJ5vsz"
                  style={{
                    backgroundImage: "url(" + item.picUrl + ")"
                  }}
                />
                <div>
                  <div className="_15aj_maOL7NRGsAAJRTd9y">{item.shopName}</div>
                  <div className="zkEr4wKEeJqvCqSJGGnjk">
                    <div className="UtYFChJ3DEoKPc7J3iXvp">
                      <div className="_2I_mtLToEGTKEiQbl9D8sD mtsi-num">
                        {item.monthSalesTip}
                      </div>
                      <div className="_2I_mtLToEGTKEiQbl9D8sD mtsi-num">
                        {item.minPriceTip}
                      </div>
                      <div className="_2I_mtLToEGTKEiQbl9D8sD mtsi-num">
                        {item.shippingFeeTip}
                      </div>
                    </div>
                  </div>
                  <div className="_27NArkzPON2En1qNQ8lHK3">
                    <span className="_3ub_xlXMT90yHxG4VPDDrk mtsi-num">
                      {item.deliveryTimeTip}
                    </span>
                    <span className="mtsi-num">{item.distance}</span>
                  </div>
                  <div className="_3j4WgWglyHW8MBmlMkeCLr">
                    <ul className="_2JMFaFsoyyoEsV1b5JwCRi">
                      <li className="xZnL2c9bKL97GaWuys5Uw clazz_985043344018021_0">
                        <span style={{ color: "rgb(251, 78, 68)" }}>25减8</span>
                      </li>
                      <li className="xZnL2c9bKL97GaWuys5Uw clazz_985043344018021_1">
                        <span style={{ color: "rgb(251, 78, 68)" }}>
                          35减10
                        </span>
                      </li>
                      <li className="xZnL2c9bKL97GaWuys5Uw clazz_985043344018021_2">
                        <span style={{ color: "rgb(251, 78, 68)" }}>
                          50减15
                        </span>
                      </li>
                      <li className="xZnL2c9bKL97GaWuys5Uw clazz_985043344018021_3">
                        <span style={{ color: "rgb(251, 78, 68)" }}>
                          75减20
                        </span>
                      </li>
                      <li className="xZnL2c9bKL97GaWuys5Uw clazz_985043344018021_4">
                        <span style={{ color: "rgb(251, 78, 68)" }}>
                          100减28
                        </span>
                      </li>
                      <li className="xZnL2c9bKL97GaWuys5Uw clazz_985043344018021_5">
                        <span style={{ color: "rgb(251, 78, 68)" }}>
                          6.25折起
                        </span>
                      </li>
                      <li className="xZnL2c9bKL97GaWuys5Uw clazz_985043344018021_6">
                        <span style={{ color: "rgb(251, 78, 68)" }}>
                          支持自取
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="_1fWIfZu0aAnOPBad6_hiv7">
                    <div>
                      <ul className="_3ZiddNbETS1nQexD_Iep5V">
                        <li className="W4QuM7lwv0lrP35rj1itm">
                          <div className="_2Lqco_PYM35WKk45tRwVJr">
                            <div
                              className="_2IflYxFKtVLn-1TMuy93U-"
                              style={{
                                backgroundImage:
                                  'url("http://p1.meituan.net/wmproduct/30b678b10b8a9f17cb1b748feef79a1d685069.jpg@126w_126h_1e_1c")'
                              }}
                            />
                            <div>
                              <div className="Z5FTjXxnONnWQ3Eb8fSkM">
                                珍珠奶茶
                              </div>
                              <div className="_1WpmfqgjdF3-Aa7_rIPXh-">
                                <span className="_1cWYcA-7lGxttPPuLRhUUw mtsi-num">
                                  月售312
                                </span>
                                <span className="_2uRBVflfMYoM8AZZsq64Dw mtsi-num">
                                  赞1
                                </span>
                              </div>
                              <div className="DG1Urxicx3LccoZvUoEDi">
                                <span className="_1OQmRR0GHV-BSFSAoky4J1">
                                  ¥&nbsp;13
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="W4QuM7lwv0lrP35rj1itm">
                          <div className="_2Lqco_PYM35WKk45tRwVJr">
                            <div
                              className="_2IflYxFKtVLn-1TMuy93U-"
                              style={{
                                backgroundImage:
                                  'url("http://p0.meituan.net/wmproduct/35b375ce09f60f4ac1c56314838c3eb3940557.jpg@126w_126h_1e_1c")'
                              }}
                            />

                            <div>
                              <div className="Z5FTjXxnONnWQ3Eb8fSkM">
                                波霸奶茶（大）
                              </div>
                              <div className="_1WpmfqgjdF3-Aa7_rIPXh-">
                                <span className="_1cWYcA-7lGxttPPuLRhUUw mtsi-num">
                                  月售199
                                </span>
                                <span className="_2uRBVflfMYoM8AZZsq64Dw mtsi-num">
                                  赞5
                                </span>
                              </div>
                              <div className="DG1Urxicx3LccoZvUoEDi">
                                <span className="_1OQmRR0GHV-BSFSAoky4J1">
                                  ¥&nbsp;16
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="_31rMMwr0aOQhwS_XRnL06C">
                        <span className="_33k3pC5F7JkfMb1Q3tBJMu">
                          展开其他4个商品
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        );
      });
  }
  render() {
    console.log(this);
    return (
      <div>
        <header className="_1CPb-WzU8yZXbIty31AEi8">
          <div className="_rix8EYFtfu6BvdWHkEGM">
            <input
              type="text"
              className="_3adpwLAdLDcYXSZI1Vf1qr"
              defaultValue={this.props.searchInputText}
            />
          </div>
          <a
            className="_1qMEb5C7VlB2svXedCPRmh"
            href="javascript:window.history.back();"
          >
            取消
          </a>
        </header>
        <div className="LcxK7fPHkPr-L_AYxeI7-">
          <div>
            {this.filterNews2(this.state.search1, this.props.searchInputText)}
            <div className="_10ouYrS2-nrQJxrrJ8s_Xf" />
          </div>
        </div>
      </div>
    );
  }
  componentWillMount() {
    this.qingqiu();
  }
  async qingqiu() {
    const search1 = (await axios.get(
      "https://www.easy-mock.com/mock/5cf660b4c51c246c3655bf97/example/shoplist"
    )).data.data.shopList;

    console.log(search1);
    this.setState({
      search1: [...this.state.search1, ...search1]
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
}

export default connect(state => {
  return state;
})(In);
