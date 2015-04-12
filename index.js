import React from 'react'

import Toggle from '../index.es6'
// In your code this would be:
// import Toggle from 'react-toggle'

require("../style.css")

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      cheeseIsReady: false,
      baconIsReady: false,
      biscuitIsReady: false,
      milkIsReady: false,
      eggsAreReady: false,
      formData: {}
    }
  },

  handleBaconChange(event) {
    this.setState({baconIsReady: event.target.checked})
  },

  handleCheeseChange(event) {
    this.setState({cheeseIsReady: event.target.checked})
  },

  handleBiscuitChange(event) {
    this.setState({biscuitIsReady: event.target.checked})
  },

  handleEggsChange(event) {
    this.setState({eggsAreReady: event.target.checked})
  },

  handleMilkChange(event) {
    var form = this.refs.breakfastForm.getDOMNode()
    this.setState({formData: form.milkIsReady.checked ? {milkIsReady: form.milkIsReady.value} : {}})
  },

  render() {
    return (
      <form ref="breakfastForm">
        <h1>react-toggle</h1>

        {/* Installation */}

        <div className="example">
          <div>Installation</div>
          <pre>
{`npm install react-toggle --save-dev`}
          </pre>
          <pre>{`import Toggle from 'react-toggle'`}</pre>
          <p>Or if you're not using the ES6 module format yet:</p>
          <pre>{`var Toggle = require('react-toggle')`}</pre>
          <p>Include the component's <a href="https://raw.githubusercontent.com/instructure-react/react-toggle/master/style.css">CSS</a>.</p>
        </div>

        {/* Bacon */}

        <div className="example">
          <label>
            <Toggle
              defaultChecked={this.state.baconIsReady}
              onChange={this.handleBaconChange} />
            <span className="label-text">Wrapper label tag</span>
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

        <div className="example">
          <Toggle
            id="cheese-status"
            defaultChecked={this.state.cheeseIsReady}
            onChange={this.handleCheeseChange} />
          <label htmlFor="cheese-status">Adjacent label tag</label>

          <pre>
{`<Toggle
  id="cheese-status"
  defaultChecked={this.state.cheeseIsReady}
  onChange={this.handleCheeseChange} />
<label htmlFor="cheese-status">Adjacent label tag</label>`}
          </pre>
          <pre>
            this.state.cheeseIsReady: {JSON.stringify(this.state.cheeseIsReady)}
          </pre>

        </div>

        {/* Biscuit */}

        <div className="example">
          <Toggle
            id="biscuit-status"
            defaultChecked={this.state.biscuitIsReady}
            aria-labelledby="biscuit-label"
            onChange={this.handleBiscuitChange} />
          <span id="biscuit-label" className="label-text">Adjacent label, but not standard tag</span>

          <pre>
{`<Toggle
  id="biscuit-status"
  defaultChecked={this.state.biscuitIsReady}
  aria-labelledby="biscuit-label"
  onChange={this.handleBiscuitChange} />
<span id="biscuit-label">Adjacent label, but not standard tag</span>`}
          </pre>
          <pre>
            this.state.biscuitIsReady: {JSON.stringify(this.state.biscuitIsReady)}
          </pre>
        </div>

        {/* Eggs */}

        <div className="example">
          <Toggle
            defaultChecked={this.state.eggsAreReady}
            aria-label="No label"
            onChange={this.handleEggsChange} />
          <span className="label-text">No label tag</span>
          <pre>
{`<Toggle
  defaultChecked={this.state.eggsAreReady}
  aria-label="No label tag"
  onChange={this.handleEggsChange} />
<span>No label tag</span>`}
          </pre>
          <pre>
            this.state.eggsAreReady: {JSON.stringify(this.state.eggsAreReady)}
          </pre>
        </div>

        {/* Handle change */}

        <div className="example">
          <div>Handle change</div>
          <pre>
{`handleChange(event) {
  // do something with event.target.checked
}`}
          </pre>
        </div>

        {/* Using form data */}

        <div className="example">
          <label>
            <Toggle
              defaultChecked={this.state.milkIsReady}
              name="milkIsReady"
              value="yes"
              onChange={this.handleMilkChange} />
            <span className="label-text">Using form data</span>
          </label>

          <pre>
{`<Toggle
  defaultChecked={this.state.milkIsReady}
  name="milkIsReady"
  value="yes" />`}
          </pre>
          <pre>
            formData: {JSON.stringify(this.state.formData)}
          </pre>
        </div>

      </form>
    )
  }
})

React.render(<App />, document.getElementById('application'))
