import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Button from "../button";

export default async function FilmsSection() {
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
        poster: data.poster,
        title: data.title,
        synopsis: data.synopsis,
        trailer_url: data.trailer_url,
        draft: data.draft,
      };
    })
    .filter((film) => !film.draft);

  return (
    <section className="h-screen bg-white overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[30em]">
        {films.map((film) => (
          <div
            key={film.slug}
            className="overflow-hidden bg-lobster-100 grid place-content-center relative"
          >
            <Image src={film.poster} alt={film.title} fill />
            <div className="p-4">
              <h2 className="text-4xl font-bold uppercase">{film.title}</h2>
              <p className="text-sm">{film.synopsis}</p>

              <div className="flex gap-4 mt-4">
                <Button link={`/films/${film.slug}`} inverse={false}>
                  Read more
                </Button>

                <Button link={film.trailer_url} inverse={true}>
                  Watch trailer
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
