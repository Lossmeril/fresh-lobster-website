import { Film } from "@/utils/getFilms";

interface ProjectsSectionProps {
  films: Film[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ films }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
      {films.map((film) => (
        <a href={"/films/" + film.slug} key={film.slug}>
          <div className="w-full flex flex-col items-center gap-5 px-10">
            <div className="w-full aspect-[210/297] h-auto relative overflow-hidden shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={film.still}
                alt={film.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full">
              <div className="bg-lobster w-full px-3 py-1">
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
  );
};

export default ProjectsSection;
