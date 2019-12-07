/**************************************************************************
 * IMPORTS
 ***************************************************************************/

// BASE COMPONENTS
import SocialButton from "./components/SocialButton.vue"

/**************************************************************************
 * ENVIRONMENT CONFIGURATIONS
 ***************************************************************************/

// install function executed by Vue.use()
function install(Vue, options) {
  if (install.installed) {
    return
  } else {
    install.installed = true
  }

  // Declare the component
  Vue.component("gb-social-button", SocialButton)

  if (!Vue.prototype.$gb) {
    Vue.prototype.$gb = {}
  }

  Vue.prototype.$gb.vuesocial = {}
  Vue.prototype.$gb.vuesocial.iconPath = (options || {}).iconPath || null
  Vue.prototype.$gb.vuesocial.theme = (options || {}).theme || "dark"
}

// Create module definition for Vue.use()
const plugin = {
  install
}

// To auto-install when vue is found
/* global window global */
let GlobalVue = null

if (typeof window !== "undefined") {
  GlobalVue = window.Vue
} else if (typeof global !== "undefined") {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

// Default export is library as a whole, registered via Vue.use()
export default plugin
