import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ThemeProvider } from "./context/ThemeContext";
import { MainLayout } from "./components/layout/MainLayout";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Education } from "./components/sections/Education";
import { Projects } from "./components/sections/Projects";
import { GithubActivity } from "./components/sections/GithubActivity";
import { Contact } from "./components/sections/Contact";

function App() {
  useEffect(() => {
    // Smoother, natural physics config
    const lenis = new Lenis({
      lerp: 0.1, // Smoothness intensity (0.1 = silky soft, higher = stiffer)
      wheelMultiplier: 1.0, // Prevents aggressive scrolling spikes
      smoothTouch: false, // Keeps native touch feel on smartphones
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <GithubActivity />
        <Contact />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;