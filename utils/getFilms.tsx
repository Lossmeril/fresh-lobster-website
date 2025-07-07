"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Film = {
  slug: string;
  still: string;
  title: string;
  synopsis: string;
  trailer_url: string;
  release_date: Date;
  draft?: boolean;
};

export async function getFilms(): Promise<Film[]> {
  const dir = path.join(process.cwd(), "content/films");
  const files = fs.readdirSync(dir);

  return files
    .map((filename): Film => {
      const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(".md", ""),
        still: data.still,
        title: data.title,
        synopsis: data.synopsis,
        trailer_url: data.trailer_url,
        release_date: data.release_date,
        draft: data.draft,
      };
    })
    .filter((film) => !film.draft);
}
