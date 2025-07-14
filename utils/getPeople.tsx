"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Person = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  workedOn: { name: string }[];
  draft?: boolean;
};

export async function getPeople(): Promise<Person[]> {
  const dir = path.join(process.cwd(), "content/people");
  const files = fs.readdirSync(dir);

  return files
    .map((filename): Person => {
      const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(".md", ""),
        name: data.name,
        role: data.role,
        photo: data.photo || "",
        workedOn: data.workedOn || [],
        draft: data.draft || false,
      };
    })
    .filter((film) => !film.draft);
}
