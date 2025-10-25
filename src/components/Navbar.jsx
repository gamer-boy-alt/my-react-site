import { useState } from "react";
import { Menu, X } from "lucide-react"; // install with: npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when link is clicked (for mobile)
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-[#0a0a0acc] border-b border-gray-800">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-400 cursor-pointer">
          <a href="#home" onClick={handleLinkClick}>
            Ifeabunike Onyedika
          </a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li>
            <a href="#home" onClick={handleLinkClick} className="hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick} className="hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleLinkClick} className="hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleLinkClick} className="hover:text-blue-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick} className="hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800">
          <ul className="flex flex-col items-center py-4 space-y-4 text-sm">
            <li>
              <a href="#home" onClick={handleLinkClick} className="hover:text-blue-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={handleLinkClick} className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={handleLinkClick} className="hover:text-blue-400">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={handleLinkClick} className="hover:text-blue-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleLinkClick} className="hover:text-blue-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
