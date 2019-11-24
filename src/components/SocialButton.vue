<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
button(
  @click="onClick"
  :class=`[
    "gb-social-button",
    "gb-social-button--" + size,
    "gb-social-button--" + computedTheme,
    {
      "gb-social-button--disabled": disabled || loading,
      "gb-social-button--full-width": fullWidth,
      "gb-social-button--loading": loading,
      "gb-social-button--reverse": reverse
    }
  ]`
  :disabled="disabled || loading"
  type="button"
)
  span.gb-social-button__inner
    base-spinner(
      v-if="loading"
      color="white"
      size="mini"
    )

    template(
      v-if="!loading"
    )
      img(
        :src="logo"
        class="gb-social-button__logo"
      )

      span(
        v-if="label"
        v-html="label"
        class="gb-social-button__label"
      )
</template>

<!-- *************************************************************************
     SCRIPT
     ************************************************************************* -->

<script>
// NPM
import { BaseSpinner } from "@growthbunker/vuedarkmode"

// PROJECT: MIXINS
import ThemeMixin from "../mixins/ThemeMixin.js"

export default {
  components: {
    BaseSpinner
  },

  mixins: [ThemeMixin],

  props: {
    iconPath: {
      type: String,
      default: null
    },
    iconTheme: {
      type: String,
      default: "color",
      validator(x) {
        return ["black", "color", "white"].includes(x)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    network: {
      type: String,
      required: true,
      validator(x) {
        return [
          "500px",
          "airbnb",
          "amazon",
          "android",
          "apple",
          "bankin",
          "behance",
          "bitly",
          "blackberry",
          "blogger",
          "buffer",
          "chrome",
          "codepen",
          "dailymotion",
          "dribbble",
          "drive",
          "dropbox",
          "envato",
          "evernote",
          "facebook",
          "fancy",
          "feedly",
          "firefox",
          "flickr",
          "foursquare",
          "github",
          "google",
          "googleplus",
          "hanghout",
          "instagram",
          "internetexplorer",
          "invision",
          "linkedin",
          "magento",
          "medium",
          "messenger",
          "opera",
          "paypal",
          "periscope",
          "photoshop",
          "pinterest",
          "pocket",
          "principle",
          "producthunt",
          "rdio",
          "reddit",
          "rss",
          "safari",
          "scoopit",
          "shopify",
          "sketch",
          "skype",
          "slack",
          "snapchat",
          "soundcloud",
          "spotify",
          "stackoverflow",
          "tinder",
          "trello",
          "tumblr",
          "twitter",
          "viadeo",
          "viber",
          "vimeo",
          "vine",
          "whatsapp",
          "windowsphone",
          "wordpress",
          "yelp",
          "youtube"
        ].includes(x)
      }
    },
    reverse: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["nano", "micro", "mini", "small", "default", "medium", "large"].includes(x)
      }
    }
  },

  computed: {
    logo() {
      let path = this.$gb.vuesocial.iconPath || this.iconPath || ""

      // Remove last character if slash
      path = path.replace(/\/$/, "")

      return `${path}/${this.network}_${this.iconTheme}.svg`
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onClick(event) {
      this.$emit("click", this.network, event)
    }
  }
}
</script>

<!-- *************************************************************************
     STYLE
     ************************************************************************* -->

<style lang="scss">
// IMPORTS
@import "node_modules/@growthbunker/stylesheets/settings/_colors.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_maps.scss";
@import "node_modules/@growthbunker/stylesheets/settings/_themes.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_functions.scss";
@import "node_modules/@growthbunker/stylesheets/tools/_mixins.scss";

// VARIABLES
$c: ".gb-social-button";
$sizes: "nano", "micro", "mini", "small", "default", "medium", "large";

$networks: "500px", "airbnb", "amazon", "android", "apple", "bankin", "behance", "bitly",
  "blackberry", "blogger", "buffer", "chrome", "codepen", "dailymotion", "dribbble", "drive",
  "dropbox", "envato", "evernote", "facebook", "fancy", "feedly", "firefox", "flickr", "foursquare",
  "github", "google", "googleplus", "hanghout", "instagram", "internetexplorer", "invision",
  "linkedin", "magento", "medium", "messenger", "opera", "paypal", "periscope", "photoshop",
  "pinterest", "pocket", "principle", "producthunt", "rdio", "reddit", "rss", "safari", "scoopit",
  "shopify", "sketch", "skype", "slack", "snapchat", "soundcloud", "spotify", "stackoverflow",
  "tinder", "trello", "tumblr", "twitter", "viadeo", "viber", "vimeo", "vine", "whatsapp",
  "windowsphone", "wordpress", "yelp", "youtube";

#{$c} {
  display: inline-block;
  outline: 0;
  background-position: center;
  border-width: 1px;
  border-style: solid;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;
  transition: all 250ms linear;
  user-select: none;
  cursor: pointer;

  #{$c}__inner {
    display: flex;
    align-items: center;
    justify-content: center;

    #{$c}__logo {
      display: inline-block;
    }

    #{$c}__label {
      margin-left: 6px;
      font-weight: 500;
    }
  }

  // --> SIZES <--

  @each $size in $sizes {
    $i: index($sizes, $size) - 1;

    &--#{$size} {
      padding: (3px + 2px * $i) (6px + 2px * $i);
      border-radius: 2px + (1px * $i);
      font-size: 10px + (1px * $i);
      line-height: 8px + (2px * $i);

      #{$c}__inner {
        #{$c}__logo {
          width: 10px + (2px * $i);
          height: 10px + (2px * $i);
        }

        #{$c}__label {
          margin-left: 2px + (1px * $i);
        }
      }
    }
  }

  // --> THEMES <--

  @each $theme in $themes {
    &--#{map-get($theme, "name")} {
      color: mdg($theme, "colors", "black");
      box-shadow: 0 1px 5px 0 mdg($theme, "box-shadows", "default", "primary");

      // Reverse buttons have their own defined style (see below)
      &:not(#{$c}--reverse) {
        border-color: mdg($theme, "borders", "default", "primary");
        background-color: mdg($theme, "colors", "white");
      }

      &#{$c}--reverse {
        color: mdg($theme, "fonts", "default", "primary");
        border-color: mdg($theme, "borders", "reverse", "primary");
        background-color: transparent;
      }
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    opacity: 0.7;
    cursor: not-allowed;

    #{$c}__inner {
      pointer-events: none;
    }
  }

  &--full-width {
    width: 100%;
  }

  // --> INTERACTIONS <--

  &:active {
    background-size: 100%;
    transition: background 0s;
  }

  &:focus {
    transition: box-shadow linear 250ms;
  }
}
</style>
