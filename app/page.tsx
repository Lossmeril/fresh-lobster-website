import ProjectsSection from "@/components/sections/projectsSections";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <main className="max-w-screen overflow-x-hidden">
        <section className="h-screen bg-white overflow-x-hidden">
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] aspect-video z-30">
            <Image
              src="/src/img/logo-mono-light.png"
              alt="Fresh Lobster logo"
              fill
              className="object-contain"
            />
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
        <section className="h-screen bg-lobster"></section>
        <ProjectsSection />
      </main>
    </>
  );
};

export default HomePage;
