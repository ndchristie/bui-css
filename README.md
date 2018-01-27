<p align="center"><img width="100" src="http://res.cloudinary.com/ndchristie/image/upload/v1515621001/logos/bui.png" alt="Bui buoy logo graphic"></p>

# Bui CSS

> A friendly, buoyant css library

## Quick start

- Clone the repo: `git clone https://github.com/ndchristie/bui` and run the following command: `npm run build`
- Install with [npm](https://www.npmjs.com): `npm install bui-css`

Both methods will yield the following folder structure, containing compiled and minified css:
```
bui-css/
└── lib/
    └── css/
        ├── bui.css
        ├── bui.css.map
        ├── bui.min.css
        └── bui.min.css.map
```

If you wish to use the source scss files, you can find these in *bui-css/src/stylesheets/*.

## Features

### Accessibility First

All of the pairings found in Bui's classes and mixins meet the requirements for [WCAG 2.0](https://www.w3.org/TR/WCAG20/) level AA or higher for normal text.

Bui also helps users with common types of colorblindness.  By shifting the classic green-red split towards teal and orange, these users are better able to distinguish actions at a glance, improving confidence and reducing mistakes, without sacrificing information or aesthetics for non-colorblind users.

### Color Modifiers

Bui uses 5 value modifiers and 6 hue modifiers to map a wide range of colors.

#### Value Modifiers

The modifier classes ```_dark```, ```_deep```, ```_loud```, ```_soft```, and ```_white``` all affect the relative value of a region, as well as modifying text color to maintain readability.  The first two have bright text on darker backgrounds, while the others have dark text.  These classes can be nested, with the closest ancestor taking precedence.  The ```_white``` class can be used to overrule the hue modifiers below.

#### Hue Modifiers

The modifer classes ```_main```, ```_cool```, ```_warm```, ```_hot```, and  ```_extra``` all affect the relative hue of a region.  These further modify the the ```_dark```, ```_deep``` and ```_loud``` modifiers; As such they have no effect when alone or with the ```_white``` modifier.

In an effort to keep filesize down, hue modifiers cannot be nested, but the order of precedence should afford most common cases.  If you are using the source scss, you can import the mixins from *bui-css/src/stylesheets/vars/color.scss*.
