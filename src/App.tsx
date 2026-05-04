import { useEffect, useState } from "react"
import NavBar from "./componants/NavBar"
import Hero from "./componants/Hero";
import TrustedBy from "./componants/TrustedBy";
import Help from "./componants/Help";
import Projects from "./componants/Projects";
import Team from "./componants/Team";
import Contact from "./componants/Contact";
import Footer from "./componants/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  const [themes, setThemes] = useState<string>('light');
  useEffect(() => {
    document.body.className = themes;
  }, [themes]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <header className="bg-white/50 dark:bg-gray-900/75 z-20 fixed w-full top-0 backdrop-blur-xl">
        <NavBar themes={themes} setThemes={() => setThemes(prev => prev === 'light' ? 'dark' : 'light')} />
      </header>
      <main className="pt-17" id="Hero">
        <section className=" relative pt-10" >
          <Hero />
        </section>
        <section>
          <TrustedBy />
        </section>
        <section id="Services" className="pt-10">
          <Help />
        </section>
        <section id="work" className="pt-10">
          <Projects />
        </section>
        <section>
          <Team />
        </section>
        <section id="contact" className="pt-10">
          <Contact />
        </section>
      </main>
      <footer className="bg-gray-50 dark:bg-gray-900/10 pt-10 z-20 backdrop-blur-xl">
        <Footer themes={themes} />
      </footer>
    </>
  )
}

export default App