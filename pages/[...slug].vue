<template lang="pug">
div.container.my-4
  ContentDoc
    template(#empty) No content available on "{{ $route.fullPath }}"
      Title No Content
    template(#not-found) "{{ $route.fullPath }}" is not found on this page.
      Title Not Found
</template>

<style lang="scss"></style>
