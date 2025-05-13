import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Button from "../button";

export default async function ProjectsSection() {
  const files = fs.readdirSync("content/films");
  const films = files
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join("content/films", filename),
        "utf-8"
      );
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

  return (
    <section id="projekty" className="h-screen bg-white overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[30em]">
        {films.map((film) => (
          <div
            key={film.slug}
            className="overflow-hidden grid place-content-center relative bg-[#888888]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={film.still}
              alt={film.title}
              className="absolute object-cover z-index-0 w-full h-full mix-blend-multiply hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="p-4 z-10 text-center text-white">
              <h2 className="text-4xl font-bold uppercase">{film.title}</h2>
              <p>{new Date(film.release_date).getFullYear()}</p>

              <div className="flex gap-4 mt-4">
                <Button link={`/films/${film.slug}`} inverse={false}>
                  Více o projektu
                </Button>

                <Button link={film.trailer_url} inverse={true}>
                  Pustit trailer
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
