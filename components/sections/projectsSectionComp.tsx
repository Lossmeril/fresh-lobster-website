import { Film } from "@/utils/getFilms";

interface ProjectsSectionProps {
  films: Film[];
}

const ProjectsSectionComp: React.FC<ProjectsSectionProps> = ({ films }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4 mx-auto">
      {films.map((film) => (
        <div
          key={film.slug}
          className="w-full flex flex-col items-center gap-5 px-10"
        >
          <div className="w-full aspect-[210/297] h-auto relative overflow-hidden shadow-md">
            <img
              src={film.still}
              alt={film.title}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h3 className="text-xl font-semibold">{film.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSectionComp;
