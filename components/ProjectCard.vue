<template lang="pug">
.card.project-card.bg-dark.border-secondary.overflow-hidden(:class="{horizontal:responsiveHorizontal,vertical:!responsiveHorizontal}")
  div(:class="{row:responsiveHorizontal,'g-0':responsiveHorizontal}")
    div(:class="{'col-4':responsiveHorizontal}")
      img.card-img-top(v-if="props.project.thumbnail" :src="props.project.thumbnail")
      .no-thumbnail(v-else)
        svg(height="100%" width="100%")
          rect(width="100%" height="100%" fill="#888")
          text(x="50%" y="50%" dy=".3em" text-anchor="middle") No thumbnail
    div(:class="{'col-8':responsiveHorizontal}")
      .card-body
        .h6.card-title(v-html="parseMarkdown(props.project.title||'')")
        .h6.mb-2.text-muted.card-subtitle {{props.project.owner}}
        .card-text.text-muted.description(v-html="parseMarkdown(props.project.description||'')")
      NuxtLink.stretched-link(to="/")

</template>

<script setup lang="ts">
import { SFProject } from "~~/composables/SFProject";

const props = withDefaults(
  defineProps<{
    project: SFProject;
    horizontal?: boolean;
    responsive?: boolean;
  }>(),
  { horizontal: false, responsive: true }
);
const responsiveHorizontal = computed(
  () => 576 > window.innerWidth || props.horizontal
);
</script>
<style>
.project-card p {
  overflow: hidden;
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  -webkit-line-clamp: 2;
}
</style>
<style scoped lang="scss">
.card.vertical {
  max-height: 24rem;
}
.card.horizontal {
  height: 8rem;
}
.card-img-top {
  object-fit: cover;
  height: 8rem;
  filter: blur(1px);
}

.horizontal .no-thumbnail {
  height: 8em;
}

.stretched-link:hover::after {
  background-color: rgba(255, 255, 255, 0.1);
}
.stretched-link::after {
  transition: background-color 0.5s;
}
.description {
  font-size: 0.7rem;
  background: white; // linear-gradient(white, transparent);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
