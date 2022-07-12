<template lang="pug">
.form-container
  Head
    Title Editor
  h1.title 企画の詳細
  div
    label.form-label(for="input-title") タイトル
    input#input-title.form-control(v-model="data.title" placeholder="タイトル...")
  div
    label.form-label(for="input-description") 詳細
    FlexMonospaceEditor#input-description.form-control(v-model="data.description" placeholder="Markdown記法が利用できます")
  div
    label.form-label(for="input-tags") タグ(検索キーワードとして参照されます。)
    VSelect(v-model="(data.tags)" multiple :options="searchingText?[searchingText]:[]" @search="onTagTextInput")
      template(#no-options) タグを入力してEnter
  div
    label.form-label(for="input-owner") 所属
    input#input-owner.form-control(v-model="data.owner" placeholder="一意の所属名")
  div
    label.form-label(for="input-type") コンテンツタイプ
    select#input-type.form-control(v-model="data.type")
      option(:value="undefined" disabled) 選択してください
      option(value="none") 無し
      option(value="youtube") Youtube
      option(value="drive") GoogleDrive
      option(value="github") Github
      option(value="gist") Gist
      option(value="iframe") サイト埋め込み
  div
    label.form-label(for="input-id") ファイルID
    input#input-id.form-control(v-model="data.id" placeholder="ファイル、動画のID")
  div
    label.form-label(for="input-thumbnail") サムネイルURL
    .input-group
      input#input-thumbnail.form-control(v-model="data.thumbnail" placeholder="サムネイル画像のURLを指定。JPEG>2MBを推奨。")
      button.btn.btn-secondary(v-if="isIdExtractable" @click="extractId") ファイルIDから抽出
  div
    label.form-label(for="input-ratio") コンテンツの比率
    input#input-ratio.form-control(v-model="data.ratio" placeholder="「height/width%」を入力。%以外にもCSSで使用できる単位が使用可能。")
  .row
    div.col
      button.btn.btn-outline-primary.w-100(@click="data={}") Reset
    RouterLink.col.ms-auto(:to="{ path: '/preview', query: { ...data } }")
      button.btn.btn-primary.w-100 Go!
</template>

<script setup lang="ts">
import { SFProject } from "~~/composables/SFProject";
const VSelect = useVSelect();
const searchingText = ref("");
function onTagTextInput(search: string) {
  searchingText.value = search;
}
const data = useCookie<SFProject>("project", {
  default: () => ({}),
});
let timeoutId: number | null = null;
watch(
  data,
  () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(() => {
      const saveCookie = useCookie<SFProject>("project");
      saveCookie.value = data.value;
    }, 1000);
  },
  { deep: true }
);
const isIdExtractable = computed(() => data.value.type === "youtube");
async function extractId() {
  if (data.value.type === "youtube") {
    data.value.thumbnail = `https://img.youtube.com/vi/${data.value.id}/default.jpg`;
  }
}
</script>

<style scoped lang="scss">
.form-container > :not(:last-child) {
  margin-bottom: 1rem;
}
</style>
