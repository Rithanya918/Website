import { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, Send, Sparkles } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  // ⬇️ UPDATE YOUR LINKS HERE ⬇️
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/', // 👈 Add your LinkedIn URL here
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
      url: 'mailto:your.email@example.com', // 👈 Add your email here
      color: 'from-teal-500 to-blue-500',
      hoverColor: 'hover:from-teal-600 hover:to-blue-600',
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
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="text-center py-12 animate-scaleIn">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-10 h-10 text-white" fill="currentColor" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-teal-500 dark:focus:border-teal-400 outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

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
