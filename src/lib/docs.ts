import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Doc, TOCItem } from "@/types";

const docsDirectory = path.join(process.cwd(), "content/docs");

export function getDocBySlug(locale: string, slug: string[]): Doc | null {
  try {
    const localeDir = path.join(docsDirectory, locale);
    const relativePath = `${slug.join("/")}.mdx`;
    const fullPath = path.join(localeDir, relativePath);
    if (!fs.existsSync(fullPath)) {
      const mdPath = path.join(localeDir, `${slug.join("/")}.md`);
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
  if (!fs.existsSync(dir)) {
    return fileList;
  }
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

export function getAllDocs(locale = "en"): Doc[] {
  const localeDir = path.join(docsDirectory, locale);
  if (!fs.existsSync(localeDir)) {
    return [];
  }
  const filePaths = walk(localeDir);
  const docs: Doc[] = [];
  for (const filePath of filePaths) {
    const relativePath = path.relative(localeDir, filePath);
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

export function extractHeadings(content: string): TOCItem[] {
  const headingRegex = /^(##|###)\s+(.+)$/gm;
  const headings: TOCItem[] = [];
  let match: RegExpExecArray | null = null;
  const regex = new RegExp(headingRegex);

  while (true) {
    match = regex.exec(content);
    if (!match) break;

    const level = match[1].length;
    let label = match[2].trim();

    label = label.replace(/<[^>]+>/g, "").trim();

    const id = label
      .toLowerCase()
      .trim()
      .replace(/[\s\t\n]+/g, "-")
      .replace(/[.,/#!$%^&*;:{}=_`~()?"'<>]/g, "");

    headings.push({ id, label, level });
  }

  return headings;
}
