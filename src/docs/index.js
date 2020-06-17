import React, { Component } from 'react'
import { render } from 'react-dom'

import Toggle from '../component'
// In your code this would be:
// import Toggle from 'react-toggle'

import '../../style.css'
import './style.css'

const Heart = () => (
  <div
    style={{
      color: '#fff',
      fontSize: '1.2em',
      position: 'absolute',
      top: '0.4em',
    }}
  >
    ❤
  </div>
)

class App extends Component {
  constructor (props) {
    super(props)
    this.handleMilkChange = this.handleMilkChange.bind(this)
    this.handleResetProps = this.handleResetProps.bind(this)
    this.handleSoupChange = this.handleChange.bind(this, 'soupIsReady')
    this.handleTofuChange = this.handleChange.bind(this, 'tofuIsReady')
    this.handleEggsChange = this.handleChange.bind(this, 'eggsAreReady')
    this.handleBaconChange = this.handleChange.bind(this, 'baconIsReady')
    this.handleToastChange = this.handleChange.bind(this, 'toastIsReady')
    this.handleCheeseChange = this.handleChange.bind(this, 'cheeseIsReady')
    this.handleBiscuitChange = this.handleChange.bind(this, 'biscuitIsReady')
    this.handleBurritoChange = this.handleChange.bind(this, 'burritoIsReady')
    this.handleAubergineChange = this.handleChange.bind(
      this,
      'aubergineIsReady'
    )

    this.state = {
      aubergineIsReady: true,
      checkedOverride: false,
      cheeseIsReady: false,
      baconIsReady: false,
      biscuitIsReady: false,
      milkIsReady: false,
      eggsAreReady: false,
      soupIsReady: true,
      tofuIsReady: false,
      burritoIsReady: false,
      toastIsReady: false,
      formData: {},
    }
  }

  handleResetProps () {
    this.setState({ checkedOverride: !this.state.checkedOverride })
  }

  handleChange (key, event) {
    this.setState({ [key]: event.target.checked })
  }

  handleMilkChange () {
    const form = this.refs.breakfastForm
    this.setState({
      formData: form.milkIsReady.checked
        ? { milkIsReady: form.milkIsReady.value }
        : {},
    })
  }

  render () {
    return (
      <form ref='breakfastForm'>
        <h1>react-toggle</h1>

        {/* Installation */}

        <div className='example'>
          <div>Installation</div>
          <pre>{`npm install react-toggle --save`}</pre>
          <pre>{`import Toggle from 'react-toggle'`}</pre>
          <p>Or if you're not using the ES6 module format yet:</p>
          <pre>{`var Toggle = require('react-toggle')`}</pre>
          <p>
            Include the component's{' '}
            <a href='https://raw.githubusercontent.com/instructure-react/react-toggle/master/style.css'>
              CSS
            </a>
            .
          </p>
        </div>

        {/* Bacon */}

        <div className='example'>
          <label>
            <Toggle
              checked={this.state.checkedOverride}
              defaultChecked={this.state.baconIsReady}
              onChange={this.handleBaconChange}
            />
            <span className='label-text'>Wrapper label tag</span>
          </label>

          <pre>
            {`<label>
  <Toggle
    defaultChecked={this.state.baconIsReady}
    onChange={this.handleBaconChange} />
  <span>Wrapper label tag</span>
</label>`}
          </pre>
          <pre>
            this.state.baconIsReady: {JSON.stringify(this.state.baconIsReady)}
          </pre>
        </div>

        {/* Cheese */}

        <div className='example'>
          <Toggle
            id='cheese-status'
            defaultChecked={this.state.cheeseIsReady}
            onChange={this.handleCheeseChange}
          />
          <label htmlFor='cheese-status'>Adjacent label tag</label>

          <pre>
            {`<Toggle
  id='cheese-status'
  defaultChecked={this.state.cheeseIsReady}
  onChange={this.handleCheeseChange} />
<label htmlFor='cheese-status'>Adjacent label tag</label>`}
          </pre>
          <pre>
            this.state.cheeseIsReady: {JSON.stringify(this.state.cheeseIsReady)}
          </pre>
        </div>

        {/* Biscuit */}

        <div className='example'>
          <Toggle
            id='biscuit-status'
            defaultChecked={this.state.biscuitIsReady}
            aria-labelledby='biscuit-label'
            onChange={this.handleBiscuitChange}
          />
          <span id='biscuit-label' className='label-text'>
            Adjacent label, but not standard tag
          </span>

          <pre>
            {`<Toggle
  id='biscuit-status'
  defaultChecked={this.state.biscuitIsReady}
  aria-labelledby='biscuit-label'
  onChange={this.handleBiscuitChange} />
<span id='biscuit-label'>Adjacent label, but not standard tag</span>`}
          </pre>
          <pre>
            this.state.biscuitIsReady:{' '}
            {JSON.stringify(this.state.biscuitIsReady)}
          </pre>
        </div>

        {/* Eggs */}

        <div className='example'>
          <Toggle
            defaultChecked={this.state.eggsAreReady}
            aria-label='No label'
            onChange={this.handleEggsChange}
          />
          <span className='label-text'>No label tag</span>
          <pre>
            {`<Toggle
  defaultChecked={this.state.eggsAreReady}
  aria-label='No label tag'
  onChange={this.handleEggsChange} />
<span>No label tag</span>`}
          </pre>
          <pre>
            this.state.eggsAreReady: {JSON.stringify(this.state.eggsAreReady)}
          </pre>
        </div>

        {/* Handle change */}

        <div className='example'>
          <div>Handle change</div>
          <pre>
            {`handleChange(event) {
  // do something with event.target.checked
}`}
          </pre>
        </div>

        {/* Using form data */}

        <div className='example'>
          <label>
            <Toggle
              defaultChecked={!!this.state.milkIsReady}
              name='milkIsReady'
              value='yes'
              onChange={this.handleMilkChange}
            />
            <span className='label-text'>Using form data</span>
          </label>

          <pre>
            {`<Toggle
  defaultChecked={this.state.milkIsReady}
  name='milkIsReady'
  value='yes' />`}
          </pre>
          <pre>formData: {JSON.stringify(this.state.formData)}</pre>
        </div>

        {/* Controlled Component */}

        <div className='example'>
          <label>
            <input
              type='checkbox'
              checked={this.state.burritoIsReady}
              name='burritoIsReady2'
              onChange={this.handleBurritoChange}
            />
            <span className='label-text'> Controlled Component</span>
          </label>

          <pre>
            {`<Toggle
  checked={this.state.burritoIsReady}
  name='burritoIsReady'
  value='yes'
  onChange={this.handleBurritoChange}/>`}
          </pre>

          <Toggle
            checked={this.state.burritoIsReady}
            name='burritoIsReady'
            value='yes'
            onChange={this.handleBurritoChange}
          />
        </div>

        {/* Controlled Component without onChange */}

        <div className='example'>
          <label>
            <input
              type='checkbox'
              checked={this.state.toastIsReady}
              name='toastIsReady2'
              onChange={this.handleToastChange}
            />
            <span className='label-text'>
              {' '}
              Controlled Component without onChange
            </span>
          </label>

          <pre>
            {`<Toggle
  checked={this.state.toastIsReady}
  name='toastIsReady'
  value='yes' />`}
          </pre>

          <Toggle
            checked={this.state.toastIsReady}
            name='toastIsReady'
            value='yes'
          />
        </div>

        {/* Disabled */}

        <div className='example'>
          <div style={{ marginBottom: '8px' }}>
            <label>
              <Toggle defaultChecked={false} disabled />
              <span className='label-text'>Disabled, Unchecked</span>
            </label>
          </div>

          <div>
            <label>
              <Toggle defaultChecked disabled />
              <span className='label-text'>Disabled, Checked</span>
            </label>
          </div>

          <pre>
            {`<label>
  <Toggle
    defaultChecked={false}
    disabled={true} />
  <span className='label-text'>Disabled, Unchecked</span>
</label>
<label>
  <Toggle
    defaultChecked={true}
    disabled={true} />
  <span className='label-text'>Disabled, Checked</span>
</label>`}
          </pre>
        </div>

        {/* Custom className */}

        <div className='example'>
          <label>
            <Toggle
              defaultChecked={this.state.aubergineIsReady}
              className='custom-classname'
              onChange={this.handleAubergineChange}
            />
            <span className='label-text'>Custom className</span>
          </label>

          <pre>
            {`<label>
  <Toggle
    defaultChecked={this.state.aubergineIsReady}
    className='custom-classname'
    onChange={this.handleAubergineChange} />
  <span>Custom className</span>
</label>`}
          </pre>
          <pre>
            {`.custom-classname.react-toggle--checked .react-toggle-track {
  background-color: #ab199f;
}`}
          </pre>
        </div>

        {/* Custom icons */}

        <div className='example'>
          <label>
            <Toggle
              defaultChecked={this.state.soupIsReady}
              icons={{
                checked: <Heart />,
                unchecked: null,
              }}
              onChange={this.handleSoupChange}
            />
            <span className='label-text'>Custom icons</span>
          </label>

          <pre>
            {`<label>
  <Toggle
    defaultChecked={this.state.soupIsReady}
    icons={{
      checked: <Heart />,
      unchecked: null,
    }}
    onChange={this.handleSoupChange} />
  <span>Custom icons</span>
</label>`}
          </pre>
        </div>

        {/* No icons */}

        <div className='example'>
          <label>
            <Toggle
              defaultChecked={this.state.tofuIsReady}
              icons={false}
              onChange={this.handleTofuChange}
            />
            <span className='label-text'>No icons</span>
          </label>

          <pre>
            {`<label>
  <Toggle
    defaultChecked={this.state.tofuIsReady}
    icons={false}
    onChange={this.handleTofuChange} />
  <span>No icons</span>
</label>`}
          </pre>
        </div>
      </form>
    )
  }
}

App.displayName = 'App'

render(<App />, document.getElementById('application'))
