import { Bars3BottomRightIcon, BoltIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" bg-blue-200 flex justify-between px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {/* logo section */}
      <div className="relative flex justify-between  items-center">
        <Link to="/" className="inline-flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-600"></BoltIcon>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">nextPage</span>
        </Link>
        <ul className="hidden items-center lg:flex space-x-8">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-700" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/books" className={({ isActive }) => (isActive ? "text-blue-700" : "")}>
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-700" : "")}>
              About
            </NavLink>
          </li>
        </ul>
      </div>

      {/* mobile version*/}
      <div className="lg:hidden">
        <button title="Open Menu" aria-level="Open Menu" onClick={() => setIsMenuOpen(true)}>
          <Bars3BottomRightIcon className="text-gray-800 w-5"></Bars3BottomRightIcon>
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full z-10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link to="/" className="inline-flex items-center">
                    <BoltIcon className="h-6 w-6 text-blue-500" />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                      nextPage
                    </span>
                  </Link>
                </div>
                {/* Dropdown menu close button */}
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <XMarkIcon className="w-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
