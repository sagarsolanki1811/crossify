import React from "react";
import Navbar from "components/Navbars/RegNavbar.js";
import event_1 from "../src/assets/img/team-1-800x800.jpg";

export default function temp() {
  return (
    <>
      <Navbar transparent />

      <div className="container">
        {" "}
        {/** p-8 removed by sagar */}{" "}
        {/*removed   mx-auto by sagar, flex-grow in each event*/}{" "}
        {/* <div className="mx-auto px-12 py-12 my-auto">
            <div className="flex flex-row">
              <h4 className="text-3xl font-normal leading-normal mt-0 mb-2 text-yellow-800">
                Check out what's going on in your Area
              </h4>
              <button className="text-blue-600 ml-auto pr-2">
                {" "}
                Load More <i class="fas fa-angle-double-right"></i>{" "}
              </button>
            </div>
          </div> */}
        <div className="flex flex-wrap justify-canter content-start px-12">
          {/*event01 */}
          <div
            className="px-4 mb-4 relative w-full flex-shrink-0 flex-grow-0"
            style={{ width: "305px" }}
          >
            <div className="rounded overflow-hidden shadow-md">
              <img
                src={event_1}
                className="w-full object-cover"
                alt="eventPic"
                style={{ height: "215px" }}
              />
              <div className="px-2 py-1">
                <div className="text-xs text-gray-600 font-semibold">
                  <i class="fas fa-user-shield"></i> : VGEC Dance Club
                </div>
                <div className="text-xl  mt-1 font-semibold truncate leading-snug">
                  Dance Competition
                </div>
                <div className="text-xs text-gray-600 flex flex-row mt-1">
                  <div>
                    {" "}
                    <i className="fas fa-calendar-day"></i> : SUN &bull;
                    12/02/2020{" "}
                  </div>
                  <div className="ml-auto">
                    {" "}
                    <i className="fas fa-user-friends"></i> : 30+{" "}
                  </div>
                </div>
                <div className="text-xs text-gray-600 flex flex-row mb-1">
                  <div>
                    <i className="fas fa-hourglass-start"></i> : 9:00 AM
                  </div>
                  <div className="ml-auto">
                    <i className="fas fa-clock"></i> : 2 Hours
                  </div>
                </div>
                <div
                  className="absolute top-0 right-0 pl-4"
                  style={{ paddingRight: "20px", paddingTop: "5px" }}
                >
                  <span className=" text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200  last:mr-0">
                    This Week
                  </span>
                </div>
                <div
                  className="absolute top-0 right-0"
                  style={{ marginTop: "195px", marginRight: "20px" }}
                >
                  <button
                    className="text-red-500 bg-white shadow border border-solid border-red-500 hover:bg-black hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="text-blue-500 bg-white shadow border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i class="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*event02 */}
          <div
            className="px-4 mb-4 relative w-full flex-shrink-0 flex-grow-0"
            style={{ width: "305px" }}
          >
            <div className="rounded overflow-hidden shadow-md">
              <img
                src={event_1}
                className="w-full object-cover"
                alt="eventPic"
                style={{ height: "215px" }}
              />
              <div className="px-2 py-1">
                <div className="text-xs text-gray-600 font-semibold">
                  Tech &bull; Sports
                </div>
                <div className="text-lg mt-1 font-semibold truncate leading-snug">
                  Competitive Progamming Club
                </div>

                <div className="text-xs text-gray-600 flex flex-row mt-1">
                  <div>
                    {" "}
                    <i class="fas fa-user-lock"></i> : Public
                  </div>
                  <div className="ml-auto">
                    {" "}
                    <i className="fas fa-user-friends"></i> : 69{" "}
                  </div>
                </div>
                <div className="text-xs text-gray-600 flex flex-row mt-1 mb-1">
                  <div>
                    {" "}
                    <i class="fas fa-compass"></i> : Ahmedabad , IN
                  </div>
                  <div className="ml-auto">
                    {" "}
                    <i className="fas fa-calendar-check"></i> : 10{" "}
                  </div>
                </div>
                <div
                  className="absolute top-0 right-0"
                  style={{ marginTop: "195px", marginRight: "20px" }}
                >
                  <button
                    className="text-red-500 bg-white shadow border border-solid border-red-500 hover:bg-black hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="text-blue-500 bg-white shadow border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i class="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*event03 */}
          <div
            className="px-4 mb-4 relative w-full flex-shrink-0 flex-grow-0"
            style={{ width: "305px" }}
          >
            <div className="rounded overflow-hidden shadow-md">
              <img
                src={event_1}
                className="w-full object-cover"
                alt="eventPic"
                style={{ height: "215px" }}
              />
              <div className="px-2 py-1">
                <div className="text-xs text-gray-600 font-semibold">
                  <i class="fas fa-user-shield"></i> : VGEC Dance Club
                </div>
                <div className="text-xl  mt-1 font-semibold truncate leading-snug">
                  Dance Competition
                </div>

                <div className="text-xs text-gray-600 flex flex-row mt-1">
                  <div>
                    {" "}
                    <i className="fas fa-calendar-day"></i> : SUN &bull;
                    12/02/2020{" "}
                  </div>
                  <div className="ml-auto">
                    {" "}
                    <i className="fas fa-user-friends"></i> : 30+{" "}
                  </div>
                </div>
                <div className="text-xs text-gray-600 flex flex-row mb-1">
                  <div>
                    <i className="fas fa-hourglass-start"></i> : 9:00 AM
                  </div>
                  <div className="ml-auto">
                    <i className="fas fa-clock"></i> : 2 Hours
                  </div>
                </div>
                <div
                  className="absolute top-0 right-0 pl-4"
                  style={{ paddingRight: "20px", paddingTop: "5px" }}
                >
                  <span className=" text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200  last:mr-0">
                    This Week
                  </span>
                </div>
                <div
                  className="absolute top-0 right-0"
                  style={{ marginTop: "195px", marginRight: "20px" }}
                >
                  <button
                    className="text-red-500 bg-white shadow border border-solid border-red-500 hover:bg-black hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="text-blue-500 bg-white shadow border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i class="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/*event04 */}
          <div
            className="px-4 mb-4 relative w-full flex-shrink-0 flex-grow-0"
            style={{ width: "305px" }}
          >
            <div className="rounded overflow-hidden shadow-md">
              <img
                src={event_1}
                className="w-full object-cover"
                alt="eventPic"
                style={{ height: "215px" }}
              />
              <div className="px-2 py-1">
                <div className="text-xs text-gray-600 font-semibold">
                  <i class="fas fa-user-shield"></i> : VGEC Dance Club
                </div>
                <div className="text-xl  mt-1 font-semibold truncate leading-snug">
                  Dance Competition
                </div>

                <div className="text-xs text-gray-600 flex flex-row mt-1">
                  <div>
                    {" "}
                    <i className="fas fa-calendar-day"></i> : SUN &bull;
                    12/02/2020{" "}
                  </div>
                  <div className="ml-auto">
                    {" "}
                    <i className="fas fa-user-friends"></i> : 30+{" "}
                  </div>
                </div>
                <div className="text-xs text-gray-600 flex flex-row mb-1">
                  <div>
                    <i className="fas fa-hourglass-start"></i> : 9:00 AM
                  </div>
                  <div className="ml-auto">
                    <i className="fas fa-clock"></i> : 2 Hours
                  </div>
                </div>
                <div
                  className="absolute top-0 right-0 pl-4"
                  style={{ paddingRight: "20px", paddingTop: "5px" }}
                >
                  <span className=" text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200  last:mr-0">
                    This Week
                  </span>
                </div>
                <div
                  className="absolute top-0 right-0"
                  style={{ marginTop: "195px", marginRight: "20px" }}
                >
                  <button
                    className="text-red-500 bg-white shadow border border-solid border-red-500 hover:bg-black hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="text-blue-500 bg-white shadow border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i class="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*event05 */}
          <div
            className="px-4 mb-4 relative w-full flex-shrink-0 flex-grow-0"
            style={{ width: "305px" }}
          >
            <div className="rounded overflow-hidden shadow-md">
              <img
                src={event_1}
                className="w-full object-cover"
                alt="eventPic"
                style={{ height: "215px" }}
              />
              <div className="px-2 py-1">
                <div className="text-xs text-gray-600 font-semibold">
                  <i class="fas fa-user-shield"></i> : VGEC Dance Club
                </div>
                <div className="text-xl  mt-1 font-semibold truncate leading-snug">
                  Dance Competition
                </div>

                <div className="text-xs text-gray-600 flex flex-row mt-1">
                  <div>
                    {" "}
                    <i className="fas fa-calendar-day"></i> : SUN &bull;
                    12/02/2020{" "}
                  </div>
                  <div className="ml-auto">
                    {" "}
                    <i className="fas fa-user-friends"></i> : 30+{" "}
                  </div>
                </div>
                <div className="text-xs text-gray-600 flex flex-row mb-1">
                  <div>
                    <i className="fas fa-hourglass-start"></i> : 9:00 AM
                  </div>
                  <div className="ml-auto">
                    <i className="fas fa-clock"></i> : 2 Hours
                  </div>
                </div>
                <div
                  className="absolute top-0 right-0 pl-4"
                  style={{ paddingRight: "20px", paddingTop: "5px" }}
                >
                  <span className=" text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200  last:mr-0">
                    This Week
                  </span>
                </div>
                <div
                  className="absolute top-0 right-0"
                  style={{ marginTop: "195px", marginRight: "20px" }}
                >
                  <button
                    className="text-red-500 bg-white shadow border border-solid border-red-500 hover:bg-black hover:text-white active:bg-red-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i className="fas fa-heart"></i>
                  </button>
                  <button
                    className="text-blue-500 bg-white shadow border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    <i class="fas fa-share-alt"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
