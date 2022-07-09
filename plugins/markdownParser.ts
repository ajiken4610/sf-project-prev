import sanitizeHtml from "sanitize-html";
import { marked } from "marked";

export default defineNuxtPlugin(() => {
  marked.setOptions({
    breaks: true,
  });
  return {
    provide: {
      parseMarkdown: (src: string) => sanitizeHtml(marked.parse(src)),
    },
  };
});
