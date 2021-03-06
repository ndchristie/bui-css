# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.3.1"></a>
## [2.3.1](https://github.com/ndchristie/bui/compare/v2.3.0...v2.3.1) (2018-01-27)



<a name="2.3.0"></a>
# [2.3.0](https://github.com/ndchristie/bui/compare/v2.2.1...v2.3.0) (2018-01-25)


### Bug Fixes

* Fix broken extension in list styles ([ba86434](https://github.com/ndchristie/bui/commit/ba86434))
* Include additional cases for leapfrogging, including explicit soft-ness of color modifiers ([df7bc74](https://github.com/ndchristie/bui/commit/df7bc74))


### Features

* Improve button, checkbox and radio styling ([0603243](https://github.com/ndchristie/bui/commit/0603243))



<a name="2.2.1"></a>
## [2.2.1](https://github.com/ndchristie/bui/compare/v2.2.0...v2.2.1) (2018-01-19)


### Bug Fixes

* Fix bullet-point-list rendering ([d9d479c](https://github.com/ndchristie/bui/commit/d9d479c))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/ndchristie/bui/compare/v2.1.0...v2.2.0) (2018-01-19)


### Features

* Differentiate list and bullet-point-lists, improving nav structure ([0aa2dc5](https://github.com/ndchristie/bui/commit/0aa2dc5))
* Improve anchor styling with hover and focus ([910a07c](https://github.com/ndchristie/bui/commit/910a07c))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/ndchristie/bui/compare/v2.0.0...v2.1.0) (2018-01-17)


### Features

* Add script fonts and blockquote styling ([2676dca](https://github.com/ndchristie/bui/commit/2676dca))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/ndchristie/bui/compare/v1.1.0...v2.0.0) (2018-01-16)


### Features

* Adjust color names to reflect relationships over previous roles ([53dc10a](https://github.com/ndchristie/bui/commit/53dc10a))
* **Color:** Apply color relationship mixin nomenclature to modifier classes ([a82d823](https://github.com/ndchristie/bui/commit/a82d823))
* **Color:** Apply dark colors to link text on loud backgrounds by default to maintain WCAG2.0 AAA r ([0bcaf48](https://github.com/ndchristie/bui/commit/0bcaf48))
* **Color:** Improve leapfrogging for value modifiers ([2e94a69](https://github.com/ndchristie/bui/commit/2e94a69))


### BREAKING CHANGES

* **Color:** Previous hue modifier classes (_bad, _good, etc) will have no effect, falling back
to the neutral swatches.



<a name="1.1.0"></a>
# [1.1.0](https://github.com/ndchristie/bui/compare/v1.0.2...v1.1.0) (2018-01-10)


### Features

* Add ._tight modifier to eliminate .container spacing for more adaptable layouts ([7077206](https://github.com/ndchristie/bui/commit/7077206))
* **Color:** Consolidate color information in mixins ([77109d7](https://github.com/ndchristie/bui/commit/77109d7))
* **Modifiers:** Add hopscotching for light modifiers nested inside of darker ones ([c8ff06f](https://github.com/ndchristie/bui/commit/c8ff06f))
* **Nav:** Tidy up nav for more fluid use ([ef12f38](https://github.com/ndchristie/bui/commit/ef12f38))
* **Typography:** Consolidate Typography classes to reflect streamlined spacing and color features ([bbe06d4](https://github.com/ndchristie/bui/commit/bbe06d4))
* **Typography:** Consolidate title styles and selectors ([89a400f](https://github.com/ndchristie/bui/commit/89a400f))
* Apply white styling to body by default to avoid imposing modifier on body ([691a208](https://github.com/ndchristie/bui/commit/691a208))
* Tidy up spacing and sizing ([74d5469](https://github.com/ndchristie/bui/commit/74d5469))



<a name="1.0.2"></a>
## [1.0.2](https://github.com/ndchristie/bui/compare/v1.0.1...v1.0.2) (2018-01-10)


### Features

** moved ._good, ._bad etc. from container.scss to new Modifiers

### Bug Fixes

* **Modifiers:** Fix erroneous modifier .warn => ._warn ([7c5d3a3](https://github.com/ndchristie/bui/commit/7c5d3a3))


## 1.0.1 - 2017-09-10


### Bug Fixes
** Rebuilt package-lock.json

## 1.0.0 - 2017-09-10


### Features

* Gulp tasks for building minified CSS from SCSS source files
* Base styling for colors, box measurements, and Typography
* Essential styling for navigation, buttons, inputs, tables, and logical container groups