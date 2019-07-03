import React from "react";
import { withRouter } from "react-router-dom";
import "./Mheader.css";
class Mheader extends React.Component {
  state = {
    bool: 0
  };
  render() {
    return (
      <div className="_2m6ykQWMTX3_dW7Ab-XsY8">
        <div
          className={
            this.state.bool
              ? "_1JHn9KhcnvNrar1crXmTIk _350JA45HCnWxLcngmBwzjl"
              : " _1JHn9KhcnvNrar1crXmTIk"
          }
          onClick={() => {
            this.props.history.push("/city");
          }}
        >
          <div className="XojVIq9qzHwkS-H5hJLWh"> 凤凰园区天河软件园 </div>{" "}
        </div>{" "}
        <div
          className="_1GdfNwKnUZUXB2ckSYH1m8"
          onClick={() => {
            this.props.history.push("/search");
          }}
        >
          <input disabled="" readOnly="" placeholder="请输入商家或商品名称" />
        </div>{" "}
      </div>
    );
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 150) {
        this.setState({
          bool: true
        });
      } else {
        this.setState({
          bool: false
        });
      }
    });
  }
  componentWillUnmount() {
    // 卸载异步操作设置状态
    clearTimeout(this.timeouter);
    this.setState = (state, callback) => {
      return;
    };
  }
}
export default withRouter(Mheader);
