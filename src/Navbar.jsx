import { Link } from 'react-router-dom';
import { Home, FolderKanban, Briefcase, Github, Linkedin, Mail, Book } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="relative bg-gray-950/80 p-4 rounded-full backdrop-blur-md border border-gray-600/50 shadow-lg">
        <ul className="flex items-center space-x-8 text-gray-300">
          <li>
            <Link to="/" className="block transition-all duration-300 hover:scale-125 hover:text-gray-100">
              <Home size={22} strokeWidth={1.5} />
            </Link>
          </li>
         
          <li>
            <Link to="/education" className="block transition-all duration-300 hover:scale-125 hover:text-gray-100">
              <Book size={22} strokeWidth={1.5} />
            </Link>
          </li>
          <li>
            <Link to="/work" className="block transition-all duration-300 hover:scale-125 hover:text-gray-100">
              <Briefcase size={22} strokeWidth={1.5} />
            </Link>
          </li>
          <li>
            <Link to="/projects" className="block transition-all duration-300 hover:scale-125 hover:text-gray-100">
              <FolderKanban size={22} strokeWidth={1.5} />
            </Link>
          </li>
          
          <li className="h-5 w-px bg-gray-700/50" />
          {/* External links still use anchor tags */}
          <li>
            <a href="https://github.com/amaan-p" target="_blank" rel="noopener noreferrer"
              className="block transition-all duration-300 hover:scale-125 hover:text-gray-100">
              <Github size={22} strokeWidth={1.5} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amaan-patel17/" target="_blank" rel="noopener noreferrer"
              className="block transition-all duration-300 hover:scale-125 hover:text-gray-100">
              <Linkedin size={22} strokeWidth={1.5} />
            </a>
          </li>
          <li>
            <a href="mailto:amaanmpatel17@gmail.com"
              className="block transition-all duration-300 hover:scale-125 hover:text-gray-100">
              <Mail size={22} strokeWidth={1.5} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;