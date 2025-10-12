import React, { useState, useRef } from "react";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Trophy,
  Star,
  TrendingUp,
  Zap,
  Send,
  User,
  MessageSquare,
  CheckCircle,
  Award,
} from "lucide-react";

const PortfolioRedesign = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  const cpProfiles = [
    {
      name: "Codeforces",
      username: "Kamrul526785",
      rating: "1000+",
      maxRating: "1050",
      solved: "250+",
      link: "https://codeforces.com/profile/Kamrul526785",
      color: "from-blue-500 via-blue-600 to-cyan-500",
      icon: Code,
      bgPattern: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
    },
    {
      name: "CodeChef",
      username: "kamrulkhan5267",
      rating: "2★",
      maxRating: "1400+",
      solved: "150+",
      link: "https://www.codechef.com/users/kamrulkhan5267",
      color: "from-amber-500 via-orange-500 to-red-500",
      icon: Trophy,
      bgPattern: "radial-gradient(circle at 80% 50%, rgba(251, 146, 60, 0.15) 0%, transparent 50%)",
    },
    {
      name: "LeetCode",
      username: "kamrul08",
      rating: "Active",
      maxRating: "150+",
      solved: "100+",
      link: "https://leetcode.com/kamrul08",
      color: "from-orange-400 via-red-500 to-pink-500",
      icon: Zap,
      bgPattern: "radial-gradient(circle at 50% 80%, rgba(239, 68, 68, 0.15) 0%, transparent 50%)",
    },
  ];

  const CPCard = ({ profile }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = (y - centerY) / 10;
      const tiltY = (centerX - x) / 10;
      setTilt({ x: tiltX, y: tiltY });
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
      setIsHovered(false);
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative group"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <a
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`block relative p-8 rounded-2xl transition-all duration-500 ${
            darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
          } backdrop-blur-sm border ${
            darkMode ? "border-gray-700" : "border-gray-200"
          } overflow-hidden`}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: profile.bgPattern }}
          />

          <div
            className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />

          <div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
            style={{ transform: 'scale(1.1)' }}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div
                className={`p-4 rounded-xl bg-gradient-to-br ${profile.color} transform transition-all duration-500 ${
                  isHovered ? 'rotate-12 scale-110' : ''
                }`}
              >
                <profile.icon size={32} className="text-white" />
              </div>
              <ExternalLink
                size={24}
                className={`text-gray-400 transform transition-all duration-500 ${
                  isHovered ? 'rotate-45 text-blue-500' : ''
                }`}
              />
            </div>

            <h4 className="text-2xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
              {profile.name}
            </h4>

            <p className="text-gray-500 mb-6 text-sm">@{profile.username}</p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'} transform transition-all duration-300 ${isHovered ? 'translate-y-[-4px]' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-500" size={16} />
                  <span className="text-xs text-gray-500">Rating</span>
                </div>
                <p className={`text-xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                  {profile.rating}
                </p>
              </div>
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'} transform transition-all duration-300 ${isHovered ? 'translate-y-[-4px]' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-green-500" size={16} />
                  <span className="text-xs text-gray-500">Max</span>
                </div>
                <p className={`text-xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>
                  {profile.maxRating}
                </p>
              </div>
            </div>

            <div className={`flex items-center justify-between p-4 rounded-xl bg-gradient-to-r ${profile.color} bg-opacity-10 border border-opacity-20 ${isHovered ? 'border-opacity-40' : ''} transition-all duration-300`}>
              <div className="flex items-center gap-2">
                <Award size={20} className="text-blue-500" />
                <span className="text-sm font-medium">Problems Solved</span>
              </div>
              <span className="text-xl font-bold">{profile.solved}</span>
            </div>
          </div>

          {isHovered && (
            <>
              <div className="absolute top-10 right-10 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
              <div className="absolute bottom-10 left-10 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            </>
          )}
        </a>
      </div>
    );
  };

  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    );
  };

  const ContactCard = ({ icon: Icon, title, content, href, color, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <a
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`block group p-8 rounded-2xl transition-all duration-500 ${
          darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
        } backdrop-blur-sm border ${
          darkMode ? "border-gray-700" : "border-gray-200"
        } text-center relative overflow-hidden`}
        style={{
          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
          animation: `float 3s ease-in-out infinite ${delay}s`,
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${color === 'blue' ? 'from-blue-500/10' : color === 'green' ? 'from-green-500/10' : 'from-purple-500/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        <div className="relative z-10">
          <div
            className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${color === 'blue' ? 'bg-gradient-to-br from-blue-500/20 to-blue-600/20' : color === 'green' ? 'bg-gradient-to-br from-green-500/20 to-green-600/20' : 'bg-gradient-to-br from-purple-500/20 to-purple-600/20'} flex items-center justify-center transform transition-all duration-500 ${
              isHovered ? 'scale-110 rotate-12' : ''
            }`}
          >
            <Icon size={40} className={color === 'blue' ? 'text-blue-500' : color === 'green' ? 'text-green-500' : 'text-purple-500'} />
          </div>
          <h3 className="font-bold mb-3 text-xl">{title}</h3>
          <p className="text-sm text-gray-400 break-words">{content}</p>

          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`w-full h-full rounded-2xl ${color === 'blue' ? 'bg-blue-500/20' : color === 'green' ? 'bg-green-500/20' : 'bg-purple-500/20'} animate-ping`} />
            </div>
          )}
        </div>
      </a>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");
    
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus(""), 3000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } py-20 px-4`}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      <section className="max-w-7xl mx-auto mb-32">
        <div className="text-center mb-16 relative">
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200%",
                animation: "gradient 3s ease infinite",
              }}
            >
              Competitive Programming
            </h2>
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
              style={{
                animation: "shimmer 2s infinite",
              }}
            />
          </div>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            Solving complex problems and competing on top coding platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cpProfiles.map((profile, idx) => (
            <CPCard key={idx} profile={profile} />
          ))}
        </div>

        <div className="text-center">
          <div className={`inline-block p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white shadow-xl'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center gap-3 justify-center">
              <Trophy className="text-yellow-500" size={32} />
              <div className="text-left">
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  500+
                </p>
                <p className="text-sm text-gray-400">Total Problems Solved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto relative">
        <FloatingParticles />

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            style={{
              backgroundSize: "200%",
              animation: "gradient 3s ease infinite",
            }}
          >
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a friendly chat about tech!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">
          <ContactCard
            icon={Mail}
            title="Email"
            content="kamrulkhan526785@gmail.com"
            href="mailto:kamrulkhan526785@gmail.com"
            color="blue"
            delay={0}
          />
          <ContactCard
            icon={Phone}
            title="Phone"
            content="+880 1747 333257"
            href="tel:+8801747333257"
            color="green"
            delay={0.2}
          />
          <ContactCard
            icon={MapPin}
            title="Location"
            content="Chattogram, Bangladesh"
            href="#"
            color="purple"
            delay={0.4}
          />
        </div>

        <div className="relative z-10">
          <div
            className={`max-w-2xl mx-auto p-8 md:p-12 rounded-3xl ${
              darkMode ? "bg-gray-800/50" : "bg-white shadow-2xl"
            } backdrop-blur-xl border ${
              darkMode ? "border-gray-700" : "border-gray-200"
            } relative overflow-hidden`}
            style={{
              animation: "float 4s ease-in-out infinite",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
                  <Send size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Send me a message</h3>
                <p className="text-gray-400">I'll get back to you as soon as possible</p>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <User className="absolute left-4 top-4 text-gray-400 transition-colors" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className={`w-full pl-12 pr-4 py-4 rounded-xl ${
                      darkMode ? "bg-gray-900/50 border-gray-700" : "bg-gray-50 border-gray-200"
                    } border-2 focus:border-blue-500 transition-all outline-none`}
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-4 top-4 text-gray-400 transition-colors" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className={`w-full pl-12 pr-4 py-4 rounded-xl ${
                      darkMode ? "bg-gray-900/50 border-gray-700" : "bg-gray-50 border-gray-200"
                    } border-2 focus:border-blue-500 transition-all outline-none`}
                  />
                </div>

                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400 transition-colors" size={20} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={5}
                    className={`w-full pl-12 pr-4 py-4 rounded-xl ${
                      darkMode ? "bg-gray-900/50 border-gray-700" : "bg-gray-50 border-gray-200"
                    } border-2 focus:border-blue-500 transition-all outline-none resize-none`}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={formStatus === "sending"}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 ${
                    formStatus === "success"
                      ? "bg-gradient-to-r from-green-500 to-emerald-600"
                      : "bg-gradient-to-r from-blue-500 to-purple-600"
                  } hover:shadow-2xl hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {formStatus === "sending" && (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  )}
                  {formStatus === "success" && (
                    <>
                      <CheckCircle size={24} />
                      Message Sent!
                    </>
                  )}
                  {!formStatus && (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </div>

              {formStatus === "success" && (
                <div className="mt-6 p-4 rounded-xl bg-green-500/20 border border-green-500/30 text-center">
                  <p className="text-green-500 font-medium">Thank you! I'll get back to you soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-16 relative z-10">
          {[
            { icon: Github, href: "https://github.com/Kamrul785", hoverColor: "hover:from-gray-700 hover:to-gray-800" },
            { icon: Mail, href: "mailto:kamrulkhan526785@gmail.com", hoverColor: "hover:from-red-500 hover:to-red-600" },
            { icon: Code, href: "https://codeforces.com/profile/Kamrul526785", hoverColor: "hover:from-purple-500 hover:to-purple-600" },
            { icon: Trophy, href: "https://www.codechef.com/users/kamrulkhan5267", hoverColor: "hover:from-yellow-500 hover:to-orange-600" },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-5 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 ${social.hoverColor} transition-all transform hover:scale-110 hover:rotate-12 shadow-lg`}
              style={{
                animation: `float 3s ease-in-out infinite ${idx * 0.2}s`,
              }}
            >
              <social.icon size={32} />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioRedesign;