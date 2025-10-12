import React, { useState, useEffect, useRef } from "react";
import prfileimg from "../assets/profile.jpg";
import cv from "../assets/Kamrul_Hasan__CV.pdf";
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
  const [formStatus, setFormStatus] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Only update scrolled state if crossing the threshold
          const shouldBeScrolled = window.scrollY > 50;
          if (shouldBeScrolled !== scrolled) {
            setScrolled(shouldBeScrolled);
          }

          // Update active section less frequently
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

          if (current && current !== activeSection) {
            setActiveSection(current);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, activeSection]); // Add dependencies

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

  const CPCard = ({ profile }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
      setMousePosition({ x: x / rect.width, y: y / rect.height });
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setTilt({ x: 0, y: 0 });
          setIsHovered(false);
        }}
        className="group"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${
            tilt.y
          }deg) ${isHovered ? "scale(1.05)" : "scale(1)"}`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <a
          href={profile.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl backdrop-blur-sm border overflow-hidden"
          style={{
            background: darkMode
              ? `radial-gradient(circle at ${mousePosition.x * 100}% ${
                  mousePosition.y * 100
                }%, rgba(59, 130, 246, 0.15), rgba(17, 24, 39, 0.8))`
              : `radial-gradient(circle at ${mousePosition.x * 100}% ${
                  mousePosition.y * 100
                }%, rgba(59, 130, 246, 0.1), white)`,
            borderColor: darkMode ? "#374151" : "#e5e7eb",
          }}
        >
          {/* Animated glow effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
          />

          {/* Floating particles effect */}
          {isHovered && (
            <>
              <div className="absolute top-10 right-10 w-2 h-2 bg-blue-500 rounded-full animate-ping" />
              <div
                className="absolute bottom-10 left-10 w-2 h-2 bg-purple-500 rounded-full animate-ping"
                style={{ animationDelay: "0.5s" }}
              />
            </>
          )}

          <div className="relative z-10">
            {/* Header with animated icon */}
            <div className="flex items-center justify-between mb-6">
              <div
                className={`p-4 rounded-xl bg-gradient-to-br ${
                  profile.color
                } transform transition-all duration-500 ${
                  isHovered ? "rotate-12 scale-110" : ""
                }`}
              >
                <profile.icon size={32} className="text-white" />
              </div>
              <ExternalLink
                size={24}
                className={`transform transition-all duration-500 ${
                  isHovered ? "rotate-45" : ""
                } text-blue-500 hover:text-gray-400`}
              />
            </div>

            {/* Profile info */}
            <h4 className="text-2xl font-bold mb-2">{profile.name}</h4>
            <p className="text-gray-500 mb-6 text-sm">@{profile.username}</p>

            {/* Animated stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div
                className={`p-4 rounded-xl transition-all duration-300 ${
                  isHovered ? "translate-y-[-4px]" : ""
                }`}
                style={{
                  backgroundColor: darkMode
                    ? "rgba(31, 41, 55, 0.5)"
                    : "rgba(249, 250, 251, 1)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-500" size={16} />
                  <span className="text-xs text-gray-500">Rating</span>
                </div>
                <p
                  className={`text-xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}
                >
                  {profile.rating}
                </p>
              </div>

              <div
                className={`p-4 rounded-xl transition-all duration-300 ${
                  isHovered ? "translate-y-[-4px]" : ""
                }`}
                style={{
                  backgroundColor: darkMode
                    ? "rgba(31, 41, 55, 0.5)"
                    : "rgba(249, 250, 251, 1)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-green-500" size={16} />
                  <span className="text-xs text-gray-500">Max</span>
                </div>
                <p
                  className={`text-xl font-bold bg-gradient-to-r ${profile.color} bg-clip-text text-transparent`}
                >
                  {profile.maxRating}
                </p>
              </div>
            </div>

            {/* Problems solved indicator */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <div className="flex items-center gap-2">
                <Award size={20} className="text-blue-500" />
                <span className="text-sm font-medium">Problems Solved</span>
              </div>
              <span className="text-xl font-bold">{profile.solved}</span>
            </div>
          </div>
        </a>
      </div>
    );
  };

  // Enhanced Contact Card with React Bits-style animations
  const ContactCard = ({ icon: Icon, title, content, href, color, delay }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      setMousePosition({ x, y });
    };

    return (
      <a
        href={href}
        ref={cardRef}
        target="_blank"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="block p-8 rounded-2xl transition-all duration-500 shadow-xl backdrop-blur-sm border text-center relative overflow-hidden group"
        style={{
          transform: isHovered ? "translateY(-10px)" : "translateY(0)",
          animation: `float 3s ease-in-out infinite ${delay}s`,
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x * 100}% ${
                mousePosition.y * 100
              }%, ${
                color === "blue"
                  ? "rgba(59, 130, 246, 0.1)"
                  : color === "green"
                  ? "rgba(34, 197, 94, 0.1)"
                  : "rgba(147, 51, 234, 0.1)"
              }, ${darkMode ? "rgba(17, 24, 39, 0.8)" : "white"})`
            : darkMode
            ? "rgba(31, 41, 55, 0.5)"
            : "white",
          borderColor: darkMode ? "#374151" : "#e5e7eb",
        }}
      >
        {/* Animated background glow */}
        <div
          className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
            isHovered ? "opacity-20" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
              mousePosition.y * 100
            }%, ${
              color === "blue"
                ? "#3b82f6"
                : color === "green"
                ? "#22c55e"
                : "#9333ea"
            }, transparent 50%)`,
          }}
        />

        {/* Floating particles */}
        {isHovered && (
          <>
            <div className="absolute top-4 right-4 w-1 h-1 bg-current rounded-full animate-ping" />
            <div
              className="absolute bottom-4 left-4 w-1 h-1 bg-current rounded-full animate-ping"
              style={{ animationDelay: "0.3s" }}
            />
          </>
        )}

        <div className="relative z-10">
          {/* Animated icon container */}
          <div
            className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transform transition-all duration-500 ${
              isHovered ? "scale-110 rotate-12" : ""
            }`}
            style={{
              background:
                color === "blue"
                  ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))"
                  : color === "green"
                  ? "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(22, 163, 74, 0.2))"
                  : "linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(126, 34, 206, 0.2))",
            }}
          >
            <Icon
              size={40}
              className={
                color === "blue"
                  ? "text-blue-500"
                  : color === "green"
                  ? "text-green-500"
                  : "text-purple-500"
              }
            />
          </div>

          <h3 className="font-bold mb-3 text-xl">{title}</h3>
          <p className="text-sm text-gray-400 break-words">{content}</p>
        </div>

        {/* Ripple effect on hover */}
        {isHovered && (
          <div
            className="absolute rounded-full border-2 border-current animate-ping"
            style={{
              width: "20px",
              height: "20px",
              left: `${mousePosition.x * 100}%`,
              top: `${mousePosition.y * 100}%`,
              transform: "translate(-50%, -50%)",
              opacity: 0.3,
            }}
          />
        )}
      </a>
    );
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setFormStatus("sending");

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    try {
      // Example: simulate API call or email sending
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Clear inputs after successful submission
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      console.log({ name, email, message });
      setFormStatus("success");

      // Reset form status after 3 seconds
      setTimeout(() => setFormStatus(""), 3000);
    } catch (error) {
      setFormStatus("error");
      console.error("Error submitting contact form:", error);

      // Show error for 3 seconds, then clear
      setTimeout(() => setFormStatus(""), 3000);
    }
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  // const cpProfiles = [
  //   {
  //     name: "Codeforces",
  //     username: "Kamrul526785",
  //     rating: "1000+",
  //     link: "https://codeforces.com/profile/Kamrul526785",
  //     color: "from-blue-500 to-cyan-500",
  //   },
  //   {
  //     name: "CodeChef",
  //     username: "kamrulkhan5267",
  //     rating: "2★",
  //     link: "https://www.codechef.com/users/kamrulkhan5267",
  //     color: "from-yellow-500 to-orange-500",
  //   },
  //   {
  //     name: "LeetCode",
  //     username: "kamrul08",
  //     rating: "Active",
  //     link: "https://leetcode.com/kamrul08",
  //     color: "from-orange-500 to-red-500",
  //   },
  // ];

  const cpProfiles = [
    {
      name: "Codeforces",
      username: "Kamrul526785",
      rating: 1000,
      maxRating: 1030,
      solved: 500,
      link: "https://codeforces.com/profile/Kamrul526785",
      color: "from-blue-500 via-blue-600 to-cyan-500",
      icon: Code,
    },
    {
      name: "CodeChef",
      username: "kamrulkhan5267",
      rating: "2★",
      maxRating: 1477,
      solved: 150,
      link: "https://www.codechef.com/users/kamrulkhan5267",
      color: "from-amber-500 via-orange-500 to-red-500",
      icon: Trophy,
    },
    {
      name: "LeetCode",
      username: "kamrul08",
      rating: "Active",
      maxRating: 150,
      solved: 100,
      link: "https://leetcode.com/kamrul08",
      color: "from-orange-400 via-red-500 to-pink-500",
      icon: Zap,
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
                  <CPCard profile={profile} />
                </ScrollReveal>
              ))}
            </div>
          </div>
          {/* cp old section  */}
          {/* <div className="mt-16">
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
          </div> */}
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
                  className={`group relative p-8 rounded-2xl transition-transform duration-300 ease-in-out hover:scale-105 ${
                    darkMode ? "bg-gray-800/50" : "bg-white shadow-xl"
                  } backdrop-blur-sm border ${
                    darkMode ? "border-gray-700" : "border-gray-200"
                  } hover:border-blue-500/50 overflow-hidden`}
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
      {/* <section id="contact" className="py-20 px-4">
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
      </section> */}

      {/* Enhanced Get In Touch Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
              Ready to collaborate on your next project? Let's connect and
              create something amazing together!
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <ScrollReveal delay={100}>
              <ContactCard
                icon={Mail}
                title="Email"
                content="kamrulkhan526785@gmail.com"
                href="mailto:kamrulkhan526785@gmail.com"
                color="blue"
                delay={0}
              />
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ContactCard
                icon={Phone}
                title="Phone"
                content="+88 01747333257"
                href="tel:+8801747333257"
                color="green"
                delay={0.5}
              />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <ContactCard
                icon={MapPin}
                title="Location"
                content="Chattogram, Bangladesh"
                href="https://maps.google.com/?q=Chattogram,Bangladesh"
                color="purple"
                delay={1}
              />
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <ContactCard
                icon={Github}
                title="GitHub"
                content="github.com/Kamrul785"
                href="https://github.com/Kamrul785"
                color="blue"
                delay={1.5}
              />
            </ScrollReveal>
          </div>

          {/* Enhanced Contact Form */}
          <ScrollReveal delay={500}>
            <div className="max-w-2xl mx-auto">
              <div
                className={`p-8 rounded-2xl shadow-2xl backdrop-blur-sm border ${
                  darkMode
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Send a Message
                </h3>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <input
                          type="text"
                          name="name"
                          // value={formData.name}
                          // onChange={handleInputChange}
                          ref={nameRef}
                          required
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            darkMode
                              ? "bg-gray-700 border-gray-600 text-white"
                              : "bg-gray-50 border-gray-300"
                          }`}
                          placeholder="Your Name"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <input
                          type="email"
                          name="email"
                          // value={formData.email}
                          // onChange={handleInputChange}
                          ref={emailRef}
                          required
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                            darkMode
                              ? "bg-gray-700 border-gray-600 text-white"
                              : "bg-gray-50 border-gray-300"
                          }`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare
                        className="absolute left-3 top-4 text-gray-400"
                        size={20}
                      />
                      <textarea
                        name="message"
                        // value={formData.message}
                        // onChange={handleInputChange}
                        ref={messageRef}
                        required
                        rows={6}
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                          darkMode
                            ? "bg-gray-700 border-gray-600 text-white"
                            : "bg-gray-50 border-gray-300"
                        }`}
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all transform hover:scale-[1.02] hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === "sending" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : formStatus === "success" ? (
                      <>
                        <CheckCircle size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>

                {formStatus === "success" && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                    <p className="text-green-400">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  </div>
                )}
              </div>
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
      </footer>
    </div>
  );
};

export default Portfolio;
