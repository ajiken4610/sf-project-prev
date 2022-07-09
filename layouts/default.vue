<template lang="pug">
div
  nav.navbar.navbar-expand-lg.navbar-dark.bg-dark.shadow-lg
    .container-fluid
      NuxtLink.navbar-brand(to="/") SF Site Preview
      button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
        span.navbar-toggler-icon
      #navbarSupportedContent.collapse.navbar-collapse
        ul.navbar-nav.me-auto.mb-2.mb-lg-0
          li.nav-item
            NuxtLink.nav-link.active(aria-current='page' to="/editor") Getting started &gt;&gt;&gt;
  slot
  footer.mt-3.py-4.container.animatable(:class="{loading}")
    hr
    div.text-muted.text-end @サレ祭2022
</template>

<script setup lang="ts">
const router = useRouter();
const loading = ref(false);
router.beforeEach((to, from, next) => {
  loading.value = true;
  next();
});
router.afterEach(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

<style scoped lang="scss">
.animatable {
  transition: all 1s;
}
.loading {
  opacity: 0;
}
</style>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 1s ease;
}
.page-enter-from,
.page-leave-to,
.page-leave-active {
  transform: translateY(-100vh);
  opacity: 0;
}

.page-move {
  transition: all 1s ease;
}
</style>
