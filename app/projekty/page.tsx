import SubPageHeader from "@/components/subPageHeader";
import { getFilms } from "@/utils/getFilms";
import { Film } from "@/utils/getFilms";

export default async function FilmsPage() {
  const films: Film[] = await getFilms();

  return (
    <main className="min-h-screen w-full bg-white pb-16">
      <SubPageHeader
        title={"Naše projekty"}
        claim={"Každý náš projekt začal jednou větou. A skončil u diváků."}
        description={
          "Od celovečeráků po televizní série. Od mainstreamu po osobní výpovědi. Každý projekt, na kterém jsme pracovali, jsme dotáhli, protože jsme mu věřili."
        }
      />
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-lobster mb-10 text-center uppercase tracking-wide">
          Projekty
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film) => (
            <a
              href={`/projekty/${film.slug}`}
              key={film.slug}
              className="block group"
            >
              <div className="w-full flex flex-col items-center gap-4 px-4">
                <div className="w-full aspect-[210/297] h-auto relative overflow-hidden shadow-md rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={film.still}
                    alt={film.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-full">
                  <div className="bg-lobster w-full px-3 py-1 rounded-t">
                    <h3 className="text-white text-lg font-semibold">
                      {film.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm mt-2">
                    {film.release_date.getFullYear()}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
