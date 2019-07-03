import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Mfooter.css";
import { connect } from "react-redux";
class Mfooter extends React.Component {
  //遍历仓库的存值
  render() {
    return (
      <div className="_3jvb2nTFcJZaKfGT3jLO-N">
        <div className="_2_zO9X158TTb_XBigSBXaa">
          {" "}
          {this.props.footers.map((item, index) => {
            return (
              <Link
                key={index}
                to={{
                  pathname: item.url
                }}
                className={
                  index === this.props.tab
                    ? "vhHLSLSvFKDyfNbVNtOGV _1XFdFVvdIV2Kk5DvkemeIS"
                    : "vhHLSLSvFKDyfNbVNtOGV"
                }
              >
                <div className={item.icon} />{" "}
                <div className="_2q_OgZBvsix_vxRGtxelUo"> {item.title} </div>{" "}
              </Link>
            );
          })}{" "}
        </div>{" "}
      </div>
    );
  }
}
//升级成高级组件，并且可用仓库和路由
export default withRouter(
  connect(state => {
    return state;
  })(Mfooter)
);
