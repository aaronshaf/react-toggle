An elegant, accessible toggle component for React. Also a glorified checkbox.

<img src="http://i.imgur.com/qNV79rp.png" height="28px" />

See [usage and examples](http://aaronshaf.github.io/react-toggle/).

## Props

The component takes the following props.

- `checked`: _bool_
> If `true`, the toggle is checked. If `false`, the toggle is unchecked.
	Use this if you want to treat the toggle as a controlled component

- `defaultChecked`: _bool_
> If `true` on initial render, the toggle is checked.
	If `false` on initial render, the toggle is unchecked.
	Use this if you want to treat the toggle as an uncontrolled component

- `onChange`: _function_
> Callback function to invoke when the user clicks on the toggle.
	The function signature should be the following: `function(e) { }`.
	To get the current checked status from the event, use `e.target.checked`.

- `name`: _string_
> The value of the `name` attribute of the wrapped \<input\> element

- `toggleRenderer`: _function_
> A method `function({checked, disabled, }) => React.Element` which overrides the default toggle renderer.
  Returns the custom React element to be rendered as the toggle.

- `value`: _string_
> The value of the `value` attribute of the wrapped \<input\> element

- `id`: _string_
> The value of the `id` attribute of the wrapped \<input\> element

- `aria-labelledby`: _string_
> The value of the `aria-labelledby` attribute of the wrapped \<input\> element

- `aria-label`: _string_
> The value of the `aria-label` attribute of the wrapped \<input\> element

- `disabled`: _bool_
> If `true`, the toggle is enabled. If `false`, the toggle is disabled

- `hasFocus`: _bool_
> If `true`, the toggle is focused. If `false`, the toggle does not have focus


## Installation

```bash
npm install react-toggle
```

Include the component's [CSS](./style.css).

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
