import React from 'react'

import Toggle from '../index.es6'
// In your code this would be:
// import Toggle from 'react-toggle'

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      cheeseIsReady: false,
      baconIsReady: false,
      biscuitIsReady: false,
      eggsAreReady: false
    }
  },

  handleCheeseChange(event) {
    this.setState({cheeseIsReady: event.target.checked})
  },

  handleBaconChange(event) {
    this.setState({baconIsReady: event.target.checked})
  },

  handleBiscuitChange(event) {
    this.setState({biscuitIsReady: event.target.checked})
  },

  handleEggsChange(event) {
    this.setState({eggsAreReady: event.target.checked})
  },

  render() {
    return (
      <form>
        <h1>react-toggle</h1>

        {/* Installation */}

        <div className="example">
          <div>Installation</div>
          <pre>
{`npm install react-toggle`}
          </pre>
          <pre>
{`import Toggle from 'react-toggle'`}
          </pre>

        </div>

        {/* Bacon */}

        <div className="example">
          <label>
            <Toggle
              checked={this.state.baconIsReady}
              onChange={this.handleBaconChange} />
            <span className="label-text">Wrapper label tag</span>
          </label>

          <pre>
{`<label>
  <Toggle
    checked={this.state.baconIsReady}
    onChange={this.handleBaconChange} />
  <span>Wrapper label tag</span>
</label>`}
          </pre>
        </div>

        {/* Cheese */}

        <div className="example">
          <Toggle
            id="cheese-status"
            checked={this.state.cheeseIsReady}
            /* ariaLabelledBy="cheese-label" */
            onChange={this.handleCheeseChange} />
          <label htmlFor="cheese-status">Adjacent label tag</label>

          <pre>
{`<Toggle
  id="cheese-status"
  checked={this.state.cheeseIsReady}
  onChange={this.handleCheeseChange} />
<label htmlFor="cheese-status">Adjacent label tag</label>`}
          </pre>
        </div>

        {/* Biscuit */}

        <div className="example">
          <Toggle
            id="biscuit-status"
            checked={this.state.biscuitIsReady}
            aria-labelledby="biscuit-label"
            onChange={this.handleBiscuitChange} />
          <span id="biscuit-label" className="label-text">Adjacent label, but not standard tag</span>

          <pre>
{`<Toggle
  id="biscuit-status"
  checked={this.state.biscuitIsReady}
  aria-labelledby="biscuit-label"
  onChange={this.handleBiscuitChange} />
<span id="biscuit-label">Adjacent label, but not standard tag</span>`}
          </pre>
        </div>

        {/* Eggs */}

        <div className="example">
          <Toggle
            checked={this.state.eggsAreReady}
            aria-label="No label"
            onChange={this.handleEggsChange} />
          <span className="label-text">No label tag</span>
          <pre>
{`<Toggle
  checked={this.state.eggsAreReady}
  aria-label="No label tag"
  onChange={this.handleEggsChange} />
<span>No label tag</span>`}
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
          <div>Using form data</div>
          <pre>
{`<Toggle
  checked={this.state.myBoolean}
  name="baconIsReady"
  value="yes"
  onChange={this.handleChange} />`}
          </pre>
        </div>

      </form>
    )
  }
})

React.render(<App />, document.getElementById('application'))
