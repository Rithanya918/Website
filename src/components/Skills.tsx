import { useState, useEffect, useRef } from 'react';
import { Code2, BarChart3, Database, Brain, Cloud, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
}

interface SkillCategory {
  title: string;
  description: string;
  color: string;
  categoryIcon: React.ElementType;
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
      title: 'Languages & Frameworks',
      description: 'Programming & Development',
      color: 'from-teal-400 to-blue-400',
      categoryIcon: Code2,
      skills: [
        { name: 'Python', level: 95, icon: Code2 },
        { name: 'SQL', level: 90, icon: Database },
        { name: 'JavaScript', level: 85, icon: Code2 },
        { name: 'R', level: 80, icon: Code2 },
        { name: 'React', level: 85, icon: Code2 },
        { name: 'PyTorch', level: 88, icon: Code2 },
        { name: 'Scikit-Learn', level: 90, icon: Code2 },
        { name: 'Streamlit', level: 85, icon: Code2 },
      ],
    },
    {
      title: 'Cloud & Data Engineering',
      description: 'Cloud Platforms & Data Tools',
      color: 'from-blue-400 to-purple-400',
      categoryIcon: Cloud,
      skills: [
        { name: 'AWS', level: 85, icon: Cloud },
        { name: 'Oracle Cloud', level: 80, icon: Cloud },
        { name: 'Azure', level: 82, icon: Cloud },
        { name: 'Power BI', level: 92, icon: BarChart3 },
        { name: 'Tableau', level: 88, icon: BarChart3 },
        { name: 'Snowflake', level: 85, icon: Database },
        { name: 'Oracle APEX', level: 80, icon: Database },
        { name: 'ETL Pipelines', level: 87, icon: Database },
      ],
    },
    {
      title: 'AI & Machine Learning',
      description: 'Advanced AI & Automation',
      color: 'from-purple-400 to-pink-400',
      categoryIcon: Brain,
      skills: [
        { name: 'Machine Learning', level: 90, icon: Brain },
        { name: 'GenAI', level: 88, icon: Brain },
        { name: 'Hugging Face', level: 85, icon: Brain },
        { name: 'LangChain', level: 87, icon: Brain },
        { name: 'N8N', level: 82, icon: Brain },
        { name: 'CrewAI', level: 85, icon: Brain },
        { name: 'NLP & LLMs', level: 88, icon: Brain },
        { name: 'Predictive Analytics', level: 90, icon: Brain },
      ],
    },
    {
      title: 'Dev Tools & Workflow',
      description: 'Project Management & Tools',
      color: 'from-pink-400 to-orange-400',
      categoryIcon: Wrench,
      skills: [
        { name: 'Git & Version Control', level: 90, icon: Wrench },
        { name: 'Jira', level: 85, icon: Wrench },
        { name: 'Agile/Scrum', level: 88, icon: Wrench },
        { name: 'VS Code', level: 95, icon: Code2 },
        { name: 'Jupyter Notebook', level: 92, icon: Code2 },
        { name: 'Power Query', level: 90, icon: BarChart3 },
        { name: 'Lean Six Sigma', level: 80, icon: Wrench },
      ],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 px-6"
    >
      <div className="max-w-[1400px] mx-auto">
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
            A comprehensive toolkit spanning data science, AI, cloud technologies, and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.categoryIcon;
            return (
              <div
                key={categoryIndex}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 mx-auto`}
                  >
                    <CategoryIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white text-center mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-6 text-xs">
                    {category.description}
                  </p>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const Icon = skill.icon;
                      return (
                        <div key={skillIndex}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Icon className="w-3 h-3 text-teal-500 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300 font-medium text-xs">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-teal-600 dark:text-teal-400 font-bold text-xs">
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
            );
          })}
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
