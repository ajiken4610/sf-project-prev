<template lang="pug">
NuxtLayout
  NuxtPage.my-4.container(key="content")
</template>
<script setup lang="ts">
import "bootstrap";
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | SF Preview` : "Salesio Festa Preview";
  },
});

// アニメーション中にあーだこーだされるとバグる対策、window@popstateイベントで何とかできないかね。
const messages = [
  `Uncaught NotFoundError: Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.`, // chromium based
  `NotFoundError: The object can not be found here.`, // safari
];
if (typeof window !== "undefined") {
  window.addEventListener("error", (ev) => {
    if (messages.includes(ev.message)) {
      ev.preventDefault();
      window.location.reload();
    }
  });
}
</script>

<style lang="scss">
// Default variable overrides

$light: #dddddd;
$dark: #181b2c;

$body-bg: #181b2c;
$body-color: #fff;

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

$custom-colors: (
  "sfsite": #181b2c,
);

$theme-colors: map-merge($theme-colors, $custom-colors);

a,
a:hover {
  color: $body-color;
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
