"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Film = {
  slug: string;
  poster: string;
  still: string;
  title: string;
  release_year: number;
  director: string;
  screenplay: string;
  camera: string;
  music: string;
  collaborators: { name: string }[];
  cast: { name: string }[];
  short_synopsis: string;
  long_synopsis: string;
  details: string;
  downloads: { file: string }[];
  trailer_url?: string;
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
        poster: data.poster,
        still: data.still,
        title: data.title,
        release_year: data.release_year,
        director: data.director,
        screenplay: data.screenplay,
        camera: data.camera,
        music: data.music,
        collaborators: data.collaborators || [],
        cast: data.cast || [],
        short_synopsis: data.short_synopsis,
        long_synopsis: data.long_synopsis,
        details: data.details,
        downloads: data.downloads || [],
        trailer_url: data.trailer_url,
        draft: data.draft,
      };
    })
    .filter((film) => !film.draft);
}
