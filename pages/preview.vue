<template lang="pug">
.project-wrapper
  .iframe-wrapper(v-if="data.type !== 'none'")
    iframe(:src="frameLink" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  .title-owner-wrapper
    .h5(v-html="$parseMarkdown(data.title)")
    .text-muted {{data.owner}}
  hr
  .description-wrapper
    div(v-html="$parseMarkdown(data.description)")
</template>

<script setup lang="ts">
import { Buffer } from "buffer";
const { $parseMarkdown } = useNuxtApp();
const route = useRoute();
const data = {
  ...{
    title: "No title",
    description: "No description",
    owner: "No owner",
    thumbnail: null,
    type: "none",
    id: "",
    ratio: "",
  },
  ...route.query,
};
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
      ret = data.id;
      break;
  }
  return ret;
});

const defaultRatio = computed(
  () => ({ youtube: "56.25%" }?.[route.query.type?.toString()] || "100%")
);
</script>

<style scoped lang="scss">
.iframe-wrapper {
  position: relative;
  padding-bottom: v-bind("data.ratio || defaultRatio");
  height: 0;
  overflow: hidden;
  border-color: #fff;
  border-radius: 5px;
  background-color: rgba(127, 127, 127, 0.5);
}
.iframe-wrapper > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.project-wrapper > :not(:last-child) {
  margin-bottom: 1rem;
}
</style>
