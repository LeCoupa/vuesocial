<!-- *************************************************************************
     TEMPLATE
     ************************************************************************* -->

<template lang="pug">
button(
  @click="onClick"
  :class=`[
    "gb-social-button",
    "gb-social-button--" + network,
    "gb-social-button--" + size,
    "gb-social-button--" + computedTheme,
    {
      "gb-social-button--disabled": disabled || loading,
      "gb-social-button--full-width": fullWidth,
      "gb-social-button--loading": loading
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
      span.gb-social-button__icon

      span.gb-social-button__label
        slot
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
    disabled: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    network: {
      type: String,
      required: true,
      validator(x) {
        return ["facebook", "google", "messenger", "shopify", "twitter"].includes(x)
      }
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["nano", "micro", "mini", "small", "default", "medium", "large"].includes(x)
      }
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
$networks: "facebook", "google", "messenger", "shopify", "twitter";
$sizes: "nano", "micro", "mini", "small", "default", "medium", "large";

#{$c} {
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-position: center;
  box-shadow: inset -1px 1px 0 0 rgba(255, 255, 255, 0);
  color: mdg($dark, "colors", "white");
  font-family: "Heebo", "Helvetica Neue", Source Sans Pro, Helvetica, Arial, sans-serif;
  transition: all 250ms linear;
  user-select: none;
  cursor: pointer;

  #{$c}__inner {
    display: flex;
    align-items: center;
    justify-content: center;

    #{$c}__icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-repeat: no-repeat;
    }

    #{$c}__label {
      margin-left: 6px;
      font-weight: 500;
    }
  }

  // --> NETWORKS <--

  @each $network in $networks {
    &--#{$network} {
      background: map-get($socialColors, $network)
        radial-gradient(circle, transparent 1%, map-get($socialColors, $network) 1%)
        center/15000%;

      &:hover {
        &:not(#{$c}--disabled) {
          background-color: lighten(map-get($socialColors, $network), 10%);
        }
      }

      &:active {
        &:not(#{$c}--disabled) {
          background-color: lighten(map-get($socialColors, $network), 10%);
        }
      }

      &:focus {
        box-shadow: 0 0 0 2px mdg($dark, "backgrounds", "default", "primary"),
          0 0 0 3px map-get($socialColors, $network);
      }
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
