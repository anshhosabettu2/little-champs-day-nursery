import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/kidsnest-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#F7E5CE] text-[#26352D]">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo & About */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src={logo}
                alt="Little Champs Day Nursery"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
              KidsNest is a smart nursery management platform designed
              to make school operations simple, organized, and efficient.
            </p>

            {/* Small Brand Accent */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F6C85F]" />
              <span className="h-2 w-8 rounded-full bg-[#F4A261]" />
              <span className="h-2 w-2 rounded-full bg-[#6C63A8]" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#6C63A8]">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">

              <li>
                <Link
                  to="/"
                  className="text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-[#6C63A8]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-[#6C63A8]"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-[#6C63A8]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 transition-all duration-200 hover:translate-x-1 hover:text-[#6C63A8]"
                >
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-[#6C63A8]">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-600">

              <li className="transition-all duration-200 hover:translate-x-1 hover:text-[#F4A261]">
                Student Management
              </li>

              <li className="transition-all duration-200 hover:translate-x-1 hover:text-[#F4A261]">
                Teacher Management
              </li>

              <li className="transition-all duration-200 hover:translate-x-1 hover:text-[#F4A261]">
                Admission Management
              </li>

              <li className="transition-all duration-200 hover:translate-x-1 hover:text-[#F4A261]">
                Fees Management
              </li>

              <li className="transition-all duration-200 hover:translate-x-1 hover:text-[#F4A261]">
                Attendance Management
              </li>

              <li className="transition-all duration-200 hover:translate-x-1 hover:text-[#F4A261]">
                Franchise Management
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-[#6C63A8]">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-sm text-gray-600">

              <p className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0EEFA] text-[#6C63A8]">
                  📍
                </span>

                <span className="pt-1">
                  Mumbai, Maharashtra, India
                </span>
              </p>

              <p className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF4E9] text-[#F4A261]">
                  📧
                </span>

                <span className="pt-1">
                  hello@kidsnest.com
                </span>
              </p>

              <p className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF8D9] text-[#D9A929]">
                  📞
                </span>

                <span className="pt-1">
                  +91 98765 43210
                </span>
              </p>

            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0EEFA] font-semibold text-[#6C63A8] transition duration-300 hover:-translate-y-1 hover:bg-[#6C63A8] hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF4E9] font-semibold text-[#F4A261] transition duration-300 hover:-translate-y-1 hover:bg-[#F4A261] hover:text-white"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF8D9] font-semibold text-[#D9A929] transition duration-300 hover:-translate-y-1 hover:bg-[#D9A929] hover:text-white"
              >
                in
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#E7E3F5] bg-[#F0EEFA]">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} KidsNest. All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link
              to="/privacy"
              className="transition hover:text-[#6C63A8]"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-[#6C63A8]"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

