import { Sparkles, ArrowDown, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const certifications = [
    'Oracle APEX Cloud Developer Professional',
    'Oracle Cloud Infrastructure 2025 Data Science Professional',
    'Lean Six Sigma Black Belt – Level III',
    'Microsoft Business Analyst Professional',
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div
        className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-400 via-blue-400 to-purple-400 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1.5 flex items-center justify-center">
                <img 
                  src="/profile.jpg" 
                  alt="Rithanya Sekar"
                  className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 animate-bounce">
              <Sparkles className="w-8 h-8 text-yellow-400" fill="currentColor" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
          Rithanya Sekar
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
          Turning Data into Decisions
        </p>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          Blending AI, Insight, and Imagination
        </p>

        {/* Certifications Section */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-2xl p-1">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Award className="w-5 h-5 text-teal-500" />
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  Certifications
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-3 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-left">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full font-medium border-2 border-teal-500 hover:bg-teal-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Contact
          </button>
        </div>

        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-teal-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
