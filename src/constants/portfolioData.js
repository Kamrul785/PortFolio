import { Code, Award, Briefcase, Github, Trophy, Target, Zap, Linkedin, Twitter, Facebook } from "lucide-react";

export const experiences = [
  {
    title: "Competitive Programming Mentor",
    company: "PCIU Computer Club - CP Wing",
    icon: Code,
    location: "Chattogram, Bangladesh",
    period: "2024 - Present",
    points: [
      "Mentor junior programmers in problem-solving and competitive programming techniques",
      "Conduct weekly coding contests and technical workshops",
      "Represent the university in inter-university programming competitions",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Self-Employed / Freelance",
    icon: Briefcase,
    location: "Remote",
    period: "2023 - Present",
    points: [
      "Developed and deployed full-stack web applications using React.js, Django, and Next.js",
      "Implemented AI/ML integrations for data-driven decision making",
      "Built production-ready systems with focus on scalability and performance optimization",
      "Collaborated with clients to deliver customized solutions within deadlines",
    ],
  },
  {
    title: "C++ Bootcamp Instructor",
    company: "PCIU",
    icon: Award,
    location: "Chattogram, Bangladesh",
    period: "2024 - Present",
    points: [
      "Teach fundamental and advanced C++ concepts to students",
      "Design and conduct hands-on coding exercises and assessments",
      "Guide students through data structures and algorithm design",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "PhiMart E-commerce",
    tech: ["Django", "React.js", "DRF", "JavaScript", "PostgreSQL"],
    description:
      "Full-stack e-commerce platform with product catalog, cart, checkout, and order management. Built with Django backend and React frontend.",
    image: null,
    features: [
      "Product Catalog",
      "Shopping Cart",
      "Order Management",
      "User Authentication",
      "Payment Integration",
    ],
    challenges: [
      "Implementing real-time inventory management across distributed systems",
      "Optimizing database queries for high-traffic scenarios",
      "Ensuring secure payment gateway integration",
      "Managing user session authentication and authorization",
    ],
    futurePlans: [
      "Implement AI-powered product recommendations",
      "Add multi-currency and multi-language support",
      "Integrate with advanced analytics dashboard",
      "Mobile app development for iOS and Android",
    ],
    github: "https://github.com/Kamrul785/PhiMart",
    live: "https://phi-mart-client-lemon.vercel.app/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Library Management System",
    tech: ["Django", "React.js", "DRF", "JavaScript", "SQLite"],
    description:
      "Comprehensive library system with circulation workflows, user management, and searchable inventory using Django ORM.",
    image: null,
    features: [
      "Issue/Return Books",
      "User Management",
      "Searchable Inventory",
      "Real-time Availability",
      "Fine Calculation",
    ],
    challenges: [
      "Complex circulation workflow with reservation system",
      "Real-time inventory tracking and notifications",
      "Automated fine calculation with multiple policies",
      "Integration with library card system",
    ],
    futurePlans: [
      "QR code-based book tracking",
      "Mobile app for book search and renewal",
      "Integration with digital library resources",
      "Advanced analytics for library usage patterns",
    ],
    github: "https://github.com/Kamrul785/LibraryHub",
    live: "https://libraryhub-demo.netlify.app",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Event Management System",
    tech: ["Django", "Python", "Tailwind CSS", "JavaScript", "SMTP"],
    description:
      "Multi-role access system with RBAC, email verification, media handling, and full CRUD operations for events.",
    image: null,
    features: [
      "RBAC",
      "Email Verification",
      "RSVP System",
      "Event Dashboards",
      "Media Upload",
    ],
    challenges: [
      "Implementing role-based access control with fine-grained permissions",
      "Email verification and notification system scalability",
      "Handling large media file uploads and storage",
      "Managing concurrent event registrations",
    ],
    futurePlans: [
      "Ticket generation and QR code scanning",
      "Integration with payment gateways",
      "Virtual and hybrid event support",
      "Advanced attendee analytics and reporting",
    ],
    github: "https://github.com/Kamrul785/event_management",
    live: "https://event-management-six-lime.vercel.app/",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 4,
    title: "Task Management System",
    tech: ["Django", "Python", "Tailwind CSS", "JavaScript"],
    description:
      "Efficient task tracking system with authentication, priority management, and clean UI built with Tailwind CSS.",
    image: null,
    features: [
      "Task Assignment",
      "Priority Management",
      "Authentication",
      "Clean UI",
      "Deadline Tracking",
    ],
    challenges: [
      "Real-time task status synchronization",
      "Handling complex task dependencies",
      "Implementing efficient search and filtering",
      "Managing team collaboration features",
    ],
    futurePlans: [
      "Kanban board view and drag-and-drop functionality",
      "Time tracking and productivity analytics",
      "Integration with calendar systems",
      "Team collaboration with comments and mentions",
    ],
    github: "https://github.com/Kamrul785/task-management",
    live: "https://taskman-demo.netlify.app",
    color: "from-orange-500 to-red-500",
  },
];

export const stats = [
  { label: "Problems Solved", value: 500, icon: Code, suffix: "+" },
  { label: "Projects", value: 25, icon: Github, suffix: "+" },
  { label: "Codeforces Rating", value: 1000, icon: Trophy, suffix: "+" },
  { label: "Languages Known", value: 10, icon: Target, suffix: "+" },
];

export const skills = {
  Languages: ["C++", "C", "Python", "JavaScript"],
  Frontend: ["React.js", "Tailwind CSS", "Bootstrap", "HTML/CSS"],
  Backend: ["Django", "Django REST Framework", "Node.js", "PHP"],
  Databases: ["MySQL", "PostgreSQL", "SQLite"],
  Tools: ["Git", "VS Code", "Postman", "GitHub"],
  Core: ["Data Structures", "Algorithms", "OOP", "Problem Solving"],
};

export const cpProfiles = [
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

export const navigation = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Research", id: "research" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com/Kamrul785", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/khandokarkamrulhasan",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://twitter.com/yourhandle", label: "Twitter" },
  {
    icon: Facebook,
    href: "https://facebook.com/yourprofile",
    label: "Facebook",
  },
];
