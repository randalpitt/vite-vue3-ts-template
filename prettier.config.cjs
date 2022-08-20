module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  useTabs: false,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: 'tailwind.config.cjs',
}
