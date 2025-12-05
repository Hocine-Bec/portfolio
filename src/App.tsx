import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Process } from './components/sections/Process';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;