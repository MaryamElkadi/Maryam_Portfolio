import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { TechStack } from './components/sections/TechStack';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Stats } from './components/sections/Stats';
import { Contact } from './components/sections/Contact';

import { CustomCursor } from './components/ui/CustomCursor';

function App() {
  return (
    <div className="min-h-screen bg-dark w-full overflow-x-hidden selection:bg-primary/30 selection:text-white cursor-none sm:cursor-auto">
      <div className="hidden sm:block">
        <CustomCursor />
      </div>
      <Navbar />

      <main>
        <Hero />
        <TechStack />
        <Stats />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
