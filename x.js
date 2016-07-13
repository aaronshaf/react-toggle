"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

module.exports = React.createClass({
  displayName: "x.es6",

  render: function render() {
    return React.createElement(
      "svg",
      { width: "10", height: "10", viewBox: "0 0 10 10" },
      React.createElement(
        "title",
        null,
        "switch-x"
      ),
      React.createElement("path", { d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12", fill: "#fff", fillRule: "evenodd" })
    );
  }
});
