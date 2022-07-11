import sanitizeHtml from "sanitize-html";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

export default (src: string) => sanitizeHtml(marked.parse(src));
