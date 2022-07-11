<template lang="pug">
.dropdown
  i.share-button.bi-share.h3.dropdown-toggle(data-bs-toggle="dropdown")
  ul.dropdown-menu.dropdown-menu-dark.dropdown-menu-end
    li.dropdown-item(@click="openTwitter")
      span.bi-twitter
      span.share Twitter
    li.dropdown-item(@click="openLine")
      span.bi-line
      span.share Line
    li.dropdown-item(@click="copyToClipboard")
      span.bi-clipboard
      span.share Clipboard
</template>

<script setup lang="ts">
const props = defineProps<{ link: string; message?: string }>();
const message = props.message ?? "サレ祭のこの企画が面白い！";
const messageLink = "#サレ祭 #サレ祭2022\n" + message + props.link;
function openTwitter() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + encodeURIComponent(messageLink)
  );
}
function openLine() {
  window.open(
    "https://line.me/R/share?text=" + encodeURIComponent(messageLink)
  );
}
function copyToClipboard() {
  navigator.clipboard.writeText(props.link).then(() => {
    //TODO: SHOW TOAST Copied!
  });
}
</script>

<style scoped lang="scss">
.share-button::after {
  display: none;
}
.share {
  margin-left: 1rem;
}
</style>
