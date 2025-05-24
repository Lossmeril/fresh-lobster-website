import { Film } from "@/utils/getFilms";

interface ProjectsSectionProps {
  films: Film[];
}

const ProjectsSectionComp: React.FC<ProjectsSectionProps> = ({ films }) => {
  return (
    <>
      {films.map((film) => (
        <div key={film.slug}>{film.title}</div>
      ))}
    </>
  );
};

export default ProjectsSectionComp;
