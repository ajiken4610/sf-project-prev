<template lang="pug">
NuxtPage
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
