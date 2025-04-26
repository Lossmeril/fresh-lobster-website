// app/posts/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

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
      <section className="h-screen bg-white overflow-x-hidden flex flex-col items-center justify-center">
        <h1 className="text-black font-bold text-6xl mb-3">{data.title}</h1>
        <p>{data.published}</p>
        <article className="prose">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}
