import React from 'react'
import classNames from 'classnames'
import Check from './check'
import X from './x'

export default React.createClass({
  displayName: 'Toggle',

  propTypes: {
    defaultChecked: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    id: React.PropTypes.string,
    'aria-labelledby': React.PropTypes.string,
    'aria-label': React.PropTypes.string
  },

  getDefaultProps() {
    return {
      checked: false
    }
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
    this.setState({checked: checkbox.checked})
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

  render() {
    var classes = classNames('react-toggle', {
      'react-toggle--checked': this.state.checked,
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
          name={this.props.name}
          value={this.props.value}
          ref="input"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          defaultChecked={this.props.defaultChecked}
          className="react-toggle-screenreader-only"
          type="checkbox"
          id={this.props.id}
          aria-labelledby={this.props['aria-labelledby']}
          aria-label={this.props['aria-label']}
          onChange={this.props.onChange} />
      </div>
    )
  }
})
