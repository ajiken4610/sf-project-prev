<template lang="pug">
NuxtPage.container.my-4
</template>
<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | SF Preview` : "Salesio Festa Preview";
  },
});
</script>

<style lang="scss">
@import "bootstrap";
@import "assets/style.scss";
</style>
