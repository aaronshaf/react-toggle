"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = React.createClass({
  displayName: "label.es6",

  render: function render() {
    return React.createElement(
      "div",
      { className: "react-toggle-track-label" },
      this.props.value
    );
  }
});
