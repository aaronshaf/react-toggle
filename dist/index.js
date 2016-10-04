'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _check = require('./check');

var _check2 = _interopRequireDefault(_check);

var _x = require('./x');

var _x2 = _interopRequireDefault(_x);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  mixins: [_reactAddonsPureRenderMixin2.default],

  displayName: 'Toggle',

  propTypes: {
    checked: _react2.default.PropTypes.bool,
    defaultChecked: _react2.default.PropTypes.bool,
    onChange: _react2.default.PropTypes.func,
    name: _react2.default.PropTypes.string,
    value: _react2.default.PropTypes.string,
    id: _react2.default.PropTypes.string,
    'aria-labelledby': _react2.default.PropTypes.string,
    'aria-label': _react2.default.PropTypes.string
  },

  getInitialState: function getInitialState() {
    var checked = false;
    if ('checked' in this.props) {
      checked = this.props.checked;
    } else if ('defaultChecked' in this.props) {
      checked = this.props.defaultChecked;
    }
    return {
      checked: !!checked,
      hasFocus: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({ checked: !!nextProps.checked });
    }
  },
  handleClick: function handleClick(event) {
    var checkbox = this.input;
    if (event.target !== checkbox) {
      event.preventDefault();
      checkbox.focus();
      checkbox.click();
      return;
    }

    if (!('checked' in this.props)) {
      this.setState({ checked: checkbox.checked });
    }
  },
  handleFocus: function handleFocus() {
    this.setState({ hasFocus: true });
  },
  handleBlur: function handleBlur() {
    this.setState({ hasFocus: false });
  },
  render: function render() {
    var _this = this;

    var classes = (0, _classnames2.default)('react-toggle', {
      'react-toggle--checked': this.state.checked,
      'react-toggle--focus': this.state.hasFocus,
      'react-toggle--disabled': this.props.disabled
    });

    return _react2.default.createElement(
      'div',
      { className: classes, onClick: this.handleClick },
      _react2.default.createElement(
        'div',
        { className: 'react-toggle-track' },
        _react2.default.createElement(
          'div',
          { className: 'react-toggle-track-check' },
          _react2.default.createElement(_check2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'react-toggle-track-x' },
          _react2.default.createElement(_x2.default, null)
        )
      ),
      _react2.default.createElement('div', { className: 'react-toggle-thumb' }),
      _react2.default.createElement('input', _extends({
        ref: function ref(_ref) {
          _this.input = _ref;
        },
        onFocus: this.handleFocus,
        onBlur: this.handleBlur,
        className: 'react-toggle-screenreader-only',
        type: 'checkbox'
      }, this.props))
    );
  }
});