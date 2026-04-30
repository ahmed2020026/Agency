import { useState } from "react"
import NavBar from "./componants/NavBar"
import Hero from "./componants/Hero";

const App = () => {
  const [themes , setThemes] = useState<string>('light');
  document.body.className = themes;
  return (
    <>
      <header className="bg-white/50 dark:bg-gray-900/75 z-20 transition-all fixed w-full top-0 backdrop-blur-xl">
        <NavBar themes={themes} setThemes={() => setThemes(prev => prev === 'light'? 'dark':'light')}/>
      </header>
      <main className="pt-17">
        <section className="dark:bg-black relative pt-10 transition-all">
          <Hero />
        </section>
      </main>
    </>
  )
}

export default App