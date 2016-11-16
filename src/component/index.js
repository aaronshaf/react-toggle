import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Check from './check'
import X from './x'
import shallowCompare from 'react-addons-shallow-compare'

export default class Toggle extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleFocus = this.setState.bind(this, { hasFocus: true }, () => {})
    this.handleBlur = this.setState.bind(this, { hasFocus: false }, () => {})
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false,
    }
  }

  componentWillReceiveProps (nextProps) {
    if ('checked' in nextProps) {
      this.setState({checked: !!nextProps.checked})
    }
  }

  handleClick (event) {
    const checkbox = this.input
    if (event.target !== checkbox) {
      event.preventDefault()
      checkbox.focus()
      checkbox.click()
      return
    }

    if (!('checked' in this.props)) {
      this.setState({checked: checkbox.checked})
    }
  }

  getIcon (type) {
    const { icons } = this.props
    if (!icons) {
      return null
    }
    return icons[type] === undefined
      ? Toggle.defaultProps.icons[type]
      : icons[type]
  }

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render () {
    const { className, icons: _icons, ...inputProps } = this.props
    const classes = classNames('react-toggle', {
      'react-toggle--checked': this.state.checked,
      'react-toggle--focus': this.state.hasFocus,
      'react-toggle--disabled': this.props.disabled,
    }, className)

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchEnd={this.handleClick}>
        <div className='react-toggle-track'>
          <div className='react-toggle-track-check'>
            {this.getIcon('checked')}
          </div>
          <div className='react-toggle-track-x'>
            {this.getIcon('unchecked')}
          </div>
        </div>
        <div className='react-toggle-thumb' />

        <input
          {...inputProps}
          ref={ref => { this.input = ref }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='react-toggle-screenreader-only'
          type='checkbox' />
      </div>
    )
  }
}

Toggle.displayName = 'Toggle'

Toggle.defaultProps = {
  icons: {
    checked: <Check />,
    unchecked: <X />,
  },
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-label': PropTypes.string,
  icons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      checked: PropTypes.node,
      unchecked: PropTypes.node,
    }),
  ]),
}
