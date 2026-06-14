import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbX, TbMenu } from "react-icons/tb";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On home page: always transparent, sticky. On other pages: show background when scrolled
  const headerStyle = isHomePage
    ? {
      backgroundColor: "transparent",
      backdropFilter: "none",
    }
    : {
      backgroundColor: isScrolled ? "rgba(15, 23, 42, 0.95)" : "transparent",
      backdropFilter: isScrolled ? "blur(12px)" : "none",
    };

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        border-b border-sky-500/10
      "
      style={headerStyle}
    >
      <nav
        className="
          mx-auto max-w-6xl px-4 sm:px-6 lg:px-8
          py-4 flex items-center justify-between
        "
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="
              text-2xl font-bold
              bg-gradient-to-r from-sky-400 to-sky-600
              bg-clip-text text-transparent
              hover:opacity-80 transition-opacity
            "
          >
            MA
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                to={link.href}
                className="
                  block px-4 py-2 text-sm font-medium text-slate-300
                  rounded-lg hover:bg-sky-500/10 hover:text-sky-300
                  transition-colors
                "
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={toggleMenu}
          className="
            md:hidden p-2 rounded-lg
            hover:bg-sky-500/10
            text-slate-300 hover:text-sky-300
            transition-colors
          "
          aria-label="Toggle menu"
        >
          {isOpen ? <TbX size={24} /> : <TbMenu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="
          md:hidden overflow-hidden
          border-t border-sky-500/10
          bg-slate-900/50
        "
      >
        <div
          className="
            px-4 py-4 space-y-2
            mx-auto max-w-6xl
          "
        >
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
            >
              <Link
                to={link.href}
                onClick={closeMenu}
                style={{ color: location.pathname === link.href ? "#38bdf8" : "#cbd5e1" }}
                className={`
                  block px-4 py-2 text-sm font-medium rounded-lg
                  hover:bg-sky-500/10 hover:text-sky-300
                  transition-colors
                `}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </header>
  );
}