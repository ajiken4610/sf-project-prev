<template lang="pug">
NuxtLink(:to="$props.link")
  button.btn.btn-outline-primary.mb-2
    Markdown(unwrap="p" :use="$slots.default")
</template>
<script setup lang="ts">
defineProps<{ link: string }>();
</script>
