import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className="flex justify-center"> {/* Added justify-center class */}
      {/* Social Links */}
      <div className="flex space-x-4">
        <a
          href="https://twitter.com/your_twitter_username" // Replace with your Twitter URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-200"
        >
          <FaTwitter size={24} />  {/* Existing Twitter icon */}
        </a>
        <a
          href="https://www.linkedin.com/in/sahil-mund/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-300"
        >
          <FaLinkedin size={24} />  {/* Existing LinkedIn icon */}
        </a>
        <a
          href="https://github.com/sahil-009"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-300"
        >
          <FaGithub size={24} />  {/* Existing GitHub icon */}
        </a>
      </div>
    </div>
  );
}

export default Footer;