export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0a0a0a] text-gray-200 py-20 px-6 flex flex-col items-center"
    >
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-8">
        About Me
      </h2>

      {/* Content Wrapper */}
      <div className="max-w-4xl text-center">
        {/* Short Bio */}
        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
          Hello! My name is <span className="text-blue-400"> {" "} Ifeabunike Onyedika {" "}</span> 
          and I am a passionate Frontend Web Developer who enjoys turning ideas into 
          functional, visually appealing digital experiences.
        </p>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
          I started learning web development out of curiosity and enjoyed how 
          code can create something people can see and interact with. Now, I focus on 
          writing clean, accessible, maintainable, responsive and user-friendly code using modern tools like 
          <span className="text-blue-400"> React</span> and 
          <span className="text-blue-400"> TailwindCSS</span>.
        </p>

        <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
          When I am not coding, I enjoy exploring new tech trends, learning backend like Python, 
          and improving my problem-solving skills through projects and challenges.
        </p>
      </div>
    </section>
  );
}
