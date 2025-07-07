import { Person } from "@/utils/getPeople";

import React from "react";

interface PersonBubbleProps {
  person: Person;
  size: number; // pixels
  top: number; // %
  left: number; // %
}

const PersonBubble: React.FC<PersonBubbleProps> = ({
  person,
  size,
  top,
  left,
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="absolute"
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
    >
      <div
        className="rounded-full overflow-hidden"
        style={{
          width: size,
          height: size,
        }}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={person.photo}
          alt={person.name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div
        className="w-full bg-black text-white absolute mt-2 px-3 py-1 left-1/2 top-3/4 -translate-x-1/2 transition-all duration-300 text-center z-100 flex flex-col gap-0"
        style={{ opacity: hovered ? "1" : "0" }}
      >
        <h3 className="font-bold mb-0">{person.name}</h3>
        <p className="text-xs text-white/70 mt-0">{person.role}</p>
      </div>
    </div>
  );
};

interface ColorBubbleProps {
  size: number;
  top: number;
  left: number;
  colorClass: string;
}

const ColorBubble: React.FC<ColorBubbleProps> = ({
  size,
  top,
  left,
  colorClass,
}) => (
  <div
    className={`absolute rounded-full ${colorClass}`}
    style={{
      width: size,
      height: size,
      top: `${top}%`,
      left: `${left}%`,
    }}
  />
);

interface BubbleFieldProps {
  people: Person[];
  numColorBubbles: number;
}

export const BubbleField: React.FC<BubbleFieldProps> = ({
  people,
  numColorBubbles,
}) => {
  const personBubbles = people.map((person) => ({
    ...person,
    size: 100 + Math.random() * 80, // 60px–140px
    top: Math.random() * 90,
    left: Math.random() * 90,
  }));

  const lobsterColors = [
    "bg-lobster/80",
    "bg-lobster/60",
    "bg-lobster/40",
    "bg-lobster/20",
  ];

  const colorBubbles = Array.from({ length: numColorBubbles }).map(() => ({
    size: 20 + Math.random() * 30, // 20–50px
    top: Math.random() * 90,
    left: Math.random() * 90,
    colorClass: lobsterColors[Math.floor(Math.random() * lobsterColors.length)],
  }));

  return (
    <div className="relative w-full h-full">
      {personBubbles.map((person, i) => (
        <PersonBubble
          key={`person-${i}`}
          person={person}
          size={person.size}
          top={person.top}
          left={person.left}
        />
      ))}
      {colorBubbles.map((bubble, i) => (
        <ColorBubble
          key={`color-${i}`}
          size={bubble.size}
          top={bubble.top}
          left={bubble.left}
          colorClass={bubble.colorClass}
        />
      ))}
    </div>
  );
};

interface PeopleSectionProps {
  people: Person[];
}

const PeopleSectionComp: React.FC<PeopleSectionProps> = ({ people }) => {
  return <BubbleField people={people} numColorBubbles={10} />;
};

export default PeopleSectionComp;
