import React from "react";
import {
  PiFile,
  PiFilmSlate,
  PiKey,
  PiLightbulb,
  PiMegaphone,
} from "react-icons/pi";

export type UspPoint = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const uspPoints: UspPoint[] = [
  {
    title: "Výroba filmů, seriálů, TV pořadů ",
    description: "Od vývoje po premiéru.",
    icon: <PiFilmSlate />,
  },
  {
    title: "Scénářová spolupráce a dramaturgie",
    description: "Pomáháme obsahu růst.",
    icon: <PiFile />,
  },
  {
    title: "Vývoj formátů a konceptů",
    description: "Když klient hledá tvar pro myšlenku.",
    icon: <PiLightbulb />,
  },
  {
    title: "Produkce na klíč",
    description: "Kompletní zajištění audiovizuálních projektů.",
    icon: <PiKey />,
  },
  {
    title: "Reklamy a kampaně",
    description: "Jen pokud to má smysl.",
    icon: <PiMegaphone />,
  },
];

export const UspSection: React.FC = () => {
  return (
    <section className="w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-[10%] py-8">
        {uspPoints.map((point, index) => (
          <div key={index} className="text-center p-4">
            <div className="w-20 h-20 mx-auto mb-6 grid place-content-center text-white text-5xl blob-animated bg-lobster">
              {point.icon}
            </div>
            <h3 className="text-black font-bold text-2xl mb-3 leading-none">
              {point.title}
            </h3>
            <p className="opacity-65">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
