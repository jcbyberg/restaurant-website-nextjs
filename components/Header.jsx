import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive(!navActive);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-3xl font-extrabold text-black"
        >
          <Image
            src="/stone-oven.svg"
            alt="Stone oven logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10"
          />
          <span>La Pietra</span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          
          
          <a
            href="#dishes"
            className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
          >
            Menu
          </a>
          
          <a
            href="#footer"
            className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#"
              className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-jellyBeanBlue transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-jellyBeanBlue transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-jellyBeanBlue transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <button
            onClick={toggleNav}
            className="md:hidden text-2xl text-sunset transition-colors duration-300 hover:text-jellyBeanBlue"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {navActive && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-2 px-6 py-4">
            <a
              href="#home"
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
            >
              Home
            </a>
            
            <a
              href="#about"
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
            >
              About
            </a>
            <a
              href="#dishes"
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
            >
              Menu
            </a>
            <a
              href="#review"
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
            >
              Reviews
            </a>
            <a
              href="#footer"
              className="text-lg font-medium text-gray-600 hover:text-white hover:bg-jellyBeanBlue transition duration-300 px-3 py-2 rounded-lg"
            >
              Contact
            </a>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-jellyBeanBlue transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-jellyBeanBlue transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-jellyBeanBlue transition-colors"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </nav>
        </div>
      )}

    </header>
  );
};

export default Header;
