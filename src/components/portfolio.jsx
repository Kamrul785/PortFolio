import React, { useState, useEffect, useRef } from "react";
import prfileimg from "../assets/profile.jpg"
import cv from "../assets/Kamrul_Hasan__CV.pdf"
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
} from "lucide-react";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
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

    window.addEventListener("scroll", handleScroll);
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

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return [count, ref];
  };

  const projects = [
    {
      title: "PhiMart E-commerce",
      tech: ["Django", "React.js", "DRF", "JavaScript", "PostgreSQL"],
      description:
        "Full-stack e-commerce platform with product catalog, cart, checkout, and order management. Built with Django backend and React frontend.",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Order Management",
        "User Authentication",
        "Payment Integration",
      ],
      github: "https://github.com/Kamrul785/PhiMart",
      live: "https://phimart-demo.netlify.app",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Library Management System",
      tech: ["Django", "React.js", "DRF", "JavaScript", "SQLite"],
      description:
        "Comprehensive library system with circulation workflows, user management, and searchable inventory using Django ORM.",
      features: [
        "Issue/Return Books",
        "User Management",
        "Searchable Inventory",
        "Real-time Availability",
        "Fine Calculation",
      ],
      github: "https://github.com/Kamrul785/LibraryHub",
      live: "https://libraryhub-demo.netlify.app",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Event Management System",
      tech: ["Django", "Python", "Tailwind CSS", "JavaScript", "SMTP"],
      description:
        "Multi-role access system with RBAC, email verification, media handling, and full CRUD operations for events.",
      features: [
        "RBAC",
        "Email Verification",
        "RSVP System",
        "Event Dashboards",
        "Media Upload",
      ],
      github: "https://github.com/Kamrul785/event_management",
      live: "https://event-mgmt-demo.netlify.app",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Task Management System",
      tech: ["Django", "Python", "Tailwind CSS", "JavaScript"],
      description:
        "Efficient task tracking system with authentication, priority management, and clean UI built with Tailwind CSS.",
      features: [
        "Task Assignment",
        "Priority Management",
        "Authentication",
        "Clean UI",
        "Deadline Tracking",
      ],
      github: "https://github.com/Kamrul785/task-management",
      live: "https://taskman-demo.netlify.app",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tuition Hub",
      tech: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      description:
        "Platform connecting tutors and students for efficient tuition management and scheduling.",
      features: [
        "Tutor Matching",
        "Schedule Management",
        "User Profiles",
        "Search System",
        "Booking System",
      ],
      github: "https://github.com/Kamrul785/Tuition-Hub",
      live: "https://tuitionhub-demo.netlify.app",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Blood Management System",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      description:
        "Healthcare application for managing blood donation and distribution efficiently.",
      features: [
        "Donor Management",
        "Blood Inventory",
        "Request System",
        "Admin Panel",
        "Emergency Alerts",
      ],
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
        "Managed financial reporting, budgeting, and expense tracking for garment accessories operations",
        "Built strong client relationships ensuring compliance with budgeted expenditures",
        "Supported management in strategic planning and operational growth initiatives",
      ],
    },
    {
      title: "Marketing Manager",
      company: "Foysal Enterprise",
      location: "Chattogram, Bangladesh",
      period: "2020 - 2021",
      icon: Target,
      points: [
        "Conducted comprehensive market analysis and led successful marketing campaigns",
        "Collaborated cross-functionally with sales, logistics, and finance teams",
        "Forecasted market performance with daily, weekly, and quarterly projections",
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
      link: "https://codeforces.com/profile/Kamrul526785",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "CodeChef",
      username: "kamrulkhan5267",
      rating: "2★",
      link: "https://www.codechef.com/users/kamrulkhan5267",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "LeetCode",
      username: "kamrul08",
      rating: "Active",
      link: "https://leetcode.com/kamrul08",
      color: "from-orange-500 to-red-500",
    },
  ];

  const navigation = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact",
  ];

  const Particles = () => {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    );
  };

  const ScrollReveal = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
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

  // const StatCard = ({ stat, index }) => {
  //   const [count, ref] = useCounter(stat.value, 2000);

  //   return (
  //     <ScrollReveal delay={index * 100}>
  //       <div ref={ref} className="text-center group">
  //         <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
  //           <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
  //             <stat.icon size={40} className="text-blue-500" />
  //           </div>
  //         </div>
  //         <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
  //           {count == 3 ? float(count+0.98) : count}
  //           {/* {count} */}
  //           {stat.suffix}
  //         </div>
  //         <div className="text-gray-500 font-medium">{stat.label}</div>
  //       </div>
  //     </ScrollReveal>
  //   );
  // };

  // In the StatCard component
  const StatCard = ({ stat, index }) => {
    const [count, ref] = useCounter(stat.value, 2000);

    const displayValue = () => {
      if (stat.label === "CGPA") {
        return "3.98";
      }
      return count + stat.suffix;
    };

    return (
      <ScrollReveal delay={index * 100}>
        <div ref={ref} className="text-center group">
          <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30">
              <stat.icon size={40} className="text-blue-500" />
            </div>
          </div>
          <div className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {displayValue()}
          </div>
          <div className="text-gray-500 font-medium">{stat.label}</div>
        </div>
      </ScrollReveal>
    );
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
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
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? "bg-gray-900/95 backdrop-blur-md shadow-lg shadow-blue-500/10"
              : "bg-white/95 backdrop-blur-md shadow-lg"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                KH
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative hover:text-blue-500 transition-colors ${
                    activeSection === item.toLowerCase() ? "text-blue-500" : ""
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse" />
                  )}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-800 transition-all transform hover:rotate-180 duration-500"
              >
                {darkMode ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-blue-500" />
                )}
              </button>

              <button
                className="md:hidden p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div
            className={`md:hidden ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-lg`}
            style={{ animation: "slideDown 0.3s ease-out" }}
          >
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

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16 relative"
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <div className="mb-8 inline-block">
              <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 transform hover:scale-110 transition-transform duration-500 shadow-2xl shadow-blue-500/50">
                <img
                  src={prfileimg}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                  // style={{ animation: "float 2s ease-in-out infinite" }}
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight"
              style={{
                backgroundSize: "300%",
                animation: "gradient 6s ease infinite",
              }}
            >
              Khandokar Kamrul Hasan
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="px-6 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-500/30 text-lg flex items-center gap-2">
                <Zap size={20} className="text-blue-500" />
                Software Engineer
              </span>
              <span className="px-6 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 text-lg flex items-center gap-2">
                <Code size={20} className="text-purple-500" />
                Competitive Programmer
              </span>
              <span className="px-6 py-2 bg-pink-500/20 backdrop-blur-sm rounded-full border border-pink-500/30 text-lg flex items-center gap-2">
                <Rocket size={20} className="text-pink-500" />
                Problem Solver
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p className="text-xl mb-8 text-gray-400 max-w-3xl mx-auto leading-relaxed">
              CSE Student at PCIU with{" "}
              <span className="text-blue-500 font-bold">3.98 CGPA</span> |
              <span className="text-yellow-500 font-bold"> 2★ CodeChef</span> |
              <span className="text-purple-500 font-bold">
                {" "}
                1000+ Codeforces
              </span>{" "}
              | Building scalable web applications with modern technologies
            </p>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center gap-2 font-semibold"
              >
                Get In Touch
                <ChevronRight size={20} />
              </a>
              <a
                href="#projects"
                className={`px-8 py-4 border-2 border-blue-500 rounded-xl hover:bg-blue-500 transition-all transform hover:scale-105 font-semibold ${
                  darkMode ? "" : "text-gray-900"
                }`}
              >
                View Projects
              </a>
              <a
                href={cv}
                download
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center gap-2 font-semibold"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={1000}>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Kamrul785"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800 hover:bg-blue-500 transition-all transform hover:scale-110 hover:rotate-12"
              >
                <Github size={28} />
              </a>
              <a
                href="mailto:kamrulkhan526785@gmail.com"
                className="p-4 rounded-full bg-gray-800 hover:bg-blue-500 transition-all transform hover:scale-110 hover:rotate-12"
              >
                <Mail size={28} />
              </a>
              <a
                href="https://codeforces.com/profile/Kamrul526785"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full bg-gray-800 hover:bg-blue-500 transition-all transform hover:scale-110 hover:rotate-12"
              >
                <Code size={28} />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05))",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
          }}
        />
      </section>

      {/* Stats Section */}
      <section
        className={`py-20 ${
          darkMode ? "bg-gray-800/50" : "bg-white"
        } backdrop-blur-sm relative`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal delay={200}>
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                    <GraduationCap className="text-blue-500" size={32} />
                  </div>
                  Education
                </h3>
                <div
                  className={`p-8 rounded-2xl ${
                    darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
                  } backdrop-blur-sm border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } hover:border-blue-500/50 transition-all transform hover:scale-105`}
                >
                  <h4 className="text-2xl font-bold mb-3">
                    B.Sc. in Computer Science and Engineering
                  </h4>
                  <p className="text-gray-500 mb-2 flex items-center gap-2">
                    <MapPin size={16} />
                    Port City International University (PCIU)
                  </p>
                  <p className="text-gray-500 mb-4">Expected: September 2026</p>
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white font-bold text-xl mb-6">
                    CGPA: 3.98/4.00
                  </div>
                  <div className="mt-6">
                    <p className="font-semibold mb-3 text-lg">
                      Relevant Coursework:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures",
                        "Algorithms",
                        "OOP",
                        "Database Systems",
                        "Software Engineering",
                      ].map((course, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-blue-500/20 rounded-lg text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div>
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                    <Award className="text-yellow-500" size={32} />
                  </div>
                  Leadership & Activities
                </h3>
                <div className="space-y-6">
                  <div
                    className={`p-8 rounded-2xl ${
                      darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
                    } backdrop-blur-sm border ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    } hover:border-purple-500/50 transition-all transform hover:scale-105`}
                  >
                    <h4 className="text-2xl font-bold mb-3">
                      Joint General Secretary
                    </h4>
                    <p className="text-gray-500 mb-4">
                      PCIU Computer Club - CP Wing (2024 - Present)
                    </p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <ChevronRight
                          size={20}
                          className="text-blue-500 mt-1 flex-shrink-0"
                        />
                        <span>Organize coding contests and workshops</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight
                          size={20}
                          className="text-blue-500 mt-1 flex-shrink-0"
                        />
                        <span>
                          Mentor junior programmers in problem-solving
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight
                          size={20}
                          className="text-blue-500 mt-1 flex-shrink-0"
                        />
                        <span>
                          Represent university in inter-university contests
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`p-8 rounded-2xl ${
                      darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
                    } backdrop-blur-sm border ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    } hover:border-green-500/50 transition-all transform hover:scale-105`}
                  >
                    <h4 className="text-2xl font-bold mb-3">
                      C++ Bootcamp Instructor
                    </h4>
                    <p className="text-gray-500 mb-4">2024 - Present</p>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <ChevronRight
                          size={20}
                          className="text-green-500 mt-1 flex-shrink-0"
                        />
                        <span>Teach C++ fundamentals and algorithms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight
                          size={20}
                          className="text-green-500 mt-1 flex-shrink-0"
                        />
                        <span>Guide hands-on coding exercises</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Competitive Programming */}
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
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-8 rounded-2xl transition-all hover:scale-105 ${
                      darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
                    } backdrop-blur-sm border ${
                      darkMode ? "border-gray-700" : "border-gray-200"
                    } hover:border-blue-500/50 relative overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-2xl font-bold">{profile.name}</h4>
                        <ExternalLink
                          size={24}
                          className="text-blue-500 group-hover:rotate-45 transition-transform"
                        />
                      </div>
                      <p className="text-gray-500 mb-4 text-lg">
                        @{profile.username}
                      </p>
                      <div className="flex items-center gap-3">
                        <Star className="text-yellow-500" size={28} />
                        <span
                          className={`text-3xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}
                        >
                          {profile.rating}
                        </span>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={300}>
              <p className="text-center mt-8 text-xl text-gray-400">
                <span className="text-blue-500 font-bold">500+</span> problems
                solved across multiple online judges
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-20 px-4 ${
          darkMode ? "bg-gray-800/50" : "bg-white"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <ScrollReveal key={category} delay={idx * 100}>
                <div
                  className={`p-8 rounded-2xl ${
                    darkMode ? "bg-gray-900/50" : "bg-gray-50"
                  } backdrop-blur-sm border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } hover:border-blue-500/50 transition-all transform hover:scale-105 group`}
                >
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          darkMode
                            ? "bg-gray-800 hover:bg-gray-700"
                            : "bg-white hover:bg-gray-100 shadow"
                        } transition-all hover:scale-110 cursor-default border ${
                          darkMode ? "border-gray-700" : "border-gray-200"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div
                  className={`group relative p-8 rounded-2xl transition-all duration-500 ${
                    darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
                  } backdrop-blur-sm border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } hover:border-blue-500/50 overflow-hidden`}
                  style={{
                    transform:
                      hoveredProject === idx ? "scale(1.05)" : "scale(1)",
                  }}
                  onMouseEnter={() => setHoveredProject(idx)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}
                    >
                      <Code size={32} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <p className="font-semibold mb-3 text-sm uppercase tracking-wider text-gray-500">
                        Key Features:
                      </p>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <ChevronRight
                              size={16}
                              className="text-blue-500 mt-0.5 flex-shrink-0"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${project.color} bg-opacity-20 border border-blue-500/30`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all transform hover:scale-105 font-medium"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r ${project.color} rounded-xl hover:shadow-lg transition-all transform hover:scale-105 font-medium`}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className={`py-20 px-4 ${
          darkMode ? "bg-gray-800/50" : "bg-white"
        } backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </ScrollReveal>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <ScrollReveal key={idx} delay={idx * 200}>
                <div
                  className={`group p-10 rounded-2xl ${
                    darkMode ? "bg-gray-900/50" : "bg-gray-50"
                  } backdrop-blur-sm border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } hover:border-blue-500/50 transition-all hover:shadow-2xl`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform">
                        <exp.icon size={32} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-blue-500 text-xl font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-400 mt-4 md:mt-0 md:text-right">
                      <p className="flex items-center gap-2 md:justify-end mb-2">
                        <MapPin size={18} />
                        {exp.location}
                      </p>
                      <p className="text-sm bg-blue-500/20 px-4 py-2 rounded-lg inline-block">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-400 leading-relaxed"
                      >
                        <ChevronRight
                          size={20}
                          className="text-blue-500 mt-1 flex-shrink-0"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-2xl text-gray-400 mb-16 text-center leading-relaxed">
              I'm always open to discussing new projects, opportunities, or just
              having a friendly chat about tech!
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={300}>
              <a
                href="mailto:kamrulkhan526785@gmail.com"
                className={`group p-8 rounded-2xl hover:scale-105 transition-all ${
                  darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
                } backdrop-blur-sm border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } hover:border-blue-500/50 text-center`}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={40} className="text-blue-500" />
                </div>
                <h3 className="font-bold mb-3 text-xl">Email</h3>
                <p className="text-sm text-gray-400 break-words">
                  kamrulkhan526785@gmail.com
                </p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <a
                href="tel:+8801747333257"
                className={`group p-8 rounded-2xl hover:scale-105 transition-all ${
                  darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
                } backdrop-blur-sm border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } hover:border-green-500/50 text-center`}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={40} className="text-green-500" />
                </div>
                <h3 className="font-bold mb-3 text-xl">Phone</h3>
                <p className="text-sm text-gray-400">+880 1747 333257</p>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <div
                className={`group p-8 rounded-2xl transition-all ${
                  darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
                } backdrop-blur-sm border ${
                  darkMode ? "border-gray-700" : "border-gray-200"
                } hover:border-purple-500/50 text-center`}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin size={40} className="text-purple-500" />
                </div>
                <h3 className="font-bold mb-3 text-xl">Location</h3>
                <p className="text-sm text-gray-400">Chattogram, Bangladesh</p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={600}>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Kamrul785"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 hover:from-blue-500 hover:to-blue-600 transition-all transform hover:scale-110 hover:rotate-12 shadow-lg"
              >
                <Github size={32} />
              </a>
              <a
                href="mailto:kamrulkhan526785@gmail.com"
                className="p-5 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 hover:from-red-500 hover:to-red-600 transition-all transform hover:scale-110 hover:rotate-12 shadow-lg"
              >
                <Mail size={32} />
              </a>
              <a
                href="https://codeforces.com/profile/Kamrul526785"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 hover:from-purple-500 hover:to-purple-600 transition-all transform hover:scale-110 hover:rotate-12 shadow-lg"
              >
                <Code size={32} />
              </a>
              <a
                href="https://www.codechef.com/users/kamrulkhan5267"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-110 hover:rotate-12 shadow-lg"
              >
                <Trophy size={32} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 text-center ${
          darkMode ? "bg-gray-800/50" : "bg-white"
        } backdrop-blur-sm border-t ${
          darkMode ? "border-gray-700" : "border-gray-200"
        }`}
      >
        <p className="text-gray-400 mb-2">
          © 2025 Khandokar Kamrul Hasan. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          Built with ❤️ using React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
