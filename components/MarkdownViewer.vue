<template lang="pug">
.markdown-viewer(v-html="parsedHtml")
</template>

<script lang="ts">
import { Slugger } from "marked";
const rootSlugger = new Slugger();
</script>

<script setup lang="ts">
import sanitizeHtml from "sanitize-html";
import { marked } from "marked";
import hljs from "highlight.js";
const props = defineProps<{ src: string }>();

const renderer = new marked.Renderer();
let slugger = new Slugger();
renderer.heading = (text, level) => {
  const escapedText = text.toLowerCase().replace(/"+/g, "-");
  const id = rootSlugger.slug(slugger.slug(escapedText));
  return `<h${level} id="${id}"><a href="#${id}">${text}</a></h${level}>`;
};

const markedOptions = {
  renderer,
  breaks: true,
  langPrefix: "",
  highlight: function (code: string, lang: string) {
    return hljs.highlightAuto(code, [lang]).value;
  },
};
const sanitizeHtmlOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    ...{
      h1: ["id"],
      h2: ["id"],
      h3: ["id"],
      h4: ["id"],
      h5: ["id"],
      h6: ["id"],
    },
  },
  allowedClasses: {
    "*": ["hljs-*"],
  },
};

const parsed: { [key: string]: string } = {};

const parsedHtml = computed(() => {
  const src = props.src;
  slugger = new Slugger();
  if (src in parsed) {
    return parsed[src];
  }
  return (parsed[src] = sanitizeHtml(
    marked.parse(src, markedOptions),
    sanitizeHtmlOptions
  ));
});
</script>

<style scoped lang="scss">
.markdown-viewer:deep(pre) {
  background-color: #111;
  padding: 1rem;
  border-radius: 5px;
}
</style>
