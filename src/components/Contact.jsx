export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] text-gray-200 py-20 px-6 flex flex-col items-center"
    >
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-10">
        Contact
      </h2>

      {/* Contact Info */}
      <div className="max-w-3xl text-center mb-10">
        <p className="text-gray-400 text-sm sm:text-base mb-4">
          I’m currently open to new opportunities, collaborations, or just a
          friendly chat about web development. Feel free to reach out!
        </p>
        <p className="text-blue-400 font-medium text-sm sm:text-base">
        </p>
      </div>

      {/* Contact Form */}
      <form
        action=""
        className="w-full max-w-lg bg-[#111] border border-gray-800 p-6 rounded-xl shadow-lg"
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-[#0a0a0a] border border-gray-700 text-gray-200 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full bg-[#0a0a0a] border border-gray-700 text-gray-200 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-sm mb-2 text-gray-300">Message</label>
          <textarea
            rows="4"
            placeholder="Your message..."
            className="w-full bg-[#0a0a0a] border border-gray-700 text-gray-200 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
