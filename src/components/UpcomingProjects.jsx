


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

const UpcomingProjects = () => (
  <section className="p-6 bg-gray-900 text-white">
    <h2 className="text-2xl font-bold mb-6">UpcomingProjects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
  
      <ProjectCard
         logo="/images/ai-resume-maker.png" // Set a correct path to the image
         title="AI Resume Maker"
         description="An AI-powered resume maker for job seekers."
         github="https://github.com/sahil-009/aiResumeBuilder.git"
      />
      <ProjectCard
        logo="" // Ensure the image is in the correct location
        title="web based code editor"
        description="A web-based code editor."
        github="https://github.com/sahil-009/webCodeEditor1.0.git" />
      <ProjectCard
        logo="" // Ensure the image is in the correct location
        title="Job portal"
        description="A job portal for job seekers and employers."
        github="https://github.com/sahil-009/onlineJobPortal.git"
      />
      <ProjectCard
        logo="" // Ensure the image is in the correct location
        title="solana token lunchpad"
        description="A solana token lunchpad."
        github="https://github.com/sahil-009/solonaTokenLunchpad.git"

      />
      <ProjectCard
        logo="" // Ensure the image is in the correct location
        title="Job portal"
        description="A job portal for job seekers and employers."
        github="https://github.com/sahil-009/onlineJobPortal.git"
      />
      <ProjectCard
        logo="" // Ensure the image is in the correct location
        title="Typing speed test"
        description="A typing speed test application."
        github="https://github.com/sahil-009/typingSpeedApp.git"

      />

        
      
    </div>
    
  </section>
);

export default UpcomingProjects;

