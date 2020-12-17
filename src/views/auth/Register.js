import React from "react";
import Navbar from "components/Navbars/RegNavbar.js";

export default function Register() {
  return (
    <>
      <Navbar transparent />
      <div className="container mx-auto px-4 h-full bg-gray-900">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-700 text-sm font-bold">Sign Up</h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-google pr-4"></i>
                    Google
                  </button>

                  <button
                    className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fab fa-facebook-f pr-4"></i>
                    Facebook
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>

              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-gray-600 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <form>
                  <div className="-mx-3 md:flex">
                    <div className="md:w-1/2 md:mb-0 w-full w-1/2 mb-3 mr-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="reg-fname"
                      >
                        First Name
                      </label>
                      <input
                        id="reg-fname"
                        type="text"
                        className="w-full rounded py-3 px-3 text-gray-700 bg-white shadow focus:outline-none focus:shadow-outline text-sm ease-linear transition-all duration-150"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="md:w-1/2 md:mb-0 w-full w-1/2 m3-6">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="reg-lname"
                      >
                        Last Name
                      </label>
                      <input
                        id="reg-lname"
                        type="text"
                        className="w-full rounded py-3 px-3 text-gray-700 bg-white shadow focus:outline-none focus:shadow-outline text-sm ease-linear transition-all duration-150"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="reg-uname"
                    >
                      User Name
                    </label>
                    <input
                      id="reg-uname"
                      type="text"
                      className="px-3 py-3 placeholder-gray-500 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="reg-email"
                    >
                      Email
                    </label>
                    <input
                      id="reg-email"
                      type="email"
                      className="px-3 py-3 placeholder-gray-500 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="reg-password"
                    >
                      Password
                    </label>
                    <input
                      id="reg-password"
                      type="password"
                      className="px-3 py-3 placeholder-gray-500 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="reg-re-password"
                    >
                      Re-Type Password
                    </label>
                    <input
                      id="reg-re-password"
                      type="password"
                      className="px-3 py-3 placeholder-gray-500 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Re-Type Password"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="reg-photo"
                    >
                      Your Profile Photo
                    </label>

                    <input
                      id="reg-photo"
                      type="file"
                      accept="image/*"
                      className="px-3 py-3 placeholder-gray-500 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  {/* <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 md:mb-0 w-full w-1/2 mb-6 mr-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="reg-state"
                      >
                        State
                      </label>
                      <select
                        id="reg-state"
                        name="state"
                        autocomplete="state"
                        className="w-full rounded py-3 px-3 text-gray-700 bg-white shadow focus:outline-none focus:shadow-outline text-sm ease-linear transition-all duration-150"
                      >
                        <option>gujarat</option>
                        <option>maharastra</option>
                        <option>rajasthan</option>
                      </select>
                    </div>

                    <div className="md:w-1/2 md:mb-0 w-full w-1/2 mb-6">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="reg-city"
                      >
                        City
                      </label>
                      <select
                        id="reg-city"
                        name="city"
                        autocomplete="city"
                        className="w-full rounded py-3 px-3 text-gray-700 bg-white shadow focus:outline-none focus:shadow-outline text-sm ease-linear transition-all duration-150"
                      >
                        <option>ahmedabad</option>
                        <option>jaipur</option>
                        <option>mumbai</option>
                      </select>
                    </div>
                  </div> */}

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-700">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-blue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Create Account
                    </button>
                  </div>

                  <div className="text-center mt-6">
                    Already A Member ?
                    <a className="text-blue-500" href="login">
                      {" "}
                      Log In
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
