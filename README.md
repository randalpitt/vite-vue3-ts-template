# Vite + Vue 3 + TypeScript

Basic starter template for Vite + Vue 3 + TyepScript applications.

Also includes:

- `tailwindcss`
- `eslint`
- `prettier`
- `prettier-plugin-tailwindcss`
- and a few other packages to get those working correctly.

Suggested VSCode `settings.json` file:

```
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.quickSuggestions": {
    "strings": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "vue"],
  "prettier.configPath": "prettier.config.cjs"
}
```
