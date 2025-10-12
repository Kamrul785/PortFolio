import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Award,
  Briefcase,
  GraduationCap,
  Moon,
  Sun,
  Menu,
  X,
  Star,
  Trophy,
  Target,
  ChevronRight,
  Zap,
  Rocket,
  TrendingUp,
  Send,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return [count, ref];
  };

  const ScrollReveal = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  const Particles = () => {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    );
  };

  const projects = [
    {
      title: "PhiMart E-commerce",
      tech: ["Django", "React.js", "DRF", "JavaScript", "PostgreSQL"],
      description: "Full-stack e-commerce platform with product catalog, cart, checkout, and order management.",
      features: ["Product Catalog", "Shopping Cart", "Order Management", "User Authentication", "Payment Integration"],
      github: "https://github.com/Kamrul785/PhiMart",
      live: "https://phimart-demo.netlify.app",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Library Management System",
      tech: ["Django", "React.js", "DRF", "JavaScript", "SQLite"],
      description: "Comprehensive library system with circulation workflows and searchable inventory.",
      features: ["Issue/Return Books", "User Management", "Searchable Inventory", "Real-time Availability", "Fine Calculation"],
      github: "https://github.com/Kamrul785/LibraryHub",
      live: "https://libraryhub-demo.netlify.app",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Event Management System",
      tech: ["Django", "Python", "Tailwind CSS", "JavaScript", "SMTP"],
      description: "Multi-role access system with RBAC, email verification, and media handling.",
      features: ["RBAC", "Email Verification", "RSVP System", "Event Dashboards", "Media Upload"],
      github: "https://github.com/Kamrul785/event_management",
      live: "https://event-mgmt-demo.netlify.app",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Task Management System",
      tech: ["Django", "Python", "Tailwind CSS", "JavaScript"],
      description: "Efficient task tracking system with authentication and priority management.",
      features: ["Task Assignment", "Priority Management", "Authentication", "Clean UI", "Deadline Tracking"],
      github: "https://github.com/Kamrul785/task-management",
      live: "https://taskman-demo.netlify.app",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tuition Hub",
      tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      description: "Platform connecting tutors and students for efficient tuition management.",
      features: ["Tutor Matching", "Schedule Management", "User Profiles", "Search System", "Booking System"],
      github: "https://github.com/Kamrul785/Tuition-Hub",
      live: "https://tuitionhub-demo.netlify.app",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Blood Management System",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      description: "Healthcare application for managing blood donation and distribution efficiently.",
      features: ["Donor Management", "Blood Inventory", "Request System", "Admin Panel", "Emergency Alerts"],
      github: "https://github.com/Kamrul785/Blood_Management_System",
      live: "https://bloodbank-demo.netlify.app",
      color: "from-red-500 to-pink-500",
    },
  ];

  const experiences = [
    {
      title: "Chief Operating Officer",
      company: "Sea View Apparels",
      location: "Chattogram, Bangladesh",
      period: "2022 - Present",
      icon: Briefcase,
      points: [
        "Managed financial reporting, budgeting, and expense tracking",
        "Built strong client relationships ensuring compliance",
        "Supported management in strategic planning and growth",
      ],
    },
    {
      title: "Marketing Manager",
      company: "Foysal Enterprise",
      location: "Chattogram, Bangladesh",
      period: "2020 - 2021",
      icon: Target,
      points: [
        "Conducted comprehensive market analysis",
        "Collaborated cross-functionally with sales and logistics",
        "Forecasted market performance with projections",
      ],
    },
  ];

  const stats = [
    { label: "Problems Solved", value: 500, icon: Code, suffix: "+" },
    { label: "Projects", value: 25, icon: Github, suffix: "+" },
    { label: "Codeforces Rating", value: 1000, icon: Trophy, suffix: "+" },
    { label: "Languages Known", value: 10, icon: Target, suffix: "+" },
  ];

  const skills = {
    Languages: ["C++", "C", "Python", "JavaScript"],
    Frontend: ["React.js", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
    Backend: ["Django", "Django REST Framework", "Node.js", "PHP"],
    Databases: ["MySQL", "PostgreSQL", "SQLite"],
    Tools: ["Git", "VS Code", "Postman", "GitHub"],
    Core: ["Data Structures", "Algorithms", "OOP", "Problem Solving"],
  };

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
    },
  ];

  const navigation = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  const StatCard = ({ stat, index }) => {
    const [count, ref] = useCounter(stat.value, 2000);

    return (
      <ScrollReveal delay={index * 100}>
        <div ref={ref} className="text-center group">
          <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
              <stat.icon size={40} className="text-blue-500" />
            </div>
          </div>
          <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {count + stat.suffix}
          </div>
          <div className="text-gray-500 font-medium">{stat.label}</div>
        </div>
      </ScrollReveal>
    );
  };

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

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setIsHovered(false); }}
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
          } backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"} overflow-hidden`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${profile.color} transform transition-all duration-500 ${isHovered ? 'rotate-12 scale-110' : ''}`}>
                <profile.icon size={32} className="text-white" />
              </div>
              <ExternalLink size={24} className={`transform transition-all duration-500 ${isHovered ? 'rotate-45 text-blue-500' : 'text-gray-400'}`} />
            </div>
            <h4 className="text-2xl font-bold mb-2">{profile.name}</h4>
            <p className="text-gray-500 mb-6 text-sm">@{profile.username}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'} transform transition-all duration-300 ${isHovered ? 'translate-y-[-4px]' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-500" size={16} />
                  <span className="text-xs text-gray-500">Rating</span>
                </div>
                <p className={`text-xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>{profile.rating}</p>
              </div>
              <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'} transform transition-all duration-300 ${isHovered ? 'translate-y-[-4px]' : ''}`}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-green-500" size={16} />
                  <span className="text-xs text-gray-500">Max</span>
                </div>
                <p className={`text-xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}>{profile.maxRating}</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
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

  const ContactCard = ({ icon: Icon, title, content, href, color, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <a
        href={href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`block p-8 rounded-2xl transition-all duration-500 ${
          darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
        } backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"} text-center relative overflow-hidden`}
        style={{
          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
          animation: `float 3s ease-in-out infinite ${delay}s`,
        }}
      >
        <div className="relative z-10">
          <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${
            color === 'blue' ? 'from-blue-500/20 to-blue-600/20' : 
            color === 'green' ? 'from-green-500/20 to-green-600/20' : 
            'from-purple-500/20 to-purple-600/20'
          } flex items-center justify-center transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
            <Icon size={40} className={
              color === 'blue' ? 'text-blue-500' : 
              color === 'green' ? 'text-green-500' : 
              'text-purple-500'
            } />
          </div>
          <h3 className="font-bold mb-3 text-xl">{title}</h3>
          <p className="text-sm text-gray-400 break-words">{content}</p>
        </div>
      </a>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} relative overflow-hidden`}>
      <Particles />

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
      `}</style>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? darkMode ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : "bg-white/95 backdrop-blur-md shadow-lg" : ""
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">KH</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative hover:text-blue-500 transition-colors ${activeSection === item.toLowerCase() ? "text-blue-500" : ""}`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600" />
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-800 transition-all transform hover:rotate-180 duration-500"
              >
                {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-500" />}
              </button>
              <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className={`md:hidden ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <div className="px-4 py-3 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block hover:text-blue-500 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="mb-8 inline-block">
              <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 transform hover:scale-110 transition-transform duration-500 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl font-bold">KH</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              style={{ backgroundSize: "300%", animation: "gradient 6s ease infinite" }}>
              Khandokar Kamrul Hasan
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="px-6 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 flex items-center gap-2">
                <Zap size={20} className="text-blue-500" />
                Software Engineer
              </span>
              <span className="px-6 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 flex items-center gap-2">
                <Code size={20} className="text-purple-500" />
                Competitive Programmer
              </span>
              <span className="px-6 py-2 bg-pink-500/20 backdrop-blur-sm rounded-full border border-pink-500/30 flex items-center gap-2">
                <Rocket size={20} className="text-pink-500" />
                Problem Solver
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto">
              CSE Student at PCIU with <span className="text-blue-500 font-bold">3.98 CGPA</span> | 
              <span className="text-yellow-500 font-bold"> 2★ CodeChef</span> | 
              <span className="text-purple-500 font-bold"> 1000+ Codeforces</span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2">
                Get In Touch
                <ChevronRight size={20} />
              </a>
              <a href="#projects" className="px-8 py-4 border-2 border-blue-500 rounded-xl hover:bg-blue-500 transition-all transform hover:scale-105">
                View Projects
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className={`py-20 ${darkMode ? "bg-gray-800/50" : "bg-white"} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal delay={200}>
              <div className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"} backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:border-blue-500/50 transition-all transform hover:scale-105`}>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <GraduationCap className="text-blue-500" size={32} />
                  </div>
                  Education
                </h3>
                <h4 className="text-2xl font-bold mb-3">B.Sc. in Computer Science</h4>
                <p className="text-gray-500 mb-2">Port City International University</p>
                <p className="text-gray-500 mb-4">Expected: September 2026</p>
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-bold text-xl">
                  CGPA: 3.98/4.00
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className={`p-8 rounded-2xl ${darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"} backdrop-blur-sm border ${darkMode ? "border-gray-700" : "border-gray-200"} hover:border-purple-500/50 transition-all transform hover:scale-105`}>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                    <Award className="text-yellow-500" size={32} />
                  </div>
                  Leadership
                </h3>
                <h4 className="text-2xl font-bold mb-3">Joint General Secretary</h4>
                <p className="text-gray-500 mb-4">PCIU Computer Club - CP Wing</p>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-start gap-2">
                    <ChevronRight size={20} className="text-blue-500 mt-1" />
                    <span>Organize coding contests and workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight size={20} className="text-blue-500 mt-1" />
                    <span>Mentor junior programmers</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-16">
            <ScrollReveal>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3 justify-center">
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-red-500/20">
                  <Trophy className="text-yellow-500" size={32} />
                </div>
                Competitive Programming
              </h3>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {cpProfiles.map((profile, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <CPCard profile={profile} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"} backdrop-blur-sm`}>
        <div className="max-w-7xl mx-auto"></div>