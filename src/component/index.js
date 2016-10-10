import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import Check from './check'
import X from './x'
import shallowCompare from 'react-addons-shallow-compare'

export default class Toggle extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleFocus = this.setState.bind(this, { hasFocus: true })
    this.handleBlur = this.setState.bind(this, { hasFocus: false })
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false
    }
  }

  componentWillReceiveProps (nextProps) {
    if ('checked' in nextProps) {
      this.setState({checked: !!nextProps.checked})
    }
  }

  handleClick (event) {
    var checkbox = this.input
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

  shouldComponentUpdate (nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render () {
    const {toggleRenderer, disabled, ...otherProps} = this.props;
    const {checked, hasFocus} = this.state;
    const inputProps = {...otherProps, disabled};
    const classes = classNames('react-toggle', {
      'react-toggle--checked': checked,
      'react-toggle--focus': hasFocus,
      'react-toggle--disabled': disabled
    })

    return (
      <div className={classes} onClick={this.handleClick}>
        {toggleRenderer({checked, disabled, hasFocus})}
        <input
          ref={ref => { this.input = ref }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='react-toggle-screenreader-only'
          type='checkbox'
          {...inputProps} />
      </div>
    )
  }
}

Toggle.displayName = 'Toggle'

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  toggleRenderer: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-label': PropTypes.string
}

Toggle.defaultProps = {
  toggleRenderer: () => {
    return (
      <div>
        <div className='react-toggle-track'>
          <div className='react-toggle-track-check'>
            <Check />
          </div>
          <div className='react-toggle-track-x'>
            <X />
          </div>
        </div>
        <div className='react-toggle-thumb' />
      </div>
    );
  }
}
