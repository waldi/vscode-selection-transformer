# 🛠 VSCode Selection Transformer

This VSCode extension allows you to transform your selections via an evaluated javascript expression.

![Simple](https://github.com/waldi/vscode-selection-transformer/raw/main/images/simple.gif)

---

## How to use

- Make selection

- `CTRL/CMD` + `P`

- Choose `Transform Selection`

- Enter expression, Press `enter`

> You can access the current selection in the variable `value` and is a string.

---

### Example:

```javascript
value
  .split(" ")
  .map((x) => `"{x}"`)
  .join(", ");
```

![Advanced](https://github.com/waldi/vscode-selection-transformer/raw/main/images/advanced.gif)

---

## Extension Settings

\-

## Known Issues

\-

## Release Notes

### 1.0.0

Initial release
