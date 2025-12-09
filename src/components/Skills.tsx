import { useState, useEffect, useRef } from 'react';
import { Code2, BarChart3, Palette, Database, Brain, FileSpreadsheet } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  description: string;
  color: string;
  skills: Skill[];
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skillCategories: SkillCategory[] = [
    {
      title: 'Technical',
      description: 'Programming & Development',
      color: 'from-teal-400 to-blue-400',
      skills: [
        { name: 'Python', level: 90, icon: Code2 },
        { name: 'SQL', level: 85, icon: Database },
        { name: 'JavaScript/React', level: 80, icon: Code2 },
        { name: 'Git & Version Control', level: 85, icon: Code2 },
      ],
    },
    {
      title: 'Analytical',
      description: 'Data Analysis & Visualization',
      color: 'from-blue-400 to-purple-400',
      skills: [
        { name: 'Power BI', level: 88, icon: BarChart3 },
        { name: 'Excel & Advanced Analytics', level: 92, icon: FileSpreadsheet },
        { name: 'Dynamics 365', level: 75, icon: BarChart3 },
        { name: 'Statistical Analysis', level: 85, icon: BarChart3 },
      ],
    },
    {
      title: 'Creative',
      description: 'AI & Innovation',
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'Machine Learning', level: 82, icon: Brain },
        { name: 'AI/NLP', level: 80, icon: Brain },
        { name: 'Problem Solving', level: 95, icon: Palette },
        { name: 'Innovation & Design', level: 88, icon: Palette },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A blend of technical prowess, analytical thinking, and creative innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-1000 delay-${(categoryIndex + 1) * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 mx-auto`}
                >
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  {category.description}
                </p>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4 text-teal-500" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-teal-600 dark:text-teal-400 font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-3xl p-1 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Technology evolves, and so do I. I'm constantly exploring new tools, frameworks,
              and methodologies to stay at the forefront of innovation. Currently diving deep
              into advanced AI techniques and cloud technologies!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
