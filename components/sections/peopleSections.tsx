"use client";

import { Person, getPeople } from "@/utils/getPeople";

import React, { useEffect, useState } from "react";
import PeopleSectionComp from "./peopleSectionComp";

const PeopleSection: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFilms = async () => {
      const data = await getPeople();
      setPeople(data);
      setLoading(false);
    };
    fetchFilms();
  }, []);

  if (loading) return <div>Načítám spolupracovníky...</div>;

  return <PeopleSectionComp people={people} />;
};

export default PeopleSection;
