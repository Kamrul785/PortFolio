import React, { useRef, useState } from "react";

const ContactCard = ({ icon, title, content, href, color, delay = 0, darkMode }) => {
  const Icon = icon;
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
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="block p-8 rounded-2xl transition-all duration-500 shadow-xl backdrop-blur-sm border text-center relative overflow-hidden group"
      style={{
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        animation: `float 3s ease-in-out infinite ${delay}s`,
        background: isHovered
          ? `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${
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
      <div
        className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${isHovered ? "opacity-20" : "opacity-0"}`}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${
            color === "blue" ? "#3b82f6" : color === "green" ? "#22c55e" : "#9333ea"
          }, transparent 50%)`,
        }}
      />

      {isHovered && (
        <>
          <div className="absolute top-4 right-4 w-1 h-1 bg-current rounded-full animate-ping" />
          <div className="absolute bottom-4 left-4 w-1 h-1 bg-current rounded-full animate-ping" style={{ animationDelay: "0.3s" }} />
        </>
      )}

      <div className="relative z-10">
        <div
          className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transform transition-all duration-500 ${isHovered ? "scale-110 rotate-12" : ""}`}
          style={{
            background:
              color === "blue"
                ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(37, 99, 235, 0.2))"
                : color === "green"
                ? "linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(22, 163, 74, 0.2))"
                : "linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(126, 34, 206, 0.2))",
          }}
        >
          <Icon size={40} className={color === "blue" ? "text-blue-500" : color === "green" ? "text-green-500" : "text-purple-500"} />
        </div>

        <h3 className="font-bold mb-3 text-xl">{title}</h3>
        <p className="text-sm text-gray-400 break-words">{content}</p>
      </div>

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

export default ContactCard;
