import React from 'react'
import classNames from 'classnames'
import Check from './check'
import X from './x'

export default React.createClass({
  displayName: 'Toggle',

  propTypes: {
    checked: React.PropTypes.bool,
    defaultChecked: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    id: React.PropTypes.string,
    'aria-labelledby': React.PropTypes.string,
    'aria-label': React.PropTypes.string
  },

  getInitialState() {
    return {
      checked: !!this.props.checked,
      hasFocus: false
    }
  },

  handleClick(event) {
    var checkbox = this.refs.input.getDOMNode()
    var checkboxWasDirectlyClicked = event.target === checkbox
    if(checkboxWasDirectlyClicked) {
      return
    }
    event.preventDefault()
    checkbox.click()
    checkbox.focus()
  },

  handleFocus() {
    this.setState({hasFocus: true})
  },

  handleBlur() {
    this.setState({hasFocus: false})
  },

  isChecked() {
    if (this.props.checked != null) {
      return this.props.checked
    }
    if (this.refs.input) {
      return this.refs.input.getDOMNode().checked
    }
    return this.props.defaultChecked || false
  },

  render() {
    var classes = classNames('react-toggle', {
      'react-toggle--checked': this.isChecked(),
      'react-toggle--focus': this.state.hasFocus
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="react-toggle-track">
          <div className="react-toggle-track-check">
            <Check />
          </div>
          <div className="react-toggle-track-x">
            <X />
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
