import { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, BookOpen, Calendar, ArrowRight, Sparkles } from 'lucide-react';

const Contact = () => {
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

  // ⬇️ UPDATE YOUR LINKS HERE ⬇️
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/rithanya-sekar-/', // 👈 Add your LinkedIn URL here
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Rithanya918', // 👈 Add your GitHub URL here
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'hover:from-gray-800 hover:to-gray-900',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:rseka002@fiu.edu', // 👈 Add your email here
      color: 'from-teal-500 to-blue-500',
      hoverColor: 'hover:from-teal-600 hover:to-blue-600',
    },
  ];

  // ⬇️ UPDATE YOUR BLOG POSTS HERE ⬇️
  const blogPosts = [
    {
      title: '10 Tips for Data Visualization',
      date: 'December 2024',
      description: 'Essential techniques to make your data tell compelling stories',
      url: '#', // 👈 Add your blog post URL here
      color: 'from-teal-400 to-blue-400',
    },
    {
      title: 'My Journey into AI',
      date: 'November 2024',
      description: 'How I transitioned from data analytics to artificial intelligence',
      url: '#', // 👈 Add your blog post URL here
      color: 'from-blue-400 to-purple-400',
    },
    {
      title: 'Building ML Pipelines',
      date: 'October 2024',
      description: 'A practical guide to creating production-ready machine learning workflows',
      url: '#', // 👈 Add your blog post URL here
      color: 'from-purple-400 to-pink-400',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-purple-900 dark:to-blue-900"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-pink-500 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat about data and AI? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Latest Insights Section */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Latest Insights
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Sharing my thoughts on data science, AI, and technology
              </p>

              <div className="space-y-4">
                {blogPosts.map((post, index) => (
                  <a
                    key={index}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors">
                            {post.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                            {post.description}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${post.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="#" // 👈 Add link to your full blog/Medium/etc
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-medium hover:gap-3 transition-all duration-300"
                >
                  View All Articles
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Connect with Me Section */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Connect with Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Find me on these platforms or drop me an email. I'm always open to
                  discussing new opportunities, collaborations, or just having a chat about
                  tech and innovation!
                </p>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
                      >
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} ${link.hoverColor} flex items-center justify-center transition-all duration-300`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors duration-300">
                          {link.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 rounded-3xl p-1">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 text-center">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 text-teal-500" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Let's build something amazing together!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Whether it's a groundbreaking AI solution or a simple data visualization,
                    I'm excited to collaborate and create impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Rithanya Sekar. Built with passion and a lot of coffee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
