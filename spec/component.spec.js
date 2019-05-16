import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Toggle from '../src/component'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const noop = () => {}
const classNames = {
  base: 'react-toggle',
  focus: 'react-toggle--focus',
  checked: 'react-toggle--checked',
  disabled: 'react-toggle--disabled',
}

chai.use(chaiEnzyme())

describe('Component', () => {
  let wrapper
  const className = 'foobar'

  it('sets state/input-value based on `checked`-prop', () => {
    wrapper = shallow(
      <Toggle
        onChange={noop}
        checked={false} />
    )

    expect(wrapper.state('checked')).to.be.false
    expect(wrapper.find('input')).to.not.be.checked()

    wrapper.setProps({ checked: true })

    expect(wrapper.state('checked')).to.be.true
    expect(wrapper.find('input')).to.be.checked()
  })

  it('accepts a className as a prop', () => {
    wrapper = shallow(<Toggle className={className} />)

    expect(wrapper.hasClass(className)).to.be.true
  })

  it('does not pass the custom className to the checkbox', () => {
    wrapper = shallow(<Toggle className={className} />)

    expect(wrapper.find('input').hasClass(className)).to.be.false
  })

  it('defaults to the value of `defaultChecked`', () => {
    wrapper = shallow(<Toggle defaultChecked={false} />)

    expect(wrapper.state('checked')).to.be.false
    expect(wrapper.find('input')).to.not.be.checked()

    wrapper = shallow(<Toggle defaultChecked />)

    expect(wrapper.state('checked')).to.be.true
    expect(wrapper.find('input')).to.be.checked()
  })

  it('will hide icons if set false', () => {
    wrapper = shallow(<Toggle icons={false} />)

    expect(wrapper.find('.react-toggle-track-check')).to.be.empty
    expect(wrapper.find('.react-toggle-track-x')).to.be.empty

    wrapper = shallow(<Toggle />)

    expect(wrapper.find('.react-toggle-track-check')).to.not.be.empty
    expect(wrapper.find('.react-toggle-track-x')).to.not.be.empty
  })

  it('takes custom icons', () => {
    const checked = <div>checked</div>
    const unchecked = <div>unchecked</div>
    wrapper = shallow(<Toggle icons={{ checked, unchecked }} />)

    expect(wrapper.find('.react-toggle-track-check')).to.be.contain(checked)
    expect(wrapper.find('.react-toggle-track-x')).to.be.contain(unchecked)
  })

  it('defaults to the regular icon if only one is supplied', () => {
    const checked = <div>checked</div>
    const unchecked = <div>unchecked</div>
    const { icons: defaults } = Toggle.defaultProps
    wrapper = shallow(<Toggle icons={{ checked }} />)

    expect(wrapper.find('.react-toggle-track-check')).to.be.contain(checked)
    expect(wrapper.find('.react-toggle-track-x')).to.be.contain(defaults.unchecked)
    expect(defaults.unchecked).to.exist

    wrapper = shallow(<Toggle icons={{ unchecked }} />)

    expect(wrapper.find('.react-toggle-track-check')).to.be.contain(defaults.checked)
    expect(wrapper.find('.react-toggle-track-x')).to.be.contain(unchecked)
    expect(defaults.checked).to.exist
  })

  it('does not render icon.un-/checked if null', () => {
    const element = <div>random</div>
    wrapper = shallow(<Toggle icons={{ checked: element, unchecked: null }} />)

    expect(wrapper.find('.react-toggle-track-check')).to.be.contain(element)
    expect(wrapper.find('.react-toggle-track-x')).to.be.empty

    wrapper = shallow(<Toggle icons={{ checked: null, unchecked: element }} />)

    expect(wrapper.find('.react-toggle-track-check')).to.be.empty
    expect(wrapper.find('.react-toggle-track-x')).to.be.contain(element)
  })

  it('uses correct classNames based on state', () => {
    wrapper = shallow(<Toggle />)

    wrapper.setState({ checked: false, hasFocus: false })
    expect(wrapper.hasClass(classNames.base)).to.be.true
    expect(wrapper.hasClass(classNames.focus)).to.be.false
    expect(wrapper.hasClass(classNames.checked)).to.be.false
    expect(wrapper.hasClass(classNames.disabled)).to.be.false

    wrapper.setState({ checked: true, hasFocus: false })
    expect(wrapper.hasClass(classNames.base)).to.be.true
    expect(wrapper.hasClass(classNames.focus)).to.be.false
    expect(wrapper.hasClass(classNames.checked)).to.be.true
    expect(wrapper.hasClass(classNames.disabled)).to.be.false

    wrapper.setState({ checked: false, hasFocus: true })
    expect(wrapper.hasClass(classNames.base)).to.be.true
    expect(wrapper.hasClass(classNames.focus)).to.be.true
    expect(wrapper.hasClass(classNames.checked)).to.be.false
    expect(wrapper.hasClass(classNames.disabled)).to.be.false

    wrapper.setState({ checked: true, hasFocus: true })
    expect(wrapper.hasClass(classNames.base)).to.be.true
    expect(wrapper.hasClass(classNames.focus)).to.be.true
    expect(wrapper.hasClass(classNames.checked)).to.be.true
    expect(wrapper.hasClass(classNames.disabled)).to.be.false
  })

  it('tests toggle on click', () => {
    wrapper = mount(
      <Toggle
        onChange={noop} />
    )

    expect(wrapper.find('input')).to.not.be.checked()
    wrapper.find('.react-toggle').simulate('click')
    expect(wrapper.find('input')).to.be.checked()
    wrapper.find('.react-toggle').simulate('click')
    expect(wrapper.find('input')).to.not.be.checked()
  })

  it('tests onChange callback', () => {
    let called = false
    const changeHandler = () => {
      called = true
      return
    }
    wrapper = mount(
      <Toggle
        onChange={changeHandler} />
    )
    const input = wrapper.find('input')
    expect(called).to.equal(false)
    input.simulate('change')
    expect(called).to.equal(true)
  })

  it('tests onBlur callback', () => {
    let called = false
    const blurHandler = () => {
      called = true
      return
    }
    const wrapper = mount(
      <Toggle
        onChange={noop}
        onBlur={blurHandler} />
    )

    const input = wrapper.find('input')
    expect(called).to.equal(false)
    input.simulate('blur')
    expect(called).to.equal(true)
  })

  it('tests onFocus callback', () => {
    let called = false
    const focusHandler = () => {
      called = true
      return
    }
    const wrapper = mount(
      <Toggle
        onChange={noop}
        onFocus={focusHandler} />
    )

    const input = wrapper.find('input')
    expect(called).to.equal(false)
    input.simulate('focus')
    expect(called).to.equal(true)
  })

  it('tests toggle on touch with default unchecked', () => {
    const wrapper = mount(
      <Toggle
        defaultChecked={false}
        onChange={noop} />
    )
    const toggleComp = wrapper.find('.react-toggle')
    expect(wrapper.find('input')).to.not.be.checked()
    toggleComp.simulate('touchStart', {changedTouches: [ {clientX: 30, clientY: 30} ]})
    toggleComp.simulate('touchMove', {changedTouches: [ {clientX: 55, clientY: 30} ]})
    toggleComp.simulate('touchEnd', {changedTouches: [ {clientX: 55, clientY: 30} ]})

    expect(wrapper.find('input')).to.be.checked()
  })

  it('tests toggle on touch with default checked', () => {
    const wrapper = mount(
      <Toggle
        defaultChecked
        onChange={noop} />
    )

    const toggleComp = wrapper.find('.react-toggle')
    expect(wrapper.find('input')).to.be.checked()
    toggleComp.simulate('touchStart', {changedTouches: [ {clientX: 55, clientY: 30} ]})
    toggleComp.simulate('touchMove', {changedTouches: [ {clientX: 30, clientY: 30} ]})
    toggleComp.simulate('touchEnd', {changedTouches: [ {clientX: 30, clientY: 30} ]})
    expect(wrapper.find('input')).to.not.be.checked()
  })

  it('tests toggle on touch with pageXY', () => {
    const wrapper = mount(
      <Toggle
        defaultChecked={false}
        onChange={noop} />
    )
    const toggleComp = wrapper.find('.react-toggle')
    expect(wrapper.find('input')).to.not.be.checked()
    toggleComp.simulate('touchStart', {changedTouches: [], pageX: 30, pageY: 30})
    toggleComp.simulate('touchMove', {changedTouches: [], pageX: 55, pageY: 30})
    toggleComp.simulate('touchEnd', {changedTouches: [], pageX: 55, pageY: 30})
    expect(wrapper.find('input')).to.be.checked()
    toggleComp.simulate('touchStart', {changedTouches: [], pageX: 55, pageY: 30})
    toggleComp.simulate('touchMove', {changedTouches: [], pageX: 30, pageY: 30})
    toggleComp.simulate('touchEnd', {changedTouches: [], pageX: 30, pageY: 30})
    expect(wrapper.find('input')).to.not.be.checked()
  })
})
