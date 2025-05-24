"use client";

import { Film, getFilms } from "@/utils/getFilms";
import ProjectsSectionComp from "./projectsSectionComp";
import React, { useEffect, useState } from "react";

const ProjectsSection: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      const data = await getFilms();
      setFilms(data);
      setLoading(false);
    };
    fetchFilms();
  }, []);

  if (loading) return <div>Loading...</div>;

  return <ProjectsSectionComp films={films} />;
};

export default ProjectsSection;
