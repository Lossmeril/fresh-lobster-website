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
        zIndex: hovered ? 20 : 10,
      }}
    >
      <div
        className="rounded-full overflow-hidden z-10"
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
        className="w-40 bg-black text-white absolute mt-2 px-3 py-1 left-1/2 top-3/4 -translate-x-1/2 transition-all duration-300 text-center flex flex-col gap-0 pointer-events-none z-20]"
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
    className={`absolute rounded-full z-0 ${colorClass} pointer-events-none`}
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

export const BubbleField: React.FC<BubbleFieldProps> = ({ people }) => {
  const personBubbles = [
    { person: people[0] || {}, size: 120, top: 15, left: 20 },
    { person: people[0] || {}, size: 140, top: 50, left: 30 },
    { person: people[0] || {}, size: 100, top: 25, left: 60 },
    { person: people[0] || {}, size: 130, top: 65, left: 70 },
    { person: people[0] || {}, size: 110, top: 40, left: 50 },
  ];

  const lobsterColors = [
    "bg-lobster/80",
    "bg-lobster/60",
    "bg-lobster/40",
    "bg-lobster/20",
  ];

  const colorBubbles = [
    { size: 30, top: 10, left: 10, colorClass: lobsterColors[0] },
    { size: 80, top: 20, left: 40, colorClass: lobsterColors[1] },
    { size: 35, top: 30, left: 80, colorClass: lobsterColors[2] },
    { size: 40, top: 60, left: 15, colorClass: lobsterColors[3] },
    { size: 20, top: 70, left: 50, colorClass: lobsterColors[0] },
    { size: 60, top: 85, left: 30, colorClass: lobsterColors[1] },
    { size: 25, top: 45, left: 85, colorClass: lobsterColors[2] },
    { size: 35, top: 75, left: 75, colorClass: lobsterColors[3] },
    { size: 55, top: 35, left: 25, colorClass: lobsterColors[0] },
    { size: 20, top: 80, left: 90, colorClass: lobsterColors[1] },
  ];

  return (
    <div className="relative w-full h-full">
      {personBubbles.map((person, i) => (
        <PersonBubble
          key={`person-${i}`}
          person={person.person}
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
