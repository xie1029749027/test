import React from "react";
import { withRouter } from "react-router-dom";
import Swiper from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.min.css";
import "./Detail.css";
class Detail extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  state = {
    img: [
      {
        imgUrl: (
          <div className="_2Z4jTu2a_hkjxbm24gv-_o">
            <i className="_3C4qZtRRbheePWqEpL_O6g" />
            <span className="mzAo1pwhdvUTYLU4A0esQ mtsi-num">全场7折</span>
          </div>
        )
      },
      {
        imgUrl: (
          <div className="_2Z4jTu2a_hkjxbm24gv-_o">
            <i
              className="_3C4qZtRRbheePWqEpL_O6g"
              style={{
                backgroundImage:
                  'url("http://p0.meituan.net/activityconfig/6087b33fd42d14fd94e899084aaef56d1720.png")'
              }}
            />
            <span className="mzAo1pwhdvUTYLU4A0esQ mtsi-num">
              满11减10;满22减20;满33减30;满100减99
            </span>
          </div>
        )
      },
      {
        imgUrl: (
          <div className="_2Z4jTu2a_hkjxbm24gv-_o">
            <i
              className="_3C4qZtRRbheePWqEpL_O6g"
              style={{
                backgroundImage:
                  'url("http://p0.meituan.net/activityconfig/3da2d9c7a4ddf89e4e71cfdfff168c391088.png")'
              }}
            />
            <span className="mzAo1pwhdvUTYLU4A0esQ mtsi-num">
              折扣商品2.11折起
            </span>
          </div>
        )
      },
      {
        imgUrl: (
          <div className="_2Z4jTu2a_hkjxbm24gv-_o">
            <i className="_3C4qZtRRbheePWqEpL_O6g" />
            <span className="mzAo1pwhdvUTYLU4A0esQ mtsi-num">
              领1元券;领11元券;领11元券
            </span>
          </div>
        )
      },
      {
        imgUrl: (
          <div className="_2Z4jTu2a_hkjxbm24gv-_o">
            <i className="_3C4qZtRRbheePWqEpL_O6g" />
            <span className="mzAo1pwhdvUTYLU4A0esQ mtsi-num">
              实际支付99元返100元商家代金券
            </span>
          </div>
        )
      }
    ]
  };
  render() {
    return (
      <div>
        <article className="_2yYukVveqxEFBxd0M0gnmD" id="app-index">
          <div className="_3WE8PmVbYoLUmnbjJ-SQdI" id="scrollArea">
            <div style={{ width: "100%", height: "50px" }}>
              <div style={{ backgroundColor: "rgb(46, 47, 59)" }}>
                <div className="uO9whxUfHiWRiV6G5GBiA tm2-Xe5MgkhKl7jd09lo-">
                  <i className="Ew1X4LyRc6w1Ybtp768N" />
                </div>
              </div>
            </div>
            <div className="_3h8xKVp9r7mCfuV8O28WAf _1FUEIuTmCD7ZKPiIzKhosw">
              <div className="_1ck8NPszwLtbvdi1zgtnsi">
                <div
                  className="_2Kc8upDqBO243gm67avsrp"
                  style={{
                    backgroundImage:
                      'url("http://p1.meituan.net/business/52f74a51ac15a51667ca4e27559969fc879265.png")'
                  }}
                />
                <div className="JsG8MW9_90BkVXgOSrxvc _2K48TVUYRJ5WN26kTHNl4p">
                  <div className="_3mL1A3TZ3PIprRg5h3rq-H">
                    <div className="_3tJpS-1wYBHZ_b5Uth9D7v">
                      <span className="_2dwTOCpbwvPWTYSRsslP4r mtsi-num">
                        60分钟
                      </span>
                      <span className="mtsi-num">999m</span>
                    </div>
                    <div className="_1N_pfyj54lzMMJfu5ouZSg">
                      公告“千秋便当屋”为全国首创日式便当连锁品牌，全国门店多达百余家，商务合作、加盟咨询：400-888-3480；qqbdw2018
                    </div>
                  </div>
                  <div className="_3ra9lMxDPMYaiENg-Moofm">
                    <div className="_1FOhsqGjXxJUMkeCGahTPy">
                      {
                        <div className="swiper-container">
                          <div className="swiper-wrapper ">
                            {this.state.img.map((item, index) => {
                              return (
                                <div
                                  key={index}
                                  className="om-NUuOIQFk41I5WF3m17 swiper-slide"
                                >
                                  {item.imgUrl}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="_3_v5L5O7Zac2VFevnq17-E">
              <nav className="_14MxSDDBYeqAnNkk_Lwpoh">
                <div className="IiWiPrv1VaLWrLy0UEr3o _4soezJrIen7Uhi0qgs6ow">
                  点菜
                  <span
                    className="_3VAjqMUHmMqVW9lXGFrAYd"
                    style={{
                      transform: "translateX(0%)",
                      transitionTimingFunction: "ease-in"
                    }}
                  />
                </div>
                <div className="IiWiPrv1VaLWrLy0UEr3o">评价</div>
                <div className="IiWiPrv1VaLWrLy0UEr3o">商家</div>
              </nav>
              <div className="_1t1LUHCJw3bOrM-k-HvHV-">
                <div
                  className="_347vUMR0jKx6LIMqSnxIZw"
                  style={{ transform: "translateX(0%)" }}
                >
                  "
                  <div
                    className="_1-oeOrSdxQIXx4Nkzl1TZJ"
                    style={{ height: "auto" }}
                  >
                    <nav className="_3OYFUP0452-IPTllxQK4JW">
                      <a className="_2KKUls9ji-UDVHN7-6RES5 _1PDYAsHxteqQZZniln0Uzm active">
                        <div
                          data-tag="cate"
                          className="_3piQHat6dshDdfDiRY01jt O00vYfQPw-jLlj-YwsaK9"
                        >
                          <span className="_2I764cXkt6QSZ69HubwTbh">
                            <img
                              src="http://p1.meituan.net/aichequan/87f966955f693102d67daf2ec44b58411361.png"
                              className="_3m9EoApawrVcE5Phesjshg"
                            />
                            热销
                          </span>
                        </div>
                      </a>
                    </nav>
                    <div className="_2WX0avh-NMdw3M5gvsCHxJ">
                      <div
                        className="_3ZoM88aoYaJ-xWhfWE82w8"
                        style={{ top: "0px", display: "block" }}
                      >
                        热销
                      </div>
                      <dd
                        data-tag="spu"
                        className="_-2M8Z7qsyhtHyRJZrn130 undefined"
                      >
                        <div className="_1gWqoZjOHOfn2Hjs4Mc-Z4">
                          <img
                            src="http://p1.meituan.net/wmproduct/0629188ac2426ccf4d88a13f6bb41c48384342.jpg"
                            alt=""
                            className="JxWjALDzA2pA_A72LwnJc"
                          />
                        </div>
                        <div className="_3dXPbHSlB9Dx8NF-fGKFni">
                          <div className="_1Yj8iPRKbDdlQlpXVll4m5">
                            <div className="_3d62XhmxqZ2aqaKNGiIIj1">
                              日式照烧鸡扒定食（两份起售哦）
                            </div>
                            <div className="hbN2y_Sdekf5nEgB72jmC">
                              新鲜蔬菜水果+特色配菜+精选照烧鸡扒+特选米饭
                            </div>
                            <div className="_2_qYSM-p2_3BQi11YF_OD1">
                              <span className="mtsi-num">月售9999</span>
                              <span className="mtsi-num">赞8</span>
                            </div>
                            <div
                              data-tag="price"
                              className="_1kHefsZpC_WqkU7aDm77Ix"
                            >
                              <div className="_3rE20XmTwcUpTaMs1iEU06">
                                <span className="_1NCGkfhtvlFcFVnrhG614C">
                                  ¥
                                </span>
                                14.9
                              </div>
                              <div className="_1W48OExr-k2whjJwNO0MWP">29</div>
                            </div>
                            <div className="_3qaHKVo6wZKtqjz07TtEZh _2o2sqx6siJJTTsKSzlTCu_">
                              <span className="_pniWG7WglTiHR-vZEVyd">
                                <button
                                  className="_2-aL0qCEXtBABf_qJzGbmm _3ZldkObt0bY4MgYPQs2U9H"
                                  aria-label="加入购物车"
                                  aria-haspopup="false"
                                />
                              </span>
                            </div>
                          </div>
                          <div className="_2T5aGK_TgujkpCI76KXkDK">
                            <div className="_1h_qkp0rFEYj5kUDzfLltf">
                              <span className="_33e40z_j-jYiqsvdJJGKlR">
                                5.14折 2份起购
                              </span>
                            </div>
                          </div>
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
  componentDidMount() {
    new Swiper(".swiper-container", {
      direction: "vertical", // （垂直：vertical）
      loop: true, // 循环模式选项
      autoplay: {
        //滑动后继续播放（不写官方默认暂停）
        disableOnInteraction: false
      },
      // 如果需要分页器
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true //修改swiper的父元素时，自动初始化swiper
    });
  }
}
export default withRouter(Detail);
