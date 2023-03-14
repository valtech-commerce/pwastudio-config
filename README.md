# @valtech-commerce/pwastudio-config

[![npm][npm-badge]][npm-url]
[![npms.io: Score][npmsio-badge]][npmsio-url]
[![libraries.io: SourceRank][librariesio-badge]][librariesio-url]
[![Tests][tests-badge]][tests-url]
[![License: MIT][license-badge]][license-url]

> Opinionated PWA Studio configurations.

## Configurations

| config                               | Description                  |
| ------------------------------------ | ---------------------------- |
| [eslint](config/eslintrc.yaml)       | Configurations for ESLint    |
| [prettier](config/prettierrc.yaml)   | Configurations for Prettier  |
| [stylelint](config/stylelintrc.yaml) | Configurations for stylelint |

## Install

```
$ npm install @valtech-commerce/pwastudio-config
```

## Usage for ESLint

Add some ESLint config to your `.eslintrc.cjs`:

```js
module.exports = {
	...require("@valtech-commerce/pwastudio-config/eslint"),
};
```

### Used plugin / configuration

- [@valtech-commerce/react](https://github.com/valtech-commerce/eslint-config) - Valtech_Commerce base React.js rules
- [eslint-plugin-package-json](https://github.com/zetlen/eslint-plugin-package-json) - Rules for valid, consistent, and readable package.json files
- [jsx-a11y/recommended](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#usage) - Recommended rules for accessibility rules on JSX elements
- [package-json/recommended](https://github.com/zetlen/eslint-plugin-package-json#supported-rules) - Recommended rules for package.json files
- [@magento/eslint-config](https://github.com/magento/magento-eslint) - Recommended rules for PWA Studio

## Usage for Prettier

Add some Prettier config to your `.prettierrc.cjs`:

```js
module.exports = {
	...require("@valtech-commerce/pwastudio-config/prettier"),
};
```

## Usage for stylelint

Add some stylelint config to your `.stylelintrc.cjs`:

```js
module.exports = {
	...require("@valtech-commerce/pwastudio-config/stylelint"),
};
```

### Used plugin / configuration

- [@valtech-commerce/core](https://github.com/valtech-commerce/stylelint-config) - Valtech_Commerce base rules
- [stylelint-config-css-modules](https://github.com/pascalduez/stylelint-config-css-modules) - CSS modules shareable config for stylelint.
- [stylelint-react-native](https://github.com/kristerkari/stylelint-react-native) - A collection of React Native specific linting rules

## Documentation

See the [Changelog](CHANGELOG.md) to see what has changed.

## Contribute

See the [Contributing Guidelines](CONTRIBUTING.md) for ways to get started.

See the [Support Guide](SUPPORT.md) for ways to get help.

See the [Security Policy](SECURITY.md) for sharing vulnerability reports.

This project has a [Code of Conduct](CODE_OF_CONDUCT.md).
By interacting with this repository, organization, or community you agree to abide by its terms.

## License

[MIT](LICENSE) © [Valtech Canada inc.](https://www.valtech.ca/)

[npm-badge]: https://img.shields.io/npm/v/@valtech-commerce/pwastudio-config?style=flat-square
[npmsio-badge]: https://img.shields.io/npms-io/final-score/@valtech-commerce/pwastudio-config?style=flat-square
[librariesio-badge]: https://img.shields.io/librariesio/sourcerank/npm/@valtech-commerce/pwastudio-config?style=flat-square
[tests-badge]: https://img.shields.io/github/actions/workflow/status/valtech-commerce/pwastudio-config/tests.yaml?style=flat-square&branch=main
[license-badge]: https://img.shields.io/badge/license-MIT-green?style=flat-square
[npm-url]: https://www.npmjs.com/package/@valtech-commerce/pwastudio-config
[npmsio-url]: https://npms.io/search?q=%40valtech-commerce%2Fpwastudio-config
[librariesio-url]: https://libraries.io/npm/@valtech-commerce%2Fpwastudio-config
[tests-url]: https://github.com/valtech-commerce/pwastudio-config/actions/workflows/tests.yaml?query=branch%3Amain
[license-url]: https://opensource.org/licenses/MIT
