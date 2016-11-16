import React from 'react'
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Toggle from '../src/component'
import { shallow } from 'enzyme'

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
})
