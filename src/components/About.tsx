import { BookOpen, Heart, Lightbulb, GraduationCap } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const About = () => {
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

  const timeline = [
    {
      year: '2024-Present',
      title: 'MS in Information Systems',
      subtitle: 'AI Track at Florida International University',
      icon: GraduationCap,
      color: 'from-teal-400 to-blue-400',
    },
    {
      year: '2023',
      title: 'Data Analytics Journey',
      subtitle: 'Specialized in Business Intelligence & AI',
      icon: Lightbulb,
      color: 'from-blue-400 to-purple-400',
    },
    {
      year: 'Earlier',
      title: 'Curiosity Sparked',
      subtitle: 'Fell in love with turning data into stories',
      icon: Heart,
      color: 'from-purple-400 to-pink-400',
    },
  ];

  const funFacts = [
    'I speak fluent Python and SQL languages',
    'Data visualization is my art form & dashboards are my canvas.',
    'I push myself into spaces that are new often',
    'Coffee-powered problem solver',
    'I talk to my code as if it can hear me (and sometimes it listens).',
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-teal-500 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  My Story
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Hello! I'm Rithanya, a data-driven professional with a passion for turning complex datasets into actionable insights. 
                I’m someone who sees the world through patterns and possibilities, with a deep interest in AI, ML, and data science. My curiosity about prediction and intelligent systems led me into the world of models, analytics, and automation.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Today, I blend technical skill with creative problem-solving to bringing machine intelligence to life in ways that thinks, learns, and improves the way we live.
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Fun Facts
              </h3>
              <div className="space-y-4">
                {funFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-start group"
                  >
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-gray-700 dark:text-gray-200">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            My Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 via-blue-400 to-purple-400 hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-8`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        <p className="text-teal-500 font-bold mb-2">{item.year}</p>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="relative z-10 my-4 md:my-0">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
