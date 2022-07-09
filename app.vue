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
</script>

<style lang="scss">
// Default variable overrides

$light: #dddddd;
$dark: #181b2c;

$body-bg: #181b2c;
$body-color: #fff;

@import "../node_modules/bootstrap/scss/bootstrap";

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
