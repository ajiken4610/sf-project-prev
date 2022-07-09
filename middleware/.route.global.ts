export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === "/editor") {
    const title = useCookie("title").value ?? "title";
    return navigateTo(`/editor/${title}/description/owner/thumbnail/type/id`);
  }
});
