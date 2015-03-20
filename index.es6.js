import React from 'react'
import classNames from 'classnames'
import check from './check'
import x from './x'

export default React.createClass({
  displayName: 'Toggle',

  propTypes: {
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,
    value: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      checked: false
    }
  },

  getInitialState() {
    return {
      hasFocus: false
    }
  },

  handleClick(event) {
    var checkbox = this.refs.input.getDOMNode()
    if(event.target === checkbox) {
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

  render() {
    var classes = classNames('react-toggle', {
      'react-toggle--checked': this.props.checked,
      'react-toggle--focus': this.state.hasFocus
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        <div className="react-toggle-track">
          <div className="react-toggle-track-check" dangerouslySetInnerHTML={{__html: check}} />
          <div className="react-toggle-track-x" dangerouslySetInnerHTML={{__html: x}} />
        </div>
        <div className="react-toggle-thumb"></div>

        <input
          name={this.props.name}
          value={this.props.value}
          ref="input"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          defaultChecked={this.props.checked}
          className="screenreader-only"
          type="checkbox"
          onChange={this.props.onChange} />
      </div>
    )
  }
})
