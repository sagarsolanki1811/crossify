import React from "react";
import Navbar from "../../components/Navbars/afterLoginNavbar.js";
import fashion_cat from "../../assets/img/fashion_cat.jpg";
import travel_cat from "../../assets/img/travel_cat.jpg";
import technology_cat from "../../assets/img/technology_cat.jpg";
import sport_cat from "../../assets/img/sport_cat.jpg";
import health_cat from "../../assets/img/health_cat.jpg";
import food_cat from "../../assets/img/food_cat.jpg";
import entertainment_cat from "../../assets/img/entertainment_cat.jpg";
import dance_cat from "../../assets/img/dance_cat.jpg";
import cooking_cat from "../../assets/img/cooking_cat.jpg";
import business_cat from "../../assets/img/business_cat.jpg";
import Footer from "../../components/Footers/Footer.js";

export default function eventPage() {
  return (
    <>
      <Navbar transparent />
      <div className="flex flex-wrap mt-32 bg-white py-40">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto text-black">
          <h1 className="text-3xl">Cricket Tournament</h1>

          <img
            src={sport_cat}
            className="w-full align-middle rounded-lg mt-2 border-2 border-gray-900"
            alt="event_pic"
          />

          <h1 className="mt-2">
            {" "}
            <span className="font-semibold"> Place : </span> Nikol , Ahmedabad ,
            Gujarat
          </h1>
          <h2 className="mt-4">
            {" "}
            <span className="font-semibold"> Date & Time :</span> 14/01/2021 ,
            10:00 IST{" "}
          </h2>
          <h2 className="mt-2">
            <span className="font-semibold"> Organized By :</span>
            <i className="fas fa-user-friends text-md text-black p-3 border border-gray-900 text-center shadow-lg rounded-full bg-gray-100 mx-4"></i>
          </h2>

          <div className="flex items-center">
            <label for="country" className="text-md text-black mr-4">
              <span className="font-semibold"> Choose Different Date : </span>
            </label>
            <select
              id="country"
              name="country"
              autocomplete="country"
              className="py-2 px-3 border border-gray-300 text-black bg-white rounded-md rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
          <div className="mt-4 font-semibold">
            <h1>Business, Entertainment, Food, Travel</h1>
          </div>
          <div className="mt-4 font-bold">Description :</div>
          <div className="mt-1">
            This is an online networking event to connect travellers in
            Ahmedabad with whom you can plan a trip on your own if you are
            comfortable once connected and get to know each other.
          </div>
          <div className="mt-4 font-bold">Eligibility :</div>
          <div className="mt-1">
            Minimin age of person shoul be 18 years old.
          </div>
        </div>

        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto text-black">
          <h1 className="text-3xl">Group :</h1>
          <div className="w-full flex justify-between items-center">
            <img
              src={dance_cat}
              className="w-1/3 md:w-2/3 h-20 rounded-lg mt-2 mr-2 border-2 border-gray-900"
              alt="group_pic"
            />
            <p className="w-2/3 md:w-1/3">
              <span className="text-lg font-semibold">Nikol Sports Group</span>{" "}
              <br></br>
              <span className="text-lg text-black">PUBLIC</span>
            </p>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Joined People :</h1>
              <a href="" className="border border-gray-900 px-2 py-1 rounded">
                SEE MORE ...
              </a>
            </div>
            <div className="border-2 border-gray-900 rounded mt-2">
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Volunteeers List :</h1>
              <a href="" className="border border-gray-900 px-2 py-1 rounded">
                SEE MORE ...
              </a>
            </div>
            <div className="border-2 border-gray-900 rounded mt-2">
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
              <i className="fas fa-user-friends text-lg text-black p-3 border border-gray-900 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4 my-4"></i>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Reviews :</h1>
              <a href="" className="border border-gray-900 px-2 py-1 rounded">
                SEE MORE ...
              </a>
            </div>
            <div className="flex justify-between items-center border-2 border-gray-900 rounded p-4 mt-2">
              <i className="fas fa-user-friends border border-gray-900 text-md text-black p-3 text-center shadow-lg h-12 w-12 inline-flex items-center justify-center rounded-full bg-gray-100 mx-4"></i>
              <span>
                it Xeeders AI algorithm will connect you to right people in
                Ahmedabad based on your interests and request. also respond to
                others in the club.
              </span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl">FAQs :</h1>
              <a href="" className="border border-gray-900 px-2 py-1 rounded">
                SEE MORE ...
              </a>
            </div>
            {/* FAQ01 */}
            <details class="mt-2">
              <summary class="font-semibold border-2 border-gray-900 rounded py-2 px-4">
                How Long is this site live?
              </summary>
              <span>
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
            {/* FAQ02 */}
            <details class="mt-2">
              <summary class="font-semibold border-2 border-gray-900 rounded py-2 px-4">
                How Long is this site live?
              </summary>
              <span>
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* <Footer absolute /> */}
    </>
  );
}
