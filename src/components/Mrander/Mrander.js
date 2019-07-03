import React from "react";
import "./Mrander.css";
class Mrander extends React.Component {
  state = {
    bool: 0,
    status: 0
  };
  render() {
    return (
      <div className="_1KjqV4W7A9sBbIZx9J-l7R">
        <div
          className={
            this.state.bool
              ? "_2ERaZOgKrKE21uYNISlvxw _2Byhc4wl6qAmYvE_1JA37- "
              : "__2ERaZOgKrKE21uYNISlvxw "
          }
          // className={
          //   this.state.staus
          //     ? "_2ERaZOgKrKE21uYNISlvxw _2Byhc4wl6qAmYvE_1JA37- _2g9wC42LKhP8Sn5y2homQa"
          //     : "__2ERaZOgKrKE21uYNISlvxw _2Byhc4wl6qAmYvE_1JA37-"
          // }
          style={{ top: this.state.bool ? "50px" : "" }}
        >
          <div className="_22YSgYsVZZ33WpdC5csPhH">
            <ul className="CpTpAqo273nQXSG__3F68">
              <li
                onClick={this.toTop.bind(this)}
                className="_3E-rqFFoOgqpMgyxWrzStr"
              >
                综合排序
                <i className="_1vwBiUqoRa0l1lOafmns1x" />
              </li>
              <li className="_3E-rqFFoOgqpMgyxWrzStr">销量最高</li>
              <li className="_3E-rqFFoOgqpMgyxWrzStr">距离最近</li>
              <li className="_3E-rqFFoOgqpMgyxWrzStr">
                筛选
                <i className="_1zw9qO_fPmPD7jcUtNfUJT" />
              </li>
            </ul>
          </div>
          <div className="_2MeKe8f8Z3IcJZOkZXaPz7">
            <ul
              style={{
                display: this.state.bool && this.state.status ? "block" : "none"
              }}
            >
              <li className="_1g-6dUNjgoWSWgG91RLv16 _5S60IKZn_Q8WgeY10_49B">
                综合排序
              </li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">速度最快</li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">评分最高</li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">起送价最低</li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">配送费最低</li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">人均高到低</li>
              <li className="_1g-6dUNjgoWSWgG91RLv16">人均低到高</li>
            </ul>
          </div>
        </div>
        <div
          className={
            this.state.status
              ? "_3LftIJg2zEw2F3jr4vZbMn _3cP1WzXlRrmq6fRBK6GZ3"
              : "_3LftIJg2zEw2F3jr4vZbMn"
          }
          onClick={this.toTop.bind(this)}
        />
      </div>
    );
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 100) {
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
  toTop() {
    window.scrollTo(0, 200);
    if (this.state.status == 0) {
      this.setState({
        status: !0
      });
    } else {
      this.setState({
        status: 0
      });
    }
  }

  componentWillUnmount() {
    // 卸载异步操作设置状态
    clearTimeout(this.timeouter);
    this.setState = (state, callback) => {
      return;
    };
  }
}
export default Mrander;
