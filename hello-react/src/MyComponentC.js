import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponentC extends Component {
  static defaultProps = {
    name: "기본 이름",
  };

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        hello, my name is {name}.<br />
        children value is {children}.<br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

export default MyComponentC;
