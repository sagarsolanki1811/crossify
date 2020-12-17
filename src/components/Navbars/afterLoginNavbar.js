import React from "react";
import logo from "../../assets/logos/FINAL_BG_LOGO.png";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <a href="/">
            <img
              className="brand-name"
              src={logo}
              style={{ height: "30px", width: "120px" }}
            />
          </a>

          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* for mobile you have change text-black in all the navbar buttons/links */}
              <li className="flex items-center">
                <a
                  className="hover:text-white text-white md:text-gray-400 px-3 py-4 lg:py-2 sm:text-gray-400 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  <i className="text-white far fa-calendar-alt text-lg leading-lg mr-2" />{" "}
                  Events
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-white text-white md:text-gray-400 px-3 py-4 lg:py-2 sm:text-gray-400 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  <i className="text-white fas fa-users rounded-full text-lg leading-lg mr-2" />{" "}
                  Clubs
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="#"
                >
                  <i
                    className="far fa-user-circle text-xl text-white"
                    title="Account"
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
