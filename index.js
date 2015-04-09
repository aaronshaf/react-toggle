"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var classNames = _interopRequire(require("classnames"));

var Check = _interopRequire(require("./check"));

var X = _interopRequire(require("./x"));

module.exports = React.createClass({
  displayName: "Toggle",

  propTypes: {
    checked: React.PropTypes.bool,
    defaultChecked: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    id: React.PropTypes.string,
    "aria-labelledby": React.PropTypes.string,
    "aria-label": React.PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      hasFocus: false
    };
  },

  handleClick: function handleClick(event) {
    var checkbox = this.refs.input.getDOMNode();
    var checkboxWasDirectlyClicked = event.target === checkbox;
    if (checkboxWasDirectlyClicked) {
      return;
    }
    event.preventDefault();
    checkbox.click();
    checkbox.focus();
  },

  handleFocus: function handleFocus() {
    this.setState({ hasFocus: true });
  },

  handleBlur: function handleBlur() {
    this.setState({ hasFocus: false });
  },

  isChecked: function isChecked() {
    if (this.props.checked != null) {
      return this.props.checked;
    }
    if (this.refs.input) {
      return this.refs.input.getDOMNode().checked;
    }
    return this.props.defaultChecked || false;
  },

  render: function render() {
    var classes = classNames("react-toggle", {
      "react-toggle--checked": this.isChecked(),
      "react-toggle--focus": this.state.hasFocus
    });

    return React.createElement(
      "div",
      { className: classes, onClick: this.handleClick },
      React.createElement(
        "div",
        { className: "react-toggle-track" },
        React.createElement(
          "div",
          { className: "react-toggle-track-check" },
          React.createElement(Check, null)
        ),
        React.createElement(
          "div",
          { className: "react-toggle-track-x" },
          React.createElement(X, null)
        )
      ),
      React.createElement("div", { className: "react-toggle-thumb" }),
      React.createElement("input", _extends({
        ref: "input",
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        className: "react-toggle-screenreader-only",
        type: "checkbox"
      }, this.props))
    );
  }
});
