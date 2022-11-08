import React from "react";

const Services = () => {
  return (
    <div>
      <div className="h-[400px] relative">
        <img
          className="object-cover w-full h-full object-contain"
          src="https://i.ibb.co/mChPkHz/slider3.jpg"
          alt="banar image"
        />
      </div>

      {/* service card  */}
      <div className="bg-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="mx-2 p-10 ">
            <p className=" text-center text-[#ff3811] mb-10 text-5xl font-bold">
              Our Services
            </p>

            <div>
              <div className="grid grid-cols-3 my-10 gap-2">
                {/* card  */}
                <div className=" p-4 shadow-md bg-white text-gray-900">
                  <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex space-x-4">
                      <img
                        alt=""
                        src="https://source.unsplash.com/100x100/?portrait"
                        className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                      />
                      <div className="flex flex-col space-y-1">
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="text-sm font-semibold"
                        >
                          Leroy Jenkins
                        </a>
                        <span className="text-xs dark:text-gray-400">
                          4 hours ago
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <img
                        src="https://source.unsplash.com/random/480x360/?4"
                        alt=""
                        className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
                      />
                      <div className="flex items-center text-xl py-2">
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <div className="text-xl font-bold flex justify-between items-center">
                        <p>Thailand</p>
                        <h2>Price: $30/3 Days</h2>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold text-violet-400">
                          Facere ipsa nulla corrupti praesentium pariatur
                          architecto
                        </h3>
                      </a>
                      <p className="leading-snug text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Repellat, excepturi. Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Repellat, excepturi.
                      </p>
                    </div>

                    <div>
                      <button className="w-full py-5 text-white font-bold text-xl bg-red-600">
                        See Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-10 text-center">
              <button className="py-3 px-6 bg-red-600 font-semibold text-xl text-white ">
                See All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
