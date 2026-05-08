import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 text-center ${darkMode ? "bg-gray-800/50" : "bg-white"} backdrop-blur-sm border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
      <p className="text-gray-400 mb-2">© 2025 Khandokar Kamrul Hasan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
