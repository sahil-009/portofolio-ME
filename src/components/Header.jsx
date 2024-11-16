
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Import the required icons

const Header = () => (
  <header className="p-6 bg-gray-900 text-white flex justify-between items-center">
    <div>
      <h1 className="text-3xl font-bold">Sahil Mund</h1>
      <p className="text-gray-400">I am a passionate Full Stack Developer and MCA student specializing in creating 
        dynamic,
         user-friendly web applications.
        I am constantly learning and exploring
         new tools to enhance my development 
           skills and contribute effectively to innovative
            projects.</p>
    </div>

    {/* Social Links */}
    <div className="flex space-x-4">
      <a
        href="https://www.linkedin.com/in/sahil-mund/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-300"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href="https://github.com/sahil-009"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-300"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://x.com/sahilmund440504"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-200"
      >
        <FaTwitter size={24} />
      </a>
    </div>
  </header>
);

export default Header;
