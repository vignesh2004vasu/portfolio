import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { Education } from "./components/sections/Education";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Certifications } from "./components/sections/Certifications";
import { Footer } from "./components/sections/Footer";
import { BackToTop } from "./components/sections/BackToTop";

function App() {
  return (
    <div className="bg-zinc-950 text-white">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
