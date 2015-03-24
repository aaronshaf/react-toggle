"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var classNames = _interopRequire(require("classnames"));

var Check = _interopRequire(require("./check"));

var X = _interopRequire(require("./x"));

module.exports = React.createClass({
  displayName: "Toggle",

  propTypes: {
    defaultChecked: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    id: React.PropTypes.string,
    "aria-labelledby": React.PropTypes.string,
    "aria-label": React.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      checked: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      checked: !!this.props.checked,
      hasFocus: false
    };
  },

  handleClick: function handleClick(event) {
    var checkbox = this.refs.input.getDOMNode();
    var checkboxWasDirectlyClicked = event.target === checkbox;
    this.setState({ checked: checkbox.checked });
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

  render: function render() {
    var classes = classNames("react-toggle", {
      "react-toggle--checked": this.state.checked,
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
      React.createElement("input", {
        name: this.props.name,
        value: this.props.value,
        ref: "input",
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        defaultChecked: this.props.defaultChecked,
        className: "react-toggle-screenreader-only",
        type: "checkbox",
        id: this.props.id,
        "aria-labelledby": this.props["aria-labelledby"],
        "aria-label": this.props["aria-label"],
        onChange: this.props.onChange })
    );
  }
});
