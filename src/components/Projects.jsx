import PropTypes from "prop-types";

const ProjectCard = ({ logo, title, description, github, vercel }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
    {/* Dynamically render logo */}
    <img
      src={logo || "/images/default-logo.png"} // Fallback image
      alt={title || "Project Logo"}
      className="w-12 h-12 mb-4 object-contain"
    />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex space-x-2">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        GitHub
      </a>
      <a
        href={vercel}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Vercel
      </a>
    </div>
  </div>
);

ProjectCard.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  vercel: PropTypes.string.isRequired,
};

const Projects = () => (
  <section className="p-6 bg-gray-900 text-white">
    <h2 className="text-2xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <ProjectCard
        logo="/images/spotify-logo.webp" 
        title="Spotify Clone"
        description="A simple Spotify clone with offline music support."
        github="https://github.com/sahil-009/spotify-clone"
        vercel="https://spotify-clone-drab-two.vercel.app/"
      />
      <ProjectCard
        logo="/images/chat.jpg" // Ensure the image is in the correct location
        title="Chat Application"
        description="A real-time chat application."
        github="https://github.com/sahil-009/Chat-Application"
        vercel="https://chat-application-seven-kappa.vercel.app/"
      />
      <ProjectCard
        logo="/images/course.png" // Ensure the image is in the correct location
        title="course selling web Application"
        description="course selling web Application frontend need to create backend APIs working."
        github="https://github.com/sahil-009/courseSellingWeb1.2.1"
        
      />
      <ProjectCard
        logo="/images/todo.png" // Ensure the image is in the correct location
        title="java todo application "
        description="java todo application using swing and file handling."
        github="https://github.com/sahil-009/JAVA-ToDo-Application.git"
        
      />
      <ProjectCard
        logo="/images/face.jpeg" // Ensure the image is in the correct location
        title="Face Recognition"
        description="Face Recognition using python and openCV."
        github="https://github.com/sahil-009/Face-Recognition.git"
        
      />
      <ProjectCard
        logo="/images/clock.jpg" // Ensure the image is in the correct location
        title="BAsh digital clock"
        description="digital clockusing bash."
        github="https://github.com/sahil-009/Digital-clock.git"
        
      />
    </div>
    
  </section>
);

export default Projects;
