export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/editor") {
    return navigateTo("/editor/title/description/owner/thumbnail/type/id");
  }
});
