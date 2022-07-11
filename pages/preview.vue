<template lang="pug">
div
  Head
    Title {{data.title}}
  .project-wrapper
    .iframe-wrapper(v-if="data.type !== 'none'")
      img(v-if="data.thumbnail" :src="data.thumbnail")
      .position-absolute.d-table.h-100.w-100 
        .display-1.d-table-cell.align-middle.text-center Loading...
      iframe(v-if="allowLoad" :src="frameLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .title-owner-wrapper
      span.text-muted.tag(v-if="data.tags" v-for="tag in data.tags") {{"#"+tag}}
      ShareButton.float-end(link="sfsitepreview.web.app")
      .h5(v-html="parseMarkdown(data.title||'')")
      .text-muted {{data.owner}}
      
    hr
    .description-wrapper
      div(v-html="parseMarkdown(data.description||'')")
  hr.my-5
  .card-wrapper
    .h4 カード表示プレビュー
    .row.row-cols-1.row-cols-sm-2.row-cols-lg-4.g-4
      .col
        ProjectCard(:project="data")
      .col
        ProjectCard(:project="data")
      .col
        ProjectCard(:project="data")
      .col
        ProjectCard(:project="data")
    hr
    .horizontal-card-wrapper
      ProjectCard(:project="data" :horizontal="true")
      ProjectCard(:project="data" :horizontal="true")
      ProjectCard(:project="data" :horizontal="true")
      ProjectCard(:project="data" :horizontal="true")
</template>

<script setup lang="ts">
import { Buffer } from "buffer";
import { SFProject } from "~~/composables/SFProject";
// import { Popover } from "bootstrap";
// const shareButton = ref<null | HTMLAnchorElement>(null);
// const shareButtonPopover = ref<null | Popover>(null);
// onMounted(() => {
//   nextTick(() => {
//     if (shareButton.value !== null) {
//       shareButtonPopover.value = new Popover(shareButton.value, {
//         trigger: "focus",
//       });
//     }
//   });
// });

const route = useRoute();
const data = {
  ...({
    title: "No title",
    description: "No description",
    owner: "No owner",
    thumbnail: "",
    type: "none",
    id: "",
    ratio: "",
    tags: [],
  } as SFProject),
  ...route.query,
};
const allowLoad = ref(false);
setTimeout(() => {
  allowLoad.value = true;
}, 2000);
const frameLink = computed(() => {
  let ret = "";
  switch (data.type) {
    case "youtube":
      ret = `https://youtube.com/embed/${data.id}?rel=0`;
      break;
    case "drive":
      ret = `https://drive.google.com/file/d/${data.id}/preview`;
      break;
    case "github":
      ret =
        "data:text/html;base64," +
        Buffer.from(
          `\u003c\u0073\u0063\u0072\u0069\u0070\u0074\u003ewindow.addEventListener("load",function(){var as = document.getElementsByTagName('a');for (var i = 0; i < as.length; i++) {as[i].setAttribute('target', '_blank');}})\u003c\u002f\u0073\u0063\u0072\u0069\u0070\u0074\u003e\u003c\u0073\u0063\u0072\u0069\u0070\u0074\u0020\u0073\u0072\u0063\u003d\u0022https://gist-it.appspot.com/github/${data.id}\u0022\u003e\u003c\u002f\u0073\u0063\u0072\u0069\u0070\u0074\u003e`
        ).toString("base64");
      break;
    case "gist":
      ret =
        "data:text/html;base64," +
        Buffer.from(
          `\u003c\u0073\u0063\u0072\u0069\u0070\u0074\u003ewindow.addEventListener("load",function(){var as = document.getElementsByTagName('a');for (var i = 0; i < as.length; i++) {as[i].setAttribute('target', '_blank');}})\u003c\u002f\u0073\u0063\u0072\u0069\u0070\u0074\u003e\u003c\u0073\u0063\u0072\u0069\u0070\u0074\u0020\u0073\u0072\u0063\u003d\u0022https://gist.github.com/${data.id}.js\u0022\u003e\u003c\u002f\u0073\u0063\u0072\u0069\u0070\u0074\u003e`
        ).toString("base64");
      break;
    case "iframe":
      ret = data.id || "";
      break;
  }
  return ret;
});

const defaultRatio = computed(
  () => ({ youtube: "56.25%" }?.[route.query.type?.toString() || ""] || "100%")
);
</script>

<style scoped lang="scss">
.iframe-wrapper {
  position: relative;
  padding-bottom: min(90vh, v-bind("data.ratio || defaultRatio"));
  height: 0;
  overflow: hidden;
  border-radius: 5px;
  background-color: rgba(127, 127, 127, 0.5);
}
.iframe-wrapper > iframe,
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.iframe-wrapper > img {
  filter: blur(10px);
}

.project-wrapper > :not(:last-child) {
  margin-bottom: 1rem;
}
.tag:not(:first-child) {
  padding-left: 0.25em;
}
.horizontal-card-wrapper > * {
  max-width: 24rem;
}
.horizontal-card-wrapper > :not(:last-child) {
  margin-bottom: 1.5rem;
}
</style>
