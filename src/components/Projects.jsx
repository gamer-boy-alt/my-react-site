export default function Projects() {
  return (
    <section id="projects" className="py-20 text-center">
      <h3 className="text-3xl font-semibold mb-10">Projects</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project 1 */}
        <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
          <h4 className="text-xl font-bold mb-2 text-blue-400">First Practice Website</h4>
          <p className="text-gray-400 mb-4">
            The website I first built after learning TailwindCSS
          </p>
          <a href="https://my-tailwind-project-jjkm.onrender.com/" className="text-sm text-blue-400 hover:underline" target="_blank">View Project →</a>
        </div>

        {/* Project 2 */}
        <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
          <h4 className="text-xl font-bold mb-2 text-blue-400">Acme Rockets Website</h4>
          <p className="text-gray-400 mb-4">
            The second website I built after learning TailwindCSS that is interactive because of Javascript was used together with tailwindcss
          </p>
          <a href="https://acme-rockets-51cs.onrender.com/" className="text-sm text-blue-400 hover:underline">View Project →</a>
        </div>

        {/* Project 3 */}
        <div className="bg-[#121212] border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
          <h4 className="text-xl font-bold mb-2 text-blue-400">Modern Banking Website</h4>
          <p className="text-gray-400 mb-4">
            The third website that I built after learning React and was used together with TailwindCSS.
          </p>
          <a href="https://hoobank-six-psi.vercel.app/#product" className="text-sm text-blue-400 hover:underline">View Project →</a>
        </div>
      </div>
    </section>
  );
}
