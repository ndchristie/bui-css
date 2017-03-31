# Bui CSS
A contemporary, approachable css library for prototyping and beyond

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

## Features

### Accessibility First

All of the pairings found in Bui's classes and mixins meet the requirements for [WCAG 2.0](https://www.w3.org/TR/WCAG20/) level AA or higher for normal text.

Bui also helps users with common types of colorblindness.  By shifting the classic green-red split towards teal and orange, these users are better able to distinguish actions at a glance, improving confidence and reducing mistakes, without sacrificing information or aesthetics for non-colorblind users.

### Dependency-Free

As of 0.4.0, Bui does not have any runtime dependencies.

### Raised Or Flat, On-Demand

Cards are a fundamental structural element in contemporary interfaces.  They represent both an aesthetic bridge between analogous and flat design and an opportunity for dynamic, logically-grouped content in their own right.  Cards naturally play a significant role in Bui's design language.

However, a single-line change instantly flattens all of the visual styles, without affecting metrics or readability.  So you can instantly switch between styles, or even let your users choose or themselves.

## Frequently Asked Questions

### How is "bui" pronounced?

"Bui" is officially pronounced as "buoy", to relfect it's friendly, buoyant nature.  However, "be-you-eye" is an acceptable alternative.