import { useState, useEffect, useRef } from 'react';
import { Plane, Calendar, Heart, X, ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  techStack: string[];
  details: string;
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // ⬇️ EDIT YOUR PROJECTS HERE ⬇️
  const projects: Project[] = [
    {
      title: 'Payanam AI', // 👈 Change this
      description: 'An intelligent travel companion that personalizes your journey', // 👈 Change this
      icon: Plane, // 👈 Keep or change icon (Plane, Calendar, Heart, etc.)
      color: 'from-teal-400 to-blue-400', // 👈 Keep or change gradient
      techStack: ['Python', 'SQL', 'React', 'NLP','TensorFlow','API Integration'], // 👈 Add your tech stack
      details:
        'Payanam AI is an AI-powered travel assistant that creates personalized itineraries based on user preferences, budget, and interests. It uses machine learning to understand travel patterns and suggests optimal routes, accommodations, and activities. The system learns from user feedback to improve recommendations over time.', // 👈 Change this
      github: 'https://github.com/Rithanya918/Payanam', // 👈 Add your GitHub URL
      demo: 'https://github.com/Rithanya918/Payanam', // 👈 Add your live demo URL (or remove this line if no demo)
    },
    {
      title: 'PricinIQ', // 👈 Change this
      description: 'Dynamic Pricing suggestion Engine powered by AI & ML', // 👈 Change this
      icon: dollers, // 👈 Keep or change icon
      color: 'from-blue-400 to-purple-400', // 👈 Keep or change gradient
      techStack: ['Python', 'Hugginface', 'Machine Learning', 'SQL'], // 👈 Add your tech stack
      details:
        'Detailed description of your second project. ' +
             'Include key features, impact, and technical highlights.', // 👈 Change this
      github: 'https://github.com/Rithanya918/Payanam', // 👈 Add your GitHub URL
      demo: 'https://huggingface.co/spaces/Rithanya918/CGPricing_dupe3', // 👈 Add your live demo URL (or remove this line if no demo)
    },
    {
      title: 'Project 3 Title', // 👈 Change this
      description: 'Short one-line description of your project', // 👈 Change this
      icon: Heart, // 👈 Keep or change icon
      color: 'from-purple-400 to-pink-400', // 👈 Keep or change gradient
      techStack: ['Python', 'Tableau', 'Power BI', 'ETL'], // 👈 Add your tech stack
      details:
        'Detailed description of your third project. Highlight achievements, technical challenges overcome, and results.', // 👈 Change this
      github: 'https://github.com/Rithanya918/your-repo-name-3', // 👈 Add your GitHub URL
      demo: 'https://your-demo-url-3.com', // 👈 Add your live demo URL (or remove this line if no demo)
    },
  ];

  return (
    <>
      <section
        id="projects"
        ref={sectionRef}
        className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-purple-900 dark:to-blue-900"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore some of my favorite projects where I've combined creativity with technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div
                    className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group h-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900 dark:to-blue-900 text-teal-700 dark:text-teal-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                          +{project.techStack.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {selectedProject.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                About This Project
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedProject.details}
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-teal-100 to-blue-100 dark:from-teal-900 dark:to-blue-900 text-teal-700 dark:text-teal-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
