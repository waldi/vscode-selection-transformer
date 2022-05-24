# Selection Transformer (selection-transformer)

This extension allows you to transform your selections via an evaluated javascript expression.

## How to

- Make selection

- `CTRL/CMD` + `P`

- Choose `Transform Selection`

- Enter expression, Press `enter`

> You can access the current selection in the variable `value` and is a string.

### Simple Example:

`value * 2`

![Simple](images/simple.gif\)

### Advanced:

```
value.split(' ').map(x => `"{x}"`).join(', ')
```

![Advanced](images/advanced.gif\)

## Extension Settings

\-

## Known Issues

\-

## Release Notes

### 1.0.0

Initial release
