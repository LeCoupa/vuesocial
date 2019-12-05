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
      "gb-social-button--not-reverse": !reverse,
      "gb-social-button--reverse": reverse
    }
  ]`
  :disabled="disabled"
  type="button"
)
  span.gb-social-button__focuser

  span.gb-social-button__inner
    img(
      :src="logo"
      class="gb-social-button__logo"
    )

    span(
      v-if="label"
      v-html="label"
      class="gb-social-button__label"
    )

  base-spinner(
    v-if="loading"
    :size="spinnerSize"
    class="gb-social-button__spinner"
    color="black"
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
          "hangout",
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
    },

    spinnerSize() {
      if (["nano", "micro"].includes(this.size)) {
        return "nano"
      } else if (["mini", "small", "default"].includes(this.size)) {
        return "mini"
      }

      return "default"
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
  "github", "google", "hangout", "instagram", "internetexplorer", "invision", "linkedin", "magento",
  "medium", "messenger", "opera", "paypal", "periscope", "photoshop", "pinterest", "pocket",
  "principle", "producthunt", "rdio", "reddit", "rss", "safari", "scoopit", "shopify", "sketch",
  "skype", "slack", "snapchat", "soundcloud", "spotify", "stackoverflow", "tinder", "trello",
  "tumblr", "twitter", "viadeo", "viber", "vimeo", "vine", "whatsapp", "windowsphone", "wordpress",
  "yelp", "youtube";

#{$c} {
  position: relative;
  display: inline-block;
  outline: 0;
  border-width: 1px;
  border-style: solid;
  background-position: center;
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;
  transition: all 250ms linear;
  user-select: none;
  cursor: pointer;

  #{$c}__focuser {
    position: absolute;
    top: -4px;
    right: -4px;
    bottom: -4px;
    left: -4px;
    border-width: 1px;
    border-style: solid;
    opacity: 0;
    transition: all linear 250ms;
  }

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

      #{$c}__focuser {
        border-radius: 4px + (1px * $i);
      }

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
    $themeName: map-get($theme, "name");

    &--#{$themeName} {
      box-shadow: 0 1px 5px 0 mdg($theme, "box-shadows", "default", "primary");

      &#{$c}--not-reverse {
        border-color: mdg($theme, "borders", "default", "primary");
        background-color: mdg($theme, "colors", "white");
        color: mdg($theme, "colors", "black");

        #{$c}__focuser {
          @if ($themeName == "dark") {
            border-color: mdg($theme, "borders", "reverse", "primary");
          } @else {
            border-color: mdg($theme, "borders", "default", "primary");
          }
        }
      }

      &#{$c}--reverse {
        border-color: mdg($theme, "borders", "reverse", "primary");
        background-color: transparent;
        color: mdg($theme, "fonts", "default", "primary");

        &:hover {
          background-color: mdg($theme, "backgrounds", "default", "primary");
        }

        #{$c}__focuser {
          border-color: mdg($theme, "borders", "reverse", "primary");
        }
      }

      &:hover {
        transform: translateY(-1px);
      }

      &:active {
        transform: translateY(0px);
      }

      &:focus {
        transform: translateY(0px);
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

  &--loading {
    position: relative;
    opacity: 1;
    cursor: wait;

    #{$c}__inner {
      opacity: 0;
    }

    #{$c}__spinner {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  // --> INTERACTIONS <--

  &:active {
    background-size: 100%;
    transition: background 0s;
  }

  &:focus {
    #{$c}__focuser {
      opacity: 1;
    }
  }
}

</style>
