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
      eggsAreReady: false
    }
  },

  handleCheeseChange(event) {
    this.setState({cheeseIsReady: event.target.checked})
  },

  handleBaconChange(event) {
    this.setState({baconIsReady: event.target.checked})
  },

  handleEggsChange(event) {
    this.setState({eggsAreReady: event.target.checked})
  },

  render() {
    return (
      <form>
        <h1>react-toggle</h1>
        <h2>With a &lt;label&gt; wrapper tag</h2>
        <div>
          <label>
            Wrapper label
            <Toggle
              checked={this.state.baconIsReady}
              onChange={this.handleBaconChange} />
          </label>
        </div>

        <h2>With an adjacent &lt;label&gt; tag</h2>
        <div>
          <label htmlFor="cheese-status">Adjacent label</label>
          <Toggle
            id="cheese-status"
            checked={this.state.cheeseIsReady}
            ariaLabelledBy="cheese-label"
            onChange={this.handleCheeseChange} />
        </div>

        <h2>Without a &lt;label&gt; tag</h2>
        <div>
          <Toggle
            checked={this.state.eggsAreReady}
            ariaLabel="Eggs"
            onChange={this.handleEggsChange} />
        </div>

      </form>
    )
  }
})

React.render(<App />, document.getElementById('application'))
