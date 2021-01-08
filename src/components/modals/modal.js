import React from "react";
import health_cat from "../../assets/img/health_cat.jpg";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex w-full z-50"
            // onClick={() => setShowModal(false)}
          >
         
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg flex flex-col px-12 bg-gray-300 border-2 border-redColor outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-lightRed">
                  <h3 className="text-3xl font-semibold bg-gray-300 p-2 rounded-lg">Joined People</h3>
                  {/* <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-4xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button> */}
                </div>
                {/*body*/}
                <div className="p-6 flex-1">
                    {/* user01 */}
                  <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">Golu Pandit</h1>
                  </div>
                      {/* user02 */}
                  <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">bablu Pandit</h1>
                  </div>
                   {/* faltu */}
                   <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">bablu Pandit</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">bablu Pandit</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">bablu Pandit</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">bablu Pandit</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">bablu Pandit</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">bablu Pandit</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">bablu Pandit</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">bablu Pandit</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">bablu Pandit</h1>
                  </div>
                  <div className="flex justify-between items-center mb-2 mt-2">
                    <img
                      src={health_cat}
                      className="align-middle rounded-full"
                      alt="event_pic"
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <h1 className="text-2xl font-semibold">bablu Pandit</h1>
                  </div>
                   {/* faltu */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-lightRed">
                  <button
                    className="text-white hover:text-gray bg-gray-700 rounded-full font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mb-1 mt-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  {/* <button
                    className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> */}
                </div>
              </div>
           
          </div>
          {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
        </>
      ) : null}
    </>
  );
}
