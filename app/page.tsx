"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "@/components/button";

import ProjectsSection from "@/components/sections/projectsSections";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HomePage = () => {
  const mainCircleRef = useRef(null);
  const smallCircleRef1 = useRef(null);
  const smallCircleRef2 = useRef(null);

  const heroBannerRef = useRef(null);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const indexCircle = mainCircleRef.current;
    const smallCircle1 = smallCircleRef1.current;
    const smallCircle2 = smallCircleRef2.current;

    const heroBanner = heroBannerRef.current;
    const aboutSection = aboutSectionRef.current;

    gsap.fromTo(
      indexCircle,
      { scale: 0, y: "100vh", opacity: 1 },
      {
        ease: "none",
        scale: 7,
        y: "0vh",
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: heroBanner,
          start: "50% center",
          end: "100% center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      indexCircle,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heroBanner,
          start: "100% top",
          end: "100% top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      smallCircle1,
      { scale: 0, y: "30vh", opacity: 1 },
      {
        ease: "none",
        scale: 2,
        y: "10vh",
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: heroBanner,
          start: "60% center",
          end: "100% center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      smallCircle1,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heroBanner,
          start: "100% top",
          end: "100% top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      smallCircle2,
      { scale: 0, y: "10vh", opacity: 1 },
      {
        ease: "none",
        scale: 5,
        y: "10vh",
        opacity: 1,
        duration: 3,
        scrollTrigger: {
          trigger: heroBanner,
          start: "75% center",
          end: "100% center",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      smallCircle2,
      { opacity: 1 },
      {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heroBanner,
          start: "100% top",
          end: "100% top",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      aboutSection,
      { backgroundColor: "white" },
      {
        backgroundColor: "#ED1C24",
        duration: 1,
        scrollTrigger: {
          trigger: aboutSection,
          start: "top center",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <main className="max-w-screen overflow-x-hidden">
        <section
          className="h-screen bg-white overflow-x-hidden"
          ref={heroBannerRef}
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
          className="bg-lobster absolute w-80 aspect-square rounded-full scale-0 top-[100vh] left-[50%] -translate-x-1/2 z-30"
          ref={mainCircleRef}
        ></div>
        <div
          className="bg-lobster absolute w-80 aspect-square rounded-full top-[100px] scale-0 left-0 -translate-x-1/2 z-30"
          ref={smallCircleRef1}
        ></div>
        <div
          className="bg-lobster absolute w-80 aspect-square rounded-full top-[300px] scale-0 left-[75%] -translate-x-1/2 z-30"
          ref={smallCircleRef2}
        ></div>

        <section className="h-[200vh] bg-white relative" ref={aboutSectionRef}>
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
              <p className="text-white text-center text-xl mt-10">
                Fresh Lobster vznikl z&nbsp;potřeby tvořit jinak. Lidsky.
                Poctivě. Kristýna Drozdová a&nbsp;Ludvík Mareček&mdash;dvě
                osobnosti, dvě cesty, které se potkaly na místě, kde nestačí
                „jen to natočit“. Chtěli stát u&nbsp;zrodu projektů, které mají
                vnitřní tah. A&nbsp;přetavit vlastní zkušenosti v&nbsp;něco, co
                bude mít duši.
              </p>
            </div>
          </div>
        </section>

        <section className="h-[200vh] bg-white relative">
          <h2 className="text-lobster text-center text-2xl uppercase font-bold mt-20">
            Naše projekty
          </h2>
          <p className="text-black text-center text-6xl font-bold mt-5 leading-[1.2]">
            Vydupáno z prachu.
            <br />
            Natočeno srdcem.
          </p>
          <p className="text-white text-center text-xl mt-10">
            Od Špuntů na&nbsp;vodě přes Deníček moderního fotra
            po&nbsp;televizní cykly a&nbsp;kampaně. Každý náš projekt je
            jedinečný&mdash;protože za&nbsp;ním stojí lidé, kterým na&nbsp;něm
            záleží. Známe každý kámen na&nbsp;place. A&nbsp;víme, proč tam je.
          </p>

          <ProjectsSection />
        </section>
      </main>
    </>
  );
};

export default HomePage;
