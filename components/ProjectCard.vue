<template lang="pug">
// BCard(:title="props.project.title" :subTitle="props.project.owner" :img-src="props.project.thumbnail" text-variant="light" bg-variant="transparent" border-variant="light")
.card.bg-dark.border-secondary.overflow-hidden
  img.card-img-top(v-if="props.project.thumbnail" :src="props.project.thumbnail")
  .no-thumbnail(v-else)
    svg(height="100%" width="100%")
      rect(width="100%" height="100%" fill="#888")
      text(x="50%" y="50%" dy=".3em" text-anchor="middle") No thumbnail
  .card-body
    .h5.card-title(v-html="$parseMarkdown(props.project.title||'')")
    .h6.mb-2.text-muted.card-subtitle {{props.project.owner}}
    .card-text.text-muted.description(v-html="$parseMarkdown(props.project.description||'')")
  NuxtLink.stretched-link(to="/")

</template>

<script setup lang="ts">
import { SFProject } from "@/types/SFProject";
const { $parseMarkdown } = useNuxtApp();
const props = defineProps<{ project: SFProject }>();
</script>

<style scoped lang="scss">
.card {
  height: 18rem;
}
.card-img-top {
  object-fit: cover;
  height: 10rem;
  filter: blur(1px);
}

.stretched-link:hover::after {
  background-color: rgba(255, 255, 255, 0.1);
}
.stretched-link::after {
  transition: background-color 0.5s;
}
.description {
  font-size: 0.7rem;
  background: linear-gradient(white, transparent 3rem);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
