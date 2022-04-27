# gatsby-plugin-axe-core-react

A Gatsby plugin to add `@axe-core/react` accessibility testing to Gatsby markup.

## Install

```shell
yarn add @axe-core/react axe-core gatsby-plugin-axe-core-react --dev 
```

## How to use

```javascript
// In your gatsby-config.js

plugins: [`gatsby-plugin-axe-core-react`]
```

or

```javascript
// In your gatsby-config.js

plugins: [
  {
    resolve: 'gatsby-plugin-axe-core-react',
    options: {
        axeConfig,
        axeContext,
        debounce,
    },
  },
]
```

React-axe will now print a11y warnings to your browser's console. 🎉


### Configuration options
You can use the following options if you wish to to override the default config.

[**`axeConfig`**](https://www.npmjs.com/package/@axe-core/react#configuration) [object][optional]

The configuration object for axe-core.

[**`axeContext`**](https://github.com/dequelabs/axe-core/blob/master/doc/API.md#context-parameter) [object][optional]

Used to specify which element should and which should not be tested.

[**`debounce`**](https://www.npmjs.com/package/@axe-core/react#debouncing) [number][optional]

The number of milliseconds to wait for component updates to cease before performing an analysis of all the changes.
