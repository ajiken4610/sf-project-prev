<template lang="pug">
div
  Head
    Title Error occured
  Body
    h1 Error
    div 予期せぬエラーが発生しました。
    Button.btn.btn-primary(@click="handleError") トップに戻る
</template>

<script setup lang="ts">
const props = defineProps<{ error: Object }>();
console.log(props.error);
const handleError = () => {
  clearError({ redirect: "/" });
};
</script>
