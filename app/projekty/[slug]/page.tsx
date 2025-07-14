// app/posts/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface FilmProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const files = fs.readdirSync("content/films");
  return files
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join("content/films", filename),
        "utf-8"
      );
      const { data } = matter(fileContent);
      return {
        slug: filename.replace(".md", ""),
        draft: data.draft || false,
      };
    })
    .filter((film) => !film.draft);
}

export default async function FilmPage({ params }: FilmProps) {
  const filePath = path.join("content/films", `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return (
    <main className="max-w-screen overflow-x-hidden">
      <section className="px-[20%] py-12 mt-20 bg-white overflow-x-hidden flex flex-col items-center">
        <a href="/projekty" className="text-lobster text-lg mb-6">
          ← Zpět na projekty
        </a>
        {data.still && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={data.still}
            alt={`${data.title} still`}
            className="w-full h-64 mb-10 object-cover"
          />
        )}

        {/* ---- LEVÁ STRANA */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            {data.poster && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={data.poster}
                alt={data.title}
                className="w-full aspect-[210/297] object-stretch mb-6 md:mb-0"
              />
            )}
          </div>
          <div className="col-span-1 md:col-span-2 flex flex-col">
            {/* Title and Year */}
            <h1 className="text-black font-bold text-4xl mb-2">{data.title}</h1>
            {data.release_year && (
              <p className="text-gray-600 mb-2">{data.release_year}</p>
            )}

            {/* Short synopsis */}
            {data.short_synopsis && (
              <p className="mb-4 opacity-65">{data.short_synopsis}</p>
            )}
            {/* Crew */}
            <div className="mb-4">
              {data.director && (
                <div>
                  <span className="font-semibold">Režie:</span> {data.director}
                </div>
              )}
              {data.screenplay && (
                <div>
                  <span className="font-semibold">Scénář:</span>{" "}
                  {data.screenplay}
                </div>
              )}
              {data.camera && (
                <div>
                  <span className="font-semibold">Kamera:</span> {data.camera}
                </div>
              )}
              {data.music && (
                <div>
                  <span className="font-semibold">Hudba:</span> {data.music}
                </div>
              )}
              {data.collaborators &&
                Array.isArray(data.collaborators) &&
                data.collaborators.length > 0 && (
                  <div>
                    <span className="font-semibold">Spolupracovali:</span>{" "}
                    {data.collaborators.map(
                      (c: { name: string }, i: number) => (
                        <span key={c.name}>
                          {c.name}
                          {i < data.collaborators.length - 1 ? ", " : ""}
                        </span>
                      )
                    )}
                  </div>
                )}
              {data.cast && (
                <div>
                  <span className="font-semibold">Hrají:</span>{" "}
                  {data.cast.map((c: { name: string }, i: number) => (
                    <span key={c.name}>
                      {c.name}
                      {i < data.collaborators.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Downloads */}
            {data.downloads &&
              Array.isArray(data.downloads) &&
              data.downloads.length > 0 && (
                <div className="mb-4">
                  <span className="font-semibold">Ke stažení:</span>
                  <ul className="list-disc ml-6">
                    {data.downloads.map((d: { file: string }, i: number) => (
                      <li key={d.file}>
                        <a
                          href={d.file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          Soubor {i + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
          </div>
        </div>

        {/* Long synopsis */}
        {data.long_synopsis && (
          <div className="mt-8">
            <p className="mb-4">{data.long_synopsis}</p>
          </div>
        )}
        {/* Details (markdown) */}
        {data.details && (
          <div className="text-left w-full opacity-65">
            <ReactMarkdown>{data.details}</ReactMarkdown>
          </div>
        )}
        {/* Trailer */}

        {data.trailer_url && (
          <>
            <h2 className="mt-12 text-lobster text-left text-2xl uppercase font-bold">
              Trailer
            </h2>
            <div className="w-1/2 mx-auto mt-4 mb-8">
              <iframe
                src={data.trailer_url.replace("watch?v=", "embed/")}
                title="Trailer"
                className="w-full aspect-video rounded shadow"
                allowFullScreen
              />
            </div>
          </>
        )}
      </section>
    </main>
  );
}
