import React from "react";
import logo from "../../assets/byteBhojan.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mt-5 mb-3 mx-3 py-4 px-10 bg-yellow-100 border-gray-200 dark:bg-gray-900 rounded-full">
      <div className="w-full flex flex-wrap items-center justify-between">
        <a href="" className="flex items-center space-x-1 rtl:space-x-reverse">
          <img src={logo} className="pt h-20" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            byteBhojan
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-white rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            {/* <img
              className="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 rounded-full"
              viewBox="0 0 320 512"
            >
              <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
            </svg>
          </button>
          {/* <!-- Dropdown menu --> */}
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            {/* <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            > */}
            {/* <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              /> */}
            {/* </svg> */}
          </button>
        </div>

        {/* here is you navlinks */}
        <div>
          
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
          >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-yellow-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                `block py-2 px-3 rounded md:p-0 ${
                  isActive ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`
              }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                `block py-2 px-3 rounded md:p-0 ${
                  isActive ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700"
                }`
              }
              >
                About
              </NavLink>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                Contact
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
