import React from 'react'

import Toggle from '../index.es6'
// In your code this would be:
// import Toggle from 'react-toggle'

var App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      cheeseIsReady: false,
      baconIsReady: false
    }
  },

  handleCheeseChange(event) {
    this.setState({cheeseIsReady: event.target.checked})
  },

  handleBaconChange(event) {
    this.setState({baconIsReady: event.target.checked})
  },

  render() {
    return (
      <form>
        <h1>react-toggle</h1>
        <div>
          <Toggle
            checked={this.state.cheeseIsReady}
            name="cheeseIsReady" // Optional
            value="true" // Optional
            onChange={this.handleCheeseChange} />
        </div>
        <div>
          <label>
          Works with labels
          <Toggle
            checked={this.state.baconIsReady}
            name="baconIsReady" // Optional
            value="true" // Optional
            onChange={this.handleBaconChange} />
          </label>
        </div>
      </form>
    )
  }
})

React.render(<App />, document.getElementById('application'))
