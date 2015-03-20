An elegant, accessible toggle component for React. Also a glorified checkbox.

See [example](http://instructure-react.github.io/react-toggle/).

## Example usage

```bash
npm install react-toggle
```

### Normal

```javascript
import React from 'react'
import Toggle from 'react-toggle'

export default class App extends React.Component {
  getInitialState() {
    return {
      myBoolean: false
    }
  }

  handleChange(event) {
    // do something with event.target.checked
  }

  render() {
    return (
      <label>
        Your label
        <Toggle
          checked={this.state.myBoolean}
          onChange={this.handleChange} />
      </label>
    )
  }
}
```

### Using form data

```javascript
<Toggle
  checked={this.state.myBoolean}
  name="baconIsReady"
  value="yes"
  onChange={this.handleChange} />
```

Don't forget to include the component's [CSS](https://raw.githubusercontent.com/instructure-react/react-toggle/master/example/styles.css).

Wrap the component in a label for accessibility.

## Development

```javascript
npm install
npm run dev
```

`index.es6.js` transpiles to `index.js`.

## Build

```javascript
npm run build
```

## License

MIT
