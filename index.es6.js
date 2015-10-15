import React from 'react'
import classNames from 'classnames'
import Check from './check'
import X from './x'
import {addons} from 'react/addons'

var PureRenderMixin = addons.PureRenderMixin;

export default React.createClass({
  mixins: [PureRenderMixin],

  displayName: 'Toggle',

  propTypes: {
    checked: React.PropTypes.bool,
    defaultChecked: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    id: React.PropTypes.string,
    width: React.PropTypes.string,
    checkedValue: React.PropTypes.string,
    uncheckedValue: React.PropTypes.string,
    'aria-labelledby': React.PropTypes.string,
    'aria-label': React.PropTypes.string
  },

  getInitialState() {
    var checked = false;
    if ('checked' in this.props) {
      checked = this.props.checked
    } else if ('defaultChecked' in this.props) {
      checked = this.props.defaultChecked
    }
    return {
      checked: !!checked,
      hasFocus: false
    }
  },

  componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({checked: !!nextProps.checked})
    }
  },

  handleClick(event) {
    var checkbox = React.findDOMNode(this.refs.input)
    if (event.target !== checkbox)
    {
      event.preventDefault()
      checkbox.focus()
      checkbox.click()
      return
    }

    if (!('checked' in this.props)) {
      this.setState({checked: checkbox.checked})
    }
  },

  handleFocus() {
    this.setState({hasFocus: true})
  },

  handleBlur() {
    this.setState({hasFocus: false})
  },

  render() {
    var classes = classNames('react-toggle', {
      'react-toggle--checked': this.state.checked,
      'react-toggle--focus': this.state.hasFocus,
      'react-toggle--disabled': this.props.disabled
    })

    var style = this.props.width ?
      {width: this.props.width} :
      null;

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="react-toggle-track" style={style}>
          <div className="react-toggle-track-check">
            {this.props.checkedValue ? <div>{this.props.checkedValue}</div> : <Check />}
          </div>
          <div className="react-toggle-track-x">
            {this.props.uncheckedValue ? <div>{this.props.uncheckedValue}</div> : <X />}
          </div>
        </div>
        <div className="react-toggle-thumb"></div>

        <input
          ref="input"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className="react-toggle-screenreader-only"
          type="checkbox"
          {...this.props} />
      </div>
    )
  }
})
