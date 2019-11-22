/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// NPM
import vue from "rollup-plugin-vue"
import buble from "rollup-plugin-buble"
import commonjs from "rollup-plugin-commonjs"
import replace from "rollup-plugin-replace"
import { terser } from "rollup-plugin-terser"
import minimist from "minimist"

/**************************************************************************
 * ROLLUP CONFIGURATION
 * https://rollupjs.org/guide/en/
 ***************************************************************************/

const argv = minimist(process.argv.slice(2))

const baseConfig = {
  input: "src/entry.js",
  plugins: {
    preVue: [
      replace({
        "process.env.NODE_ENV": JSON.stringify("production")
      }),
      commonjs()
    ],
    vue: {
      css: true,
      template: {
        isProduction: true
      }
    },
    postVue: [buble()]
  }
}

// ESM/UMD/IIFE shared settings: externals
// Refer to https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
const external = [
  // list external dependencies, exactly the way it is written in the import statement.
  "@growthbunker/vuedarkmode"
]

// UMD/IIFE shared settings: output.globals
// Refer to https://rollupjs.org/guide/en#output-globals for details
const globals = {
  "@growthbunker/vuedarkmode": "VueDarkMode"
}

// Customize configs for individual targets
const buildFormats = []

if (!argv.format || argv.format === "es") {
  const esConfig = {
    ...baseConfig,
    external,
    output: {
      file: "dist/vuesocial.esm.js",
      format: "esm",
      exports: "named"
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      terser({
        output: {
          ecma: 6
        }
      })
    ]
  }
  buildFormats.push(esConfig)
}

if (!argv.format || argv.format === "cjs") {
  const umdConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: "dist/vuesocial.ssr.js",
      format: "cjs",
      name: "vuesocial",
      exports: "named",
      globals
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue({
        ...baseConfig.plugins.vue,
        template: {
          ...baseConfig.plugins.vue.template,
          optimizeSSR: true
        }
      }),
      ...baseConfig.plugins.postVue
    ]
  }
  buildFormats.push(umdConfig)
}

if (!argv.format || argv.format === "iife") {
  const unpkgConfig = {
    ...baseConfig,
    external,
    output: {
      compact: true,
      file: "dist/vuesocial.min.js",
      format: "iife",
      name: "vuesocial",
      exports: "named",
      globals
    },
    plugins: [
      ...baseConfig.plugins.preVue,
      vue(baseConfig.plugins.vue),
      ...baseConfig.plugins.postVue,
      terser({
        output: {
          ecma: 5
        }
      })
    ]
  }
  buildFormats.push(unpkgConfig)
}

/**************************************************************************
 * EXPORT
 ***************************************************************************/

export default buildFormats
