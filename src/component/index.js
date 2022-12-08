import React, { PureComponent } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Check from './check'
import X from './x'
import Loading from './loading'
import { pointerCoord } from './util'

export default class Toggle extends PureComponent {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.previouslyChecked = !!(props.checked || props.defaultChecked)
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false,
      loading: !!(props.loading || false),
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.checked !== this.props.checked) {
      // Disable linting rule here since this usage of setState inside
      // componentDidUpdate is OK; see
      // https://reactjs.org/docs/react-component.html#componentdidupdate
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ checked: !!this.props.checked })
    }
  }

  handleClick (event) {
    if (this.props.disabled) {
      return
    }
    const checkbox = this.input
    if (event.target !== checkbox && !this.moved) {
      this.previouslyChecked = checkbox.checked
      event.preventDefault()
      checkbox.focus()
      checkbox.click()
      return
    }

    const checked = this.props.hasOwnProperty('checked') ? this.props.checked : checkbox.checked

    this.setState({checked})
  }

  handleTouchStart (event) {
    if (this.props.disabled) {
      return
    }
    this.startX = pointerCoord(event).x
    this.activated = true
  }

  handleTouchMove (event) {
    if (!this.activated) return
    this.moved = true

    if (this.startX) {
      let currentX = pointerCoord(event).x
      if (this.state.checked && currentX + 15 < this.startX) {
        this.setState({ checked: false })
        this.startX = currentX
        this.activated = true
      } else if (currentX - 15 > this.startX) {
        this.setState({ checked: true })
        this.startX = currentX
        this.activated = (currentX < this.startX + 5)
      }
    }
  }

  handleTouchEnd (event) {
    if (!this.moved) return
    const checkbox = this.input
    event.preventDefault()

    if (this.startX) {
      let endX = pointerCoord(event).x
      if (this.previouslyChecked === true && this.startX + 4 > endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: false })
          this.previouslyChecked = this.state.checked
          checkbox.click()
        }
      } else if (this.startX - 4 < endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: true })
          this.previouslyChecked = this.state.checked
          checkbox.click()
        }
      }

      this.activated = false
      this.startX = null
      this.moved = false
    }
  }

  handleFocus (event) {
    const { onFocus } = this.props

    if (onFocus) {
      onFocus(event)
    }

    this.setState({ hasFocus: true })
  }

  handleBlur (event) {
    const { onBlur } = this.props

    if (onBlur) {
      onBlur(event)
    }

    this.setState({ hasFocus: false })
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

  render () {
    const { className, icons: _icons, ...inputProps } = this.props
    const classes = classNames('react-toggle', {
      'react-toggle--loading  react-toggle--default-cursor': this.state.loading,
      'react-toggle--checked': this.state.checked,
      'react-toggle--focus': this.state.hasFocus,
      'react-toggle--disabled': this.props.disabled,
    }, className)

    if (this.state.loading) {
      return (
        <div className={classes}>
          {this.getIcon('loading')}
        </div>
      )
    }

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}>
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
    loading: <Loading />,
  },
}

Toggle.propTypes = {
  loading: PropTypes.bool,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
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
      loading: PropTypes.node,
    }),
  ]),
}
