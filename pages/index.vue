<template lang="pug">
.index-md
  MarkdownViewer(:src="index")
</template>

<script setup lang="ts">
import index from "assets/index.md?raw";
</script>
