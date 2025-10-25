export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0a0a0a] text-gray-200 px-6"
    >
      {/* Greeting */}
      <p className="text-blue-400 text-sm sm:text-base mb-2">Hi, my name is</p>

      {/* Name */}
      <h1 className="text-3xl sm:text-5xl font-bold mb-2">
        Ifeabunike Onyedika
      </h1>

      {/* Role */}
      <h2 className="text-lg sm:text-2xl text-gray-400 mb-4">
        I am a Frontend Web Developer
      </h2>

      {/* Short Description */}
      <p className="max-w-xl text-sm sm:text-base text-gray-400 mb-6">
        I love building clean, responsive, and user-friendly web experiences.
        I am constantly learning and exploring new ways to bring ideas to life
        through modern web technologies.
      </p>

      {/* Call to Action Buttons */}
      <div className="flex space-x-4">
        <a
          href="#projects"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="border border-blue-500 text-blue-400 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-sm sm:text-base"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
