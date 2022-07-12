<template lang="pug">
.markdown-viewer(v-html="parsedHtml")
</template>

<script lang="ts">
import { Slugger } from "marked";
let rootSlugger = new Slugger();
document.addEventListener(
  "click",
  (e) => {
    let el = e.target as HTMLElement;
    while (el && !el.matches("body")) {
      if (el.matches(".markdown-viewer a[href]")) {
        e.preventDefault();
        const href = el.getAttribute("href") || "";
        if (href.match(/^https?:\/\/.*$/g)) {
          window.open(href);
        } else if (href.match(/^#.*$/g)) {
          location.hash = href.substring(1);
        } else {
          useRouter().push(href);
        }
        break;
      }
      el = el.parentNode as HTMLElement;
    }
  },
  false
);
let initialized = false;
</script>

<script setup lang="ts">
import sanitizeHtml from "sanitize-html";
import { marked } from "marked";
import hljs from "highlight.js";

const props = defineProps<{ src: string }>();
if (!initialized) {
  useRouter().afterEach(() => {
    rootSlugger = new Slugger();
  });
  initialized = true;
}
const renderer = new marked.Renderer();
let slugger = new Slugger();
renderer.heading = (text, level, raw) => {
  const regex = /\s*{{(.*)}}/;
  const regexResult = raw.match(regex);
  let addon = regexResult ? regexResult?.[1] || "" : "";
  if (addon) {
    addon = addon.replaceAll("'", '"');
    return `<a ${addon}>${text.replace(regex, "")}</a>`;
  } else {
    const escapedText = text.toLowerCase().replace(/"+/g, "-");
    const id = rootSlugger.slug(slugger.slug(escapedText));
    return `<h${level} id="${id}"><a href="#${id}">${text}</a></h${level}>`;
  }
};

renderer.table = (header, body) => {
  if (body) body = `<tbody>${body}</tbody>`;

  return `<table class="table"><thead>${header}</thead>${body}</table>`;
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
    table: ["table"],
    a: ["*"],
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

onMounted(() => {
  const hash = useRoute().hash;
  if (hash && hash.match(/^#.+$/)) {
    location.hash = "";
    location.hash = hash;
  }
});
</script>

<style scoped lang="scss">
.markdown-viewer:deep(pre) {
  background-color: #111;
  padding: 1rem;
  border-radius: 5px;
}
.markdown-viewer:deep(img) {
  display: block;
  width: 75%;
  margin: auto;
  border-radius: 5px;
}
</style>
