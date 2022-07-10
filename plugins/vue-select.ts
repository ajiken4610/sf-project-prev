import vSelect from "vue-select";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      vSelect,
    },
  };
});
