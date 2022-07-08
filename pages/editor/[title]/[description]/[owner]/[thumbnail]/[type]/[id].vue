<template lang="pug">
.form-container
  h1.title 企画の詳細
  div
    label.form-label(for="input-title") タイトル
    input#input-title.form-control(v-model="data.title")
  div
    label.form-label(for="input-description") 詳細
    FlexTextarea#input-description.form-control(v-model="data.description")
</template>
<script setup lang="ts">
const route = useRoute();
const data = reactive({
  title:
    typeof route.params.title === "string"
      ? route.params.title
      : route.params.title.join(),
  description:
    typeof route.params.description === "string"
      ? route.params.description
      : route.params.description.join(),
  owner:
    typeof route.params.owner === "string"
      ? route.params.owner
      : route.params.owner.join(),
  thumbnail:
    typeof route.params.thumbnail === "string"
      ? route.params.thumbnail
      : route.params.thumbnail.join(),
  type:
    typeof route.params.type === "string"
      ? route.params.type
      : route.params.type.join(),
  id:
    typeof route.params.id === "string"
      ? route.params.id
      : route.params.id.join(),
});
watch(
  data,
  () => {
    console.log(data);
  },
  { deep: true }
);
</script>

<style scoped lang="scss">
.form-container > :not(:last-child) {
  margin-bottom: 1rem;
}
</style>
