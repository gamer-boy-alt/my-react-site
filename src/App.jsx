import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#0a0a0a] text-gray-200 min-h-screen font-sans">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center text-sm py-6 border-t border-gray-700 mt-10">
        © {new Date().getFullYear()} Ifeabunike Onyedika. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
