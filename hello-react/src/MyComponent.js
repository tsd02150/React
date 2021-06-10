import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name,favoriteNumber, children }) => {
  // const {name,children} =props;
  return (
    <div>
      hello, my name is {name}.<br />
      children value is {children}.<br />
      제가 좋아하는 숫자는 {favoriteNumber}입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;
