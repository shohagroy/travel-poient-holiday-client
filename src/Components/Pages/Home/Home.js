import React from "react";
import FacilityCard from "./FacilityCard";

const Home = () => {
  return (
    <div>
      {/* banar section  */}
      <div className="h-[500px] w-full bg-red-200"></div>

      {/* facilitys section  */}
      <div className="bg-gray-200">
        <div className="max-w-[1200px] mx-auto py-10 text-center">
          <p className="text-3xl font-semibold">Travel Poinet Holiday</p>
          <h1 className="text-6xl font-bold my-2 font-serif">
            Why Travel with Travel Point?
          </h1>

          {/* facilitys card  */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-2">
            <FacilityCard
              text={"2000+ Our Worldwide Guide"}
              images={
                "https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-1.jpg"
              }
            />
            <FacilityCard
              text={"100% Trusted Tour Agency"}
              images={
                "https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-2.jpg"
              }
            />
            <FacilityCard
              text={"12+ Years of Travel Experience"}
              images={
                "https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-3.jpg"
              }
            />
            <FacilityCard
              text={"98% of Our Travelers are Happy"}
              images={
                "https://travio.smartdemowp.com/wp-content/uploads/2021/02/feature-4.jpg"
              }
            />
          </div>
        </div>
      </div>

      {/* about section  */}
      <div className="max-w-[1200px] mx-auto">
        <div className="mx-2 grid grid-cols-2 gap-4 p-10 ">
          <div></div>
          <div>
            <p className=" text-center text-3xl font-semibold">
              About Travel Poient
            </p>
            <h1 className="py-5 text-6xl font-bold">
              Beat Travel Agency Company Since 2014.
            </h1>
            <p>
              The Travel Point Holiday is full service Tour Operator &
              Destination Management Company providing services all over the
              world and every major destination throughout Bangladesh, India and
              many other countries of Asia and Europe. Travel Point Holiday as
              proven to be highly recognized and respected tourism company in
              the Bangladesh Tourism Market.We have exclusive tariff agreements
              with several major hotels and those hotels are accommodating
              guests all year around.
            </p>
          </div>
        </div>
      </div>

      {/* our service section  */}
      <div className="bg-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="mx-2 p-10 ">
            <p className=" text-center text-3xl font-semibold">Our Services</p>
            <h1 className="py-5 text-6xl font-bold">
              Beat Travel Agency Company Since 2014.
            </h1>

            {/* card section  */}
            <div>
              <div className="grid grid-cols-3 gap-2">
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
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
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

      {/* Winter offer section  */}
      <div className=" relative">
        <div className=" top-0 w-100 h-100 bg-gradient-to-r from-cyan-500 to-blue-500 z-20"></div>

        <img
          className="absolute object-cover"
          src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/deals-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
