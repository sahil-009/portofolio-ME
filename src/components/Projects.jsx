

import PropTypes from 'prop-types';

const ProjectCard = ({ logo, title, description, github, vercel }) => (
  <div className="bg-gray-800 p-4 rounded-lg shadow-md">
    <img src={logo} alt={title} className="w-12 h-12 mb-4" />
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex space-x-2">
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>
      <a href={vercel} target="_blank" rel="noopener noreferrer" className="text-blue-500">Vercel</a>
    </div>
  </div>
);

const Projects = () => (
  <section className="p-6 bg-gray-900 text-white">
    <h2 className="text-2xl font-bold mb-6">Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <ProjectCard 
        logo="/project1.png" 
        title="Project 1" 
        description="Details and description of project 1." 
        github="https://github.com" 
        vercel="https://vercel.com" 
      />
      <ProjectCard 
        logo="/project2.png" 
        title="Project 2" 
        description="Details and description of project 2." 
        github="https://github.com" 
        vercel="https://vercel.com" 
      />
    </div>
  </section>
);

export default Projects;
