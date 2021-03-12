An elegant, accessible toggle component for React. Also a glorified checkbox.

See [usage and examples](http://aaronshaf.github.io/react-toggle/).

## Props

The component takes the following props.

| Prop              | Type       | Description |
|-------------------|------------|-------------|
| `checked`         | _boolean_  | If `true`, the toggle is checked. If `false`, the toggle is unchecked. Use this if you want to treat the toggle as a controlled component |
| `defaultChecked`  | _boolean_  | If `true` on initial render, the toggle is checked. If `false` on initial render, the toggle is unchecked. Use this if you want to treat the toggle as an uncontrolled component |
| `onChange`        | _function_ | Callback function to invoke when the user clicks on the toggle. The function signature should be the following: `function(e) { }`. To get the current checked status from the event, use `e.target.checked`. |
| `onFocus`         | _function_ | Callback function to invoke when field has focus. The function signature should be the following: `function(e) { }` |
| `onBlur`          | _function_ | Callback function to invoke when field loses focus. The function signature should be the following: `function(e) { }` |
| `name`            | _string_   | The value of the `name` attribute of the wrapped \<input\> element |
| `value`           | _string_   | The value of the `value` attribute of the wrapped \<input\> element |
| `id`              | _string_   | The value of the `id` attribute of the wrapped \<input\> element |
| `icons`        | _object_  | If `false`, no icons are displayed. You may also pass custom icon components in `icons={{checked: <CheckedIcon />, unchecked: <UncheckedIcon />}}` |
| `aria-labelledby` | _string_   | The value of the `aria-labelledby` attribute of the wrapped \<input\> element |
| `aria-label`      | _string_   | The value of the `aria-label` attribute of the wrapped \<input\> element |
| `disabled`        | _boolean_  | If `true`, the toggle is disabled. If `false`, the toggle is enabled |

## Installation

```bash
npm install react-toggle
```

## Usage

If you want the default styling, include the component's [CSS](./style.css) with

```javascript
import "react-toggle/style.css" // for ES6 modules
// or
require("react-toggle/style.css") // for CommonJS
```

## Development

```javascript
npm install
npm run dev
```

## Build

```javascript
npm run build
```

## License

MIT
