import React from "react";
import Navbar from "components/Navbars/RegNavbar.js";

export default function Register2() {
  return (
    <>
      <Navbar transparent />
      <div className="container mx-auto px-4 h-full mt-10">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-gray-700 text-sm font-bold">
                    For Your Better Experience
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-gray-400" />
              </div>

              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  {/* <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="reg-country"
                    >
                      country
                    </label>
                    <select
                      id="reg-country"
                      type="text"
                      className="px-3 py-3 placeholder-gray-500 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                    >
                      <option>INdia</option>
                      <option>USA</option>
                      <option>Russia</option>
                    </select>
                  </div> */}

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
                    ></input>
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
                    ></input>
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
                    ></input>
                  </div>

                  <div className="md:flex">
                    <div className="md:w-1/2 md:mb-0 w-full w-1/2 mb-3 mr-3">
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

                    <div className="md:w-1/2 md:mb-0 w-full w-1/2 mb-3 mr-3">
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

                    <div className="md:w-1/2 md:mb-0 w-full w-1/2 mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="reg-pin-code"
                      >
                        pin code
                      </label>
                      <input
                        id="reg-pin-code"
                        type="number"
                        className="px-3 py-3 w-full rounded text-gray-700 bg-white shadow focus:outline-none focus:shadow-outline text-sm ease-linear transition-all duration-150"
                        placeholder="Pin Code"
                      ></input>
                    </div>
                  </div>

                  {/* <div className="-mx-3 md:flex mt-6"> */}
                  <div className="md:w-1/2 md:mb-0 w-full w-1/2 mr-3 mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Next
                    </button>
                  </div>
                  {/* <div className="md:w-1/2 md:mb-0 w-full w-1/2">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="button"
                      >
                        Skip
                      </button>
                    </div> */}
                  {/* </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
