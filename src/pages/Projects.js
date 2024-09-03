import React from 'react';
import Projectdata from '../assets/Projectdata'; // Import the project data
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ title, description, image, externalLink, githubLink }) => (
  <div className="bg-gray-900 border border-purple-600 rounded-lg overflow-hidden w-80 h-80 relative flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover border-b border-purple-600" />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 flex-grow">{description}</p>
      <div className="flex justify-end space-x-2 mt-auto">
        {externalLink && (
          <a href={externalLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
            <FiExternalLink size={20} />
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400">
            <FiGithub size={20} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const { projects } = Projectdata;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            externalLink={project.externalLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
