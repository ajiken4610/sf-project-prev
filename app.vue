<template lang="pug">
NuxtLayout
  NuxtPage.my-4.container(key="content")
LoadingOverlay
</template>
<script setup lang="ts">
import "bootstrap";
import { Synchronizer, Sleeper } from "./composables/Utils";
const router = useRouter();
const synchronizer = new Synchronizer();
router.beforeEach((to, from, next) => {
  if (to.path === from.path) {
  } else {
    synchronizer.synchronized(async () => {
      next();
      await Sleeper.sleep(2000);
    });
  }
});
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | SF Preview` : "Salesio Festa Preview";
  },
});
</script>

<style lang="scss">
@import "highlight.js/scss/github-dark.scss";
// Default variable overrides
$light: #dddddd;
$dark: #181b2c;

$body-bg: #181b2c;
$body-color: #fff;

$component-active-color: $body-color;
$component-active-bg: $body-bg;

$popover-bg: $body-bg;
$popover-border-color: $body-color;

$card-height: 100%;

:root {
  --vs-controls-color: #ffffff;
  --vs-border-color: #ffffff;

  --vs-dropdown-bg: #181b2c;
  --vs-dropdown-color: #ffffff;
  --vs-dropdown-option-color: #ffffff;

  --vs-selected-bg: #181b2c;
  --vs-selected-color: #ffffff;

  --vs-search-input-color: #ffffff;

  --vs-dropdown-option--active-bg: #2d3353;
  --vs-dropdown-option--active-color: #ffffff;
}
@import "../node_modules/bootstrap/scss/bootstrap";

@import "vue-select/dist/vue-select.css";

@import "bootstrap-icons/font/bootstrap-icons.scss";

$custom-colors: (
  "sfsite": #181b2c,
);

$theme-colors: map-merge($theme-colors, $custom-colors);

a,
a:hover {
  color: $body-color;
}

a:not(:hover) {
  text-decoration: none;
}

html::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

html::-webkit-scrollbar-track {
  background: rgba(128, 128, 128, 0.5);
  border-radius: 3px;
  padding: 6px;
}

html::-webkit-scrollbar-thumb {
  background: #292929;
  border-radius: 3px;
  border-top: solid 3px white;
  border-bottom: solid 3px white;
}

html {
  overflow-y: scroll;
}
</style>
