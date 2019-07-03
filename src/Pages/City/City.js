import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./City.css";
class City extends React.Component {
  render() {
    return (
      <div className="_1qIl4KgV-idWsk9ACiSEp">
        <div className="nZ4Hob1iYhXlzNHASm--d">
          <div className="_3EYkMhSBuKfjb8ikjP1fjq">
            <div className="_1BcGavKuPAbVHXm_n6-FwO">
              <i className="_1lWWAUxTNg99eNliRTXtYy" />
              <Link
                to={{
                  pathname: "ccon"
                }}
                className="WUPT9ZBr7BLmEP6Jeimto _3VPT9rtFPqP_DPWptPX6am"
                // onClick={this.props.history.push("/ccon")}
              >
                广州市{" "}
              </Link>{" "}
              <div className="_3317qyhL2JOPDh7-pd2zTu">
                <i className="sJLgIkiquesUjXTqPE83Y" />
                <form className="_2KgtGwQKdnVd0OK_8RgojZ" action="#">
                  <input
                    type="search"
                    className="UNL6GwrOwfNvwpNTcVwyP"
                    placeholder="小区/街道/大厦/学校名称"
                  />
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="_3WwW2IhBMuG1i7lz1iNHu-">
            当前位置:{" "}
            <span className="_27GYyQ-2xq5SwUPXlcC4k2"> 长兴小学 </span>{" "}
            <span className="_1dcX3r9FW12u9AzQGxoBJX"> 重新定位 </span>{" "}
          </div>{" "}
          <div className="_6IANSkIBg3GaTtsOe_M29">
            <p className="_15eXFC7gENkrMjRkVbJ63B">
              <span className="_3ESa0iGG32yyDaNuXrG2m9" />
              我的收货地址{" "}
            </p>{" "}
            <ul className="_38oiPUMN-EdnpLgcQZ5YWy">
              <li className="_3uJH0_e3VZmCuSQXB1qCs0">
                <p className="_21gUGf6Q2R_0AFZKpYtb7-">
                  慧通产业园B9栋 3 楼前台{" "}
                </p>{" "}
                <p className="_21FVA7pIFLx4gQMc3jTG_Y">
                  <span className="_2UxWKOhpqNJPm-Xi1A6Eh4"> 谢先生 </span>{" "}
                  <span> 15989159942 </span>{" "}
                </p>{" "}
              </li>{" "}
              <li className="_3uJH0_e3VZmCuSQXB1qCs0">
                <p className="_21gUGf6Q2R_0AFZKpYtb7-">
                  光速网吧(赤岗横一街) 21 号机{" "}
                </p>{" "}
                <p className="_21FVA7pIFLx4gQMc3jTG_Y">
                  <span className="_2UxWKOhpqNJPm-Xi1A6Eh4"> 谢先生 </span>{" "}
                  <span> 15989159942 </span>{" "}
                </p>{" "}
              </li>{" "}
              <li className="_3uJH0_e3VZmCuSQXB1qCs0">
                <p className="_21gUGf6Q2R_0AFZKpYtb7-"> 南铁华庭 10 栋203房 </p>{" "}
                <p className="_21FVA7pIFLx4gQMc3jTG_Y">
                  <span className="_2UxWKOhpqNJPm-Xi1A6Eh4"> 谢嘉铭先生 </span>{" "}
                  <span> 15989159942 </span>{" "}
                </p>{" "}
              </li>{" "}
            </ul>{" "}
            <p className="_2UTnk9s18GUgy5c31JCmoJ _37_B18vCYago9Bh73YnQT0">
              展开全部地址{" "}
            </p>{" "}
          </div>{" "}
          <div className="_6IANSkIBg3GaTtsOe_M29">
            <p className="_3FD5obu4-P90ubtZKRdLC8">
              <i className="_2w8Hj0NKhbAIF4qoEnI2T1" />
              附近地址{" "}
            </p>{" "}
            <ul className="_38oiPUMN-EdnpLgcQZ5YWy">
              <li className="_2TsqerYAwHhq5a2tDoFXFR"> 冬初住地 </li>{" "}
              <li className="_2TsqerYAwHhq5a2tDoFXFR"> 长兴小学 </li>{" "}
              <li className="_2TsqerYAwHhq5a2tDoFXFR"> 一品公寓E </li>{" "}
              <li className="_2TsqerYAwHhq5a2tDoFXFR"> 天鹅花苑 </li>{" "}
              <li className="_2TsqerYAwHhq5a2tDoFXFR"> 嘉家托管 </li>{" "}
            </ul>{" "}
          </div>{" "}
          <div className="_2jKLuXNxtgNjELpnUC43uP">
            <div className="_1trp87Y4mWLUnRnJ55u6Pg">
              <i className="_3OJ9IxiDZ2DcNn_xkNUeDG" />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default withRouter(City);
