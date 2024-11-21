import { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header
      className={`p-6 ${
        isDarkTheme ? 'bg-gray-800 text-white' : 'bg-slate-300 text-gray-800'
      } flex justify-between items-center flex-col md:flex-row md:space-x-6`}
    >
      <div className="flex flex-col space-y-4 mb-4 md:mb-0">
        <h1 className="text-3xl font-bold">{isDarkTheme ? 'Sahil Mund' : 'Sahil Mund'}</h1>
        <p className="text-lg leading-loose">
          I am a passionate Full Stack Developer and MCA student specializing in creating dynamic,
          user-friendly web applications. I am constantly learning and exploring new tools to enhance
          my development skills and contribute effectively to innovative projects.
        </p>
      </div>

      {/* Social Links and Theme Button */}
      <div className="flex flex-col items-center space-y-4 mt-4 md:mt-0">
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/sahil-mund/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-blue-500 hover:text-blue-300 transition duration-300 ${
              isDarkTheme ? 'text-blue-400 hover:text-blue-200' : ''
            }`}
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/sahil-009"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-500 hover:text-gray-300 transition duration-300 ${
              isDarkTheme ? 'text-gray-400 hover:text-gray-200' : ''
            }`}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/sahilmund440504"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-blue-400 hover:text-blue-200 transition duration-300 ${
              isDarkTheme ? 'text-blue-400 hover:text-blue-200' : ''
            }`}
          >
            <FaTwitter size={24} />
          </a>
        </div>
        <div className="flex flex-col items-center space-y-2">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isDarkTheme ? <FaSun /> : <FaMoon />}
          </button>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/your-resume-link" // Replace with your actual Google Drive resume link
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
