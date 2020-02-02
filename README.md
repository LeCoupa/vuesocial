<p align="center" style="background: #1b2431; padding: 20px 0;">
  <a href="https://www.growthbunker.dev/vuesocial" target="_blank">
    <img width="100%" src="https://raw.githubusercontent.com/growthbunker/vuesocial/master/vuesocial_dark.jpg">
  </a>
</p>

[![npm](https://img.shields.io/npm/v/@growthbunker/vuesocial.svg)](https://www.npmjs.com/package/@growthbunker/vuesocial)
[![npm](https://img.shields.io/npm/dm/@growthbunker/vuesocial.svg)](https://npm-stat.com/charts.html?package=@growthbunker/vuesocial)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/growthbunker/vuesocial.svg)](http://isitmaintained.com/project/growthbunker/vuesocial "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/growthbunker/vuesocial.svg)](http://isitmaintained.com/project/growthbunker/vuesocial "Percentage of issues still open")
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/growthbunker/vuesocial/blob/master/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ae3d4112-1c84-4868-b4eb-271c3136ede6/deploy-status)](https://app.netlify.com/sites/growthbunker/deploys)

## Documentation

You can browse the documentation for Vue Social [on the website](https://www.growthbunker.dev/vuesocial).

## Installation

```
npm install @growthbunker/vuesocial

# Or if you prefer using yarn
yarn add @growthbunker/vuesocial
```

### Vue.js

In your `main.js` file:

```js
import Vue from "vue"
import vuesocial from "@growthbunker/vuesocial"

Vue.use(vuesocial)
```

### Nuxt.js

Create a new plugin in `plugins/vuesocial.js`:

```js
import Vue from "vue"
import vuesocial from "@growthbunker/vuesocial"

Vue.use(vuesocial)
```

Add this new plugin to `nuxt.config.js`.

```js
module.exports = {
  // ...
  plugins: [{ src: "@/plugins/vuesocial.js" }];
}
```

### CDN

Get the latest version from [jsdelivr](https://www.jsdelivr.com/), and import the JavaScript file in your page.

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.5/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@growthbunker/vuesocial@latest/dist/vuesocial.min.js"></script>
```

We recommend our users to lock Vue Social's version when using CDN. Requesting the latest version (as opposed to "latest major" or "latest minor") is dangerous because major versions usually come with breaking changes. Only do this if you really know what you are doing. [Please refer to jsdelivr.com](https://www.jsdelivr.com/features) for more information.

## Icons

<a href="https://github.com/growthbunker/vuesocial/tree/master/assets/networks" target="_blank">All the icons are available here</a> in three themes (color, black and white). Copy them somewhere in your somewhere in your "public" / "static" folder. You will also have to set the icon path for the component to be able to find them (see package options and component props).

A huge thank you to <a href="https://alexisdoreau.com/freebies_gift_download/" target="_blank">Alexis Doreau</a> for designing them.

## Example

Once the plugin is installed, you can use the component like this:

```html
<template>
  <gb-social-button network="facebook" size="small" theme="light">
    Do something with Facebook
  </gb-social-button>
</template>
```

## Contributing

You are more than welcome to contribute to Vue Social. Just submit changes via pull request and I will review them before merging.

1. Fork it! 🤙

2. Create your feature branch: `git checkout -b my-new-feature`

3. Commit your changes: `git commit -am "Add some feature"`

4. Push to the branch: `git push origin my-new-feature`

5. Submit a pull request 👍

The documentation is available in the `docs` folder. The Vue Social components are available in the `lib` folder.

## License

Vue Social is [MIT licensed](LICENSE).
