export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] text-gray-200 py-20 px-6 flex flex-col items-center"
    >
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-10">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {/* Each skill is its own div (no loops, for learning clarity) */}
        <div className="bg-[#111] border border-gray-800 p-4 rounded-lg hover:border-blue-500 transition-colors">
          <p className="text-sm sm:text-base font-medium">HTML</p>
        </div>

        <div className="bg-[#111] border border-gray-800 p-4 rounded-lg hover:border-blue-500 transition-colors">
          <p className="text-sm sm:text-base font-medium">CSS</p>
        </div>

        <div className="bg-[#111] border border-gray-800 p-4 rounded-lg hover:border-blue-500 transition-colors">
          <p className="text-sm sm:text-base font-medium">JavaScript</p>
        </div>

        <div className="bg-[#111] border border-gray-800 p-4 rounded-lg hover:border-blue-500 transition-colors">
          <p className="text-sm sm:text-base font-medium">React</p>
        </div>

        <div className="bg-[#111] border border-gray-800 p-4 rounded-lg hover:border-blue-500 transition-colors">
          <p className="text-sm sm:text-base font-medium mt-2.5">TailwindCSS</p>
        </div>

        <div className="bg-[#111] border border-gray-800 p-4 rounded-lg hover:border-blue-500 transition-colors">
          <p className="text-sm sm:text-base font-medium">Responsive Design</p>
        </div>
      </div>
    </section>
  );
}
