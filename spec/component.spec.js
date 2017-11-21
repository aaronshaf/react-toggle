import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Toggle from '../src/component'
import { mount } from 'enzyme'
import TestUtils from 'react-dom/test-utils'

const {
  findRenderedDOMComponentWithTag,
  findRenderedDOMComponentWithClass,
  findRenderedComponentWithType,
  scryRenderedDOMComponentsWithTag,
  Simulate,
} = TestUtils

const noop = () => {}

chai.use(chaiEnzyme())

describe('Component', () => {
  let wrapper

  it('sets state/input-value based on `checked`-prop', () => {
    wrapper = mount(
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

  it('defaults to the value of `defaultChecked`', () => {
    wrapper = mount(<Toggle defaultChecked={false} />)

    expect(wrapper.state('checked')).to.be.false
    expect(wrapper.find('input')).to.not.be.checked()

    wrapper = mount(<Toggle defaultChecked />)

    expect(wrapper.state('checked')).to.be.true
    expect(wrapper.find('input')).to.be.checked()
  })

  it('will hide icons if set false', () => {
    wrapper = mount(<Toggle icons={false} />)

    expect(wrapper.find('ToggleTrackCheck')).to.be.empty
    expect(wrapper.find('ToggleTrackX')).to.be.empty

    wrapper = mount(<Toggle />)

    expect(wrapper.find('ToggleTrackCheck')).to.not.be.empty
    expect(wrapper.find('ToggleTrackX')).to.not.be.empty
  })

  it('takes custom icons', () => {
    const checked = <div>checked</div>
    const unchecked = <div>unchecked</div>
    wrapper = mount(<Toggle icons={{ checked, unchecked }} />)

    expect(wrapper.find('ToggleTrackCheck')).to.be.contain(checked)
    expect(wrapper.find('ToggleTrackX')).to.be.contain(unchecked)
  })

  it('defaults to the regular icon if only one is supplied', () => {
    const checked = <div>checked</div>
    const unchecked = <div>unchecked</div>
    const { icons: defaults } = Toggle.defaultProps
    wrapper = mount(<Toggle icons={{ checked }} />)

    expect(wrapper.find('ToggleTrackCheck')).to.be.contain(checked)
    expect(wrapper.find('ToggleTrackX')).to.be.contain(defaults.unchecked)
    expect(defaults.unchecked).to.exist

    wrapper = mount(<Toggle icons={{ unchecked }} />)

    expect(wrapper.find('ToggleTrackCheck')).to.be.contain(defaults.checked)
    expect(wrapper.find('ToggleTrackX')).to.be.contain(unchecked)
    expect(defaults.checked).to.exist
  })

  it('does not render icon.un-/checked if null', () => {
    const element = <div>random</div>
    wrapper = mount(<Toggle icons={{ checked: element, unchecked: null }} />)

    expect(wrapper.find('ToggleTrackCheck')).to.be.contain(element)
    expect(wrapper.find('ToggleTrackX')).to.be.empty

    wrapper = mount(<Toggle icons={{ checked: null, unchecked: element }} />)

    expect(wrapper.find('ToggleTrackCheck')).to.be.empty
    expect(wrapper.find('ToggleTrackX')).to.be.contain(element)
  })

  it('tests toggle on click', () => {
    wrapper = mount(
      <Toggle
        onChange={noop} />
    )

    expect(wrapper.find('input')).to.not.be.checked()
    wrapper.find('Toggle').simulate('click')
    expect(wrapper.find('input')).to.be.checked()
    wrapper.find('Toggle').simulate('click')
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
    const input = findRenderedDOMComponentWithTag(wrapper.node, 'input')
    expect(called).to.equal(false)
    Simulate.change(input)
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
    const input = findRenderedDOMComponentWithTag(wrapper.node, 'input')
    expect(called).to.equal(false)
    Simulate.blur(input)
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
    const input = findRenderedDOMComponentWithTag(wrapper.node, 'input')
    expect(called).to.equal(false)
    Simulate.focus(input)
    expect(called).to.equal(true)
  })

  it('tests toggle on touch with default unchecked', () => {
    const wrapper = mount(
      <Toggle
        defaultChecked={false}
        onChange={noop} />
    )
    const toggleComp = scryRenderedDOMComponentsWithTag(wrapper.node, 'div')
    expect(wrapper.find('input')).to.not.be.checked()
    Simulate.touchStart(toggleComp[0], {changedTouches: [ {clientX: 30, clientY: 30} ]})
    Simulate.touchMove(toggleComp[0], {changedTouches: [ {clientX: 55, clientY: 30} ]})
    Simulate.touchEnd(toggleComp[0], {changedTouches: [ {clientX: 55, clientY: 30} ]})
    expect(wrapper.find('input')).to.be.checked()
  })

  it('tests toggle on touch with default checked', () => {
    const wrapper = mount(
      <Toggle
        defaultChecked
        onChange={noop} />
    )
    const toggleComp = scryRenderedDOMComponentsWithTag(wrapper.node, 'div')
    expect(wrapper.find('input')).to.be.checked()
    Simulate.touchStart(toggleComp[0], {changedTouches: [ {clientX: 55, clientY: 30} ]})
    Simulate.touchMove(toggleComp[0], {changedTouches: [ {clientX: 30, clientY: 30} ]})
    Simulate.touchEnd(toggleComp[0], {changedTouches: [ {clientX: 30, clientY: 30} ]})
    expect(wrapper.find('input')).to.not.be.checked()
  })

  it('tests toggle on touch with pageXY', () => {
    const wrapper = mount(
      <Toggle
        defaultChecked={false}
        onChange={noop} />
    )
    const toggleComp = scryRenderedDOMComponentsWithTag(wrapper.node, 'div')

    expect(wrapper.find('input')).to.not.be.checked()
    Simulate.touchStart(toggleComp[0], {changedTouches: [], pageX: 30, pageY: 30})
    Simulate.touchMove(toggleComp[0], {changedTouches: [], pageX: 55, pageY: 30})
    Simulate.touchEnd(toggleComp[0], {changedTouches: [], pageX: 55, pageY: 30})
    expect(wrapper.find('input')).to.be.checked()
    Simulate.touchStart(toggleComp[0], {changedTouches: [], pageX: 55, pageY: 30})
    Simulate.touchMove(toggleComp[0], {changedTouches: [], pageX: 30, pageY: 30})
    Simulate.touchEnd(toggleComp[0], {changedTouches: [], pageX: 30, pageY: 30})
    expect(wrapper.find('input')).to.not.be.checked()
  })
})
