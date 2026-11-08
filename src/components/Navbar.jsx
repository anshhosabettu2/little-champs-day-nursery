import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import kidsNestLogo from "../assets/kidsnest-logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Desktop navigation colors
  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "font-semibold text-[#6C63A8]"
        : "text-gray-600 hover:text-[#6C63A8]"
    }`;

  // Mobile navigation colors
  const mobileNavLinkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "bg-[#F0EEFA] font-semibold text-[#6C63A8]"
        : "text-gray-600 hover:bg-[#F0EEFA] hover:text-[#6C63A8]"
    }`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    closeMenu();
    navigate("/login");
  };

  const handleDemo = () => {
    closeMenu();
    navigate("/book-demo");
  };

  return (
    <nav className="w-full border-b border-[#E7E3F5] bg-white">

      <div className="mx-auto flex h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            LOGO
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className="flex items-center"
          >
            <img
              src={kidsNestLogo}
              alt="Little Champs Day Nursery"
              className="h-14 w-auto object-contain"
            />
          </NavLink>
        </motion.div>

        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}
        <div className="ml-10 hidden items-center gap-7 md:flex">

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <NavLink to="/pricing" className={navLinkClass}>
              Pricing
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
          </motion.div>

        </div>

        {/* =====================================================
            DESKTOP ACTIONS
        ===================================================== */}
        <div className="ml-auto hidden items-center gap-4 md:flex">

          {/* Login */}
          <button
            onClick={handleLogin}
            className="text-sm font-semibold text-[#26352D] transition-colors hover:text-[#6C63A8]"
          >
            Login
          </button>

          {/* Book Demo */}
          <button
            onClick={handleDemo}
            className="rounded-lg bg-[#6C63A8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#514A8A] hover:shadow-md"
          >
            Book a Demo
          </button>

        </div>

        {/* =====================================================
            MOBILE HAMBURGER
        ===================================================== */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="ml-auto rounded-lg p-2 text-[#26352D] transition hover:bg-[#F0EEFA] hover:text-[#6C63A8] md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-[#E7E3F5] bg-white px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-2">

            <NavLink
              to="/"
              className={mobileNavLinkClass}
              onClick={closeMenu}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className={mobileNavLinkClass}
              onClick={closeMenu}
            >
              Services
            </NavLink>

            <NavLink
              to="/pricing"
              className={mobileNavLinkClass}
              onClick={closeMenu}
            >
              Pricing
            </NavLink>

            <NavLink
              to="/about"
              className={mobileNavLinkClass}
              onClick={closeMenu}
            >
              About Us
            </NavLink>

            {/* =================================================
                MOBILE ACTIONS
            ================================================= */}
            <div className="mt-2 border-t border-[#E7E3F5] pt-3">

              {/* Login */}
              <button
                onClick={handleLogin}
                className="w-full rounded-lg px-3  py-2 text-left text-sm font-semibold text-[#26352D] transition hover:bg-[#F0EEFA] hover:text-[#6C63A8]"
              >
                Login
              </button>

              {/* Book Demo */}
              <button
                onClick={handleDemo}
                className="mt-2 w-full rounded-lg bg-[#6C63A8] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#514A8A]"
              >
                Book a Demo
              </button>

            </div>

          </div>
        </motion.div>
      )}

    </nav>
  );
};

export default Navbar;

