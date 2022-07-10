export class SFProject {
  title?: string;
  description?: string;
  owner?: string;
  type?: "none" | "youtube" | "drive" | "github" | "gist" | "iframe";
  id?: string;
  thumbnail?: string;
  ratio?: string;
  tags?: string[];
}
