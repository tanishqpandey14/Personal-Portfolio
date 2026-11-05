import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { MainLayout } from "./components/layout/MainLayout";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Projects } from "./components/sections/Projects";
import { GithubActivity } from "./components/sections/GithubActivity";
import { Extracurricular } from "./components/sections/Extracurricular";
import { Contact } from "./components/sections/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1, // 0.1 = silky, higher = stiffer
      wheelMultiplier: 1.0,
      smoothTouch: false, // keep native touch feel on phones
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    // reducedMotion="user" makes every framer-motion animation honour the OS setting
    <MotionConfig reducedMotion="user">
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <GithubActivity />
        <Extracurricular />
        <Contact />
      </MainLayout>
    </MotionConfig>
  );
}

export default App;
