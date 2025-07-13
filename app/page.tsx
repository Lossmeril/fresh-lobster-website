import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "@/components/button";

import ProjectsSection from "@/components/sections/projectsSections";
import PeopleSection from "@/components/sections/peopleSections";
import { UspSection } from "@/components/sections/uspSection";
import ContactSection from "@/components/sections/contactSection";

// gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomePage = () => {
  // const mainCircleRef = useRef(null);
  // const smallCircleRef1 = useRef(null);
  // const smallCircleRef2 = useRef(null);

  // const heroBannerRef = useRef(null);
  // const aboutSectionRef = useRef(null);

  // useEffect(() => {
  //   const indexCircle = mainCircleRef.current;
  //   const smallCircle1 = smallCircleRef1.current;
  //   const smallCircle2 = smallCircleRef2.current;

  //   const heroBanner = heroBannerRef.current;
  //   const aboutSection = aboutSectionRef.current;

  //   gsap.fromTo(
  //     indexCircle,
  //     { scale: 0, y: "100vh", opacity: 1 },
  //     {
  //       ease: "none",
  //       scale: 7,
  //       y: "0vh",
  //       opacity: 1,
  //       duration: 3,
  //       scrollTrigger: {
  //         trigger: heroBanner,
  //         start: "50% center",
  //         end: "100% center",
  //         scrub: true,
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     indexCircle,
  //     { opacity: 1 },
  //     {
  //       opacity: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: heroBanner,
  //         start: "100% top",
  //         end: "100% top",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     smallCircle1,
  //     { scale: 0, y: "30vh", opacity: 1 },
  //     {
  //       ease: "none",
  //       scale: 2,
  //       y: "10vh",
  //       opacity: 1,
  //       duration: 3,
  //       scrollTrigger: {
  //         trigger: heroBanner,
  //         start: "60% center",
  //         end: "100% center",
  //         scrub: true,
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     smallCircle1,
  //     { opacity: 1 },
  //     {
  //       opacity: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: heroBanner,
  //         start: "100% top",
  //         end: "100% top",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     smallCircle2,
  //     { scale: 0, y: "10vh", opacity: 1 },
  //     {
  //       ease: "none",
  //       scale: 5,
  //       y: "10vh",
  //       opacity: 1,
  //       duration: 3,
  //       scrollTrigger: {
  //         trigger: heroBanner,
  //         start: "75% center",
  //         end: "100% center",
  //         scrub: true,
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     smallCircle2,
  //     { opacity: 1 },
  //     {
  //       opacity: 0,
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: heroBanner,
  //         start: "100% top",
  //         end: "100% top",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     aboutSection,
  //     { backgroundColor: "white" },
  //     {
  //       backgroundColor: "#ED1C24",
  //       duration: 1,
  //       scrollTrigger: {
  //         trigger: aboutSection,
  //         start: "top center",
  //         end: "top center",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <>
      <main className="max-w-screen overflow-x-hidden">
        <section
          className="h-screen bg-white overflow-x-hidden"
          // ref={heroBannerRef}
        >
          <div className="absolute top-[50%] left-[10%] translate-y-[-50%] w-[700px] aspect-video z-[30]">
            <h1 className="text-lobster text-left text-2xl uppercase font-bold mt-20">
              Fresh Lobster
            </h1>
            <p className="text-white text-left text-6xl font-bold mt-5">
              Některé projekty se vydupávají z&nbsp;prachu. A&nbsp;o&nbsp;to víc
              stojí za&nbsp;to.
            </p>
            <p className="text-white text-left text-2xl mt-10">
              Fresh Lobster je produkce postavená na&nbsp;lidech, kteří chtějí
              dělat audiovizi s&nbsp;přesahem. Hledáme kvalitu
              v&nbsp;mainstreamu a&nbsp;věříme v&nbsp;kolektivní energii.
              Vyprávíme příběhy, které v&nbsp;nás zůstanou.
            </p>
            <div className="flex flex-row gap-10 mt-10">
              <Button link={"/"} inverse={false}>
                Naše projekty
              </Button>
              <Button link={"/"} inverse>
                Poznej náš příběh
              </Button>
            </div>
          </div>
          <div className="h-full w-full bg-black absolute top-0 left-0 z-20 opacity-50"></div>

          <video
            autoPlay
            loop
            muted
            id="heroVideo"
            className="h-screen w-screen object-cover z-10"
          >
            <source src="/src/video/bg_kun.webm" type="video/webm" />
          </video>
        </section>

        <div
          className="bg-lobster absolute w-80 aspect-square rounded-full scale-0 top-[100vh] left-[50%] -translate-x-1/2 z-30 blob blob-animated"
          // ref={mainCircleRef}
        ></div>
        <div
          className="bg-lobster absolute w-80 aspect-square rounded-full top-[100px] scale-0 left-0 -translate-x-1/2 z-30 blob blob-animated"
          // ref={smallCircleRef1}
        ></div>
        <div
          className="bg-lobster absolute w-80 aspect-square rounded-full top-[300px] scale-0 left-[75%] -translate-x-1/2 z-30 blob blob-animated"
          // ref={smallCircleRef2}
        ></div>

        <section
          className="h-[200vh] bg-lobster relative"
          //ref={aboutSectionRef}
        >
          <div className="absolute top-0 left-0 w-full h-screen z-[50]">
            <div className="w-[50%] mx-auto">
              <h2 className="text-black text-center text-2xl uppercase font-bold mt-20">
                Proč Fresh Lobster?
              </h2>
              <p className="text-white text-center text-6xl font-bold mt-5 leading-[1.2]">
                Nechtěli jsme být jen výrobci.
                <br />
                Chtěli jsme být tvůrci.
              </p>
              <p className="text-white text-center text-xl mt-10 opacity-85 leading-tight">
                Fresh Lobster vznikl z&nbsp;potřeby tvořit jinak. Lidsky.
                Poctivě. Kristýna Drozdová a&nbsp;Ludvík Mareček&mdash;dvě
                osobnosti, dvě cesty, které se potkaly na místě, kde nestačí
                „jen to natočit“. Chtěli stát u&nbsp;zrodu projektů, které mají
                vnitřní tah. A&nbsp;přetavit vlastní zkušenosti v&nbsp;něco, co
                bude mít duši.
              </p>
              <div className="flex flex-row justify-center mt-10 gap-5">
                <Button link={"/"} inverse>
                  Více o našem příběhu
                </Button>
                <Button link={"/"} inverse>
                  Jaké příběhy jsme vyprávěli
                </Button>
              </div>
            </div>

            <div className="w-3/4 mx-auto flex flex-col gap-16 mt-20">
              {/* Ludvík Mareček subsection */}
              <div className="h-80 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="order-2 md:order-1 flex flex-col justify-center items-start p-6">
                  <blockquote className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
                    „Já jsem producent, ale zajímá mě obsah. Ne tabulka.“
                  </blockquote>
                  <span className="text-white text-xl md:text-2xl font-semibold">
                    — Ludvík Mareček
                  </span>
                </div>
                <div className="order-1 md:order-2 flex justify-center items-center p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/src/images/ludvik-marecek.jpg"
                    alt="Ludvík Mareček"
                    className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                  />
                </div>
              </div>

              {/* Kristýna Drozdová subsection */}
              <div className="h-80 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="flex justify-center items-center p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/src/images/kristyna-drozdova.jpg"
                    alt="Kristýna Drozdová"
                    className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-start p-6">
                  <blockquote className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
                    „Pro mě je zásadní kolektiv. Když to nefunguje mezi lidmi,
                    nevznikne nic dobrého.“
                  </blockquote>
                  <span className="text-white text-xl md:text-2xl font-semibold">
                    — Kristýna Drozdová
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* ---------------------- PROJEKTY ---------------------- */}
        {/* ------------------------------------------------------ */}

        <section className="h-[100vh] bg-white relative">
          <h2 className="text-lobster text-center text-2xl uppercase font-bold mt-20">
            Naše projekty
          </h2>
          <p className="text-black text-center text-6xl font-bold mt-5 leading-[1.1]">
            Vydupáno z prachu.
            <br />
            Natočeno srdcem.
          </p>
          <p className="text-center text-xl mt-5 mb-10 w-1/2 mx-auto opacity-65 leading-tight">
            Od Špuntů na&nbsp;vodě přes Deníček moderního fotra
            po&nbsp;televizní cykly a&nbsp;kampaně. Každý náš projekt je
            jedinečný&mdash;protože za&nbsp;ním stojí lidé, kterým na&nbsp;něm
            záleží. Známe každý kámen na&nbsp;place. A&nbsp;víme, proč tam je.
          </p>

          <ProjectsSection />

          <div className="flex flex-row justify-center mt-10 gap-5">
            <Button link={"/"} inverse={false}>
              Prohlédnout všechny projekty
            </Button>
            <Button link={"/"} inverse={false}>
              Kdo s námi spolupracuje
            </Button>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* ---------------------- SPOLUPRACOVNÍCI ---------------------- */}
        {/* ------------------------------------------------------------- */}

        <section className="h-[100vh] bg-white relative flex p-[10%] gap-10">
          <div className="w-[50%] mx-auto flex flex-col justify-center items-start">
            <h2 className="text-lobster text-left text-2xl uppercase font-bold mt-20">
              Koho máme kolem sebe
            </h2>
            <p className="text-black text-left text-6xl font-bold mt-5 leading-[1.1]">
              Tvoříme s lidmi,
              <br />
              kterým věříme.
            </p>
            <p className="text-left text-xl mt-5 mb-10  mr-auto opacity-65 leading-tight">
              Filmový štáb není parta náhodných techniků. Je to&nbsp;organismus.
              Každý člověk má svůj otisk, a my si dáváme záležet, koho
              k&nbsp;sobě pouštíme. Protože dobrý projekt začíná u&nbsp;dobrých
              vztahů.
            </p>

            <div className="flex flex-row justify-start mt-10 gap-5">
              <Button link={"/"} inverse={false}>
                S kým spolupracujeme
              </Button>
            </div>
          </div>
          <div className="w-[50%] mx-auto bg-lobster-100 blob blob-animated">
            <PeopleSection />
          </div>
        </section>

        {/* ------------------------------------------------------ */}
        {/* ---------------------- CO UMÍME ---------------------- */}
        {/* ------------------------------------------------------ */}

        <section className="bg-white relative overflow-hidden pb-20">
          <h2 className="text-lobster text-center text-2xl uppercase font-bold mt-20">
            Co umíme
          </h2>
          <p className="text-black text-center text-6xl font-bold mt-5 leading-[1] mb-5">
            Nesjme továrna,
            <br />
            jsme tvůrci
          </p>

          <UspSection />

          <div className="w-3/4 mx-auto mt-16 p-10 bg-lobster-100 flex flex-col items-center relative">
            <h3 className="text-lobster text-center text-2xl uppercase font-bold mt-20">
              Co nás odlišuje?
            </h3>{" "}
            <p className="text-black text-center text-4xl font-bold mt-5 leading-[1] mb-14">
              Nepředstíráme, že to bude snadné.
              <br />
              Ale víme, že to bude stát za to.
            </p>
            <ul className="text-black opacity-65 text-center text-xl mb-8 space-y-3 list-disc list-inside leading-none">
              <li>Nejsme jen produkce, jsme partneři ve vyprávění.</li>
              <li>Umíme mainstream, který má hloubku.</li>
              <li>Pracujeme srdcem, ale přemýšlíme hlavou.</li>
              <li>Zajímá nás kvalita. Ne kvantita.</li>
              <li>Náš tým je tým, ne součet individualit.</li>
            </ul>
            <div className="flex flex-row gap-6 mt-4">
              <Button link="/kontakt" inverse={false}>
                Pojďme spolupracovat
              </Button>
              <Button link="/o-nas" inverse>
                Poznejte náš přístup
              </Button>

              <div className="absolute top-[-40px] left-[-60px] w-32 h-32 bg-lobster-200 blob-animated opacity-60 animate-float-slow z-10"></div>
              <div className="absolute top-[30px] right-[-50px] w-60 h-60 bg-lobster-300 blob-animated opacity-50 animate-float-medium z-10"></div>
              <div className="absolute bottom-[-40px] left-[20%] w-20 h-20 bg-lobster-400 blob-animated opacity-40 animate-float-fast z-10"></div>
            </div>
          </div>
        </section>

        {/* <ContactSection /> */}
      </main>
    </>
  );
};

export default HomePage;
