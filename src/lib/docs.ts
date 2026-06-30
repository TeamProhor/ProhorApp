import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Doc } from "@/types";

const docsDirectory = path.join(process.cwd(), "content/docs");

export function getDocBySlug(slug: string[]): Doc | null {
  try {
    const relativePath = `${slug.join("/")}.mdx`;
    const fullPath = path.join(docsDirectory, relativePath);
    if (!fs.existsSync(fullPath)) {
      const mdPath = path.join(docsDirectory, `${slug.join("/")}.md`);
      if (!fs.existsSync(mdPath)) {
        return null;
      }
      const fileContents = fs.readFileSync(mdPath, "utf8");
      const { data, content } = matter(fileContents);
      return {
        slug,
        metadata: {
          title: data.title || "",
          description: data.description,
          section: data.section,
          order: data.order,
        },
        content,
      };
    }
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug,
      metadata: {
        title: data.title || "",
        description: data.description,
        section: data.section,
        order: data.order,
      },
      content,
    };
  } catch {
    return null;
  }
}

function walk(dir: string, fileList: string[] = []): string[] {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walk(filePath, fileList);
    } else if (file.endsWith(".mdx") || file.endsWith(".md")) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

export function getAllDocs(): Doc[] {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }
  const filePaths = walk(docsDirectory);
  const docs: Doc[] = [];
  for (const filePath of filePaths) {
    const relativePath = path.relative(docsDirectory, filePath);
    const slug = relativePath.replace(/\.mdx?$/, "").split(path.sep);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    docs.push({
      slug,
      metadata: {
        title: data.title || "",
        description: data.description,
        section: data.section,
        order: data.order,
      },
      content,
    });
  }
  return docs.sort(
    (a, b) => (a.metadata.order ?? 99) - (b.metadata.order ?? 99),
  );
}
