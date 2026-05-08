import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const Navbar = ({
  darkMode,
  setDarkMode,
  scrolled,
  menuOpen,
  setMenuOpen,
  activeSection,
  navigation,
  socialLinks,
  handleNavClick,
}) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-3 pt-3 sm:px-6">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? darkMode
              ? "bg-gray-900/90 border-gray-700/70 backdrop-blur-xl shadow-2xl shadow-cyan-500/10"
              : "bg-white/90 border-gray-200 backdrop-blur-xl shadow-xl"
            : darkMode
              ? "bg-gray-900/60 border-gray-700/40 backdrop-blur-md"
              : "bg-white/60 border-gray-200/70 backdrop-blur-md"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="group text-lg font-black tracking-[0.18em] uppercase"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              KKH
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? darkMode
                        ? "text-cyan-300"
                        : "text-blue-700"
                      : darkMode
                        ? "text-gray-200 hover:text-cyan-300"
                        : "text-gray-700 hover:text-blue-700"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className={`absolute inset-0 -z-10 rounded-full ${
                        darkMode
                          ? "bg-cyan-500/10 ring-1 ring-cyan-300/40"
                          : "bg-blue-100 ring-1 ring-blue-300"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 36,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:flex items-center space-x-2 mr-2">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-full hover:scale-110 transition-transform text-gray-200/90 bg-transparent"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-xl p-2 transition-transform duration-300 hover:scale-110 ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              {darkMode ? (
                <Sun size={20} className="text-amber-400" />
              ) : (
                <Moon size={20} className="text-blue-600" />
              )}
            </button>

            <button
              aria-label="Toggle menu"
              className={`md:hidden rounded-xl p-2 transition-colors ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-gray-300/20"
            >
              <div className="px-4 pb-4 pt-3 space-y-2">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? darkMode
                          ? "bg-cyan-500/10 text-cyan-300"
                          : "bg-blue-100 text-blue-700"
                        : darkMode
                          ? "text-gray-200 hover:bg-gray-800"
                          : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
