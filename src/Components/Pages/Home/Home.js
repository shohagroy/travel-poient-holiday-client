import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";
import FacilityCard from "./FacilityCard";
import ImageSlider from "./ImageSlider";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/home")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      {/* banar section  */}
      <div className=" w-full">
        <ImageSlider />
      </div>

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
            <h3 className=" text-center text-5xl my-10 font-semibold">
              Our Services
            </h3>

            {/* card section  */}
            <div className="grid grid-cols-3 gap-2">
              {/* card  */}
              {services.map((service) => (
                <ServiceCard service={service} key={service._id} />
              ))}
            </div>

            <div className="my-10 text-center">
              <Link to="/services">
                <button className="py-3 px-6 bg-red-600 font-semibold text-xl text-white ">
                  See All Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Winter offer section  */}
      <div className=" w-full relative">
        <img
          className=" object-cover h-[90vh]"
          src="https://travio.smartdemowp.com/wp-content/uploads/2021/02/deals-1.jpg"
          alt=""
        />
        <div className=" absolute top-0 w-full h-full bg-gradient-to-r from-blue-600/70 to-blue/0"></div>
        <div className="absolute top-1/3 left-28 bg-white rounded-xl ">
          <div className="p-10 w-[350px]">
            <h1 className=" text-3xl font-bold">
              Darjeeling, Jammu and Kashmir
            </h1>
            <p className="text-xl my-1 font bold font-sans text-red-600">
              $250 <del className="mx-3">$350</del>
            </p>
            <p className="mb-2">6 Days 5 Night</p>
            <p>Our Winter Offer Darjeeling, Jammu and Kashmir.</p>
            <button className="w-full mt-5 py-3 text-white text-xl font-bold bg-red-600">
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* subscribe section  */}
      <div className="">
        <div className="w-full bg-gray-500">
          <div className="max-w-[800px] mx-auto  p-4 py-20">
            <h1 className="text-5xl font-bold text-center text-gray-100">
              Subcribe To More Update
            </h1>

            <div className="flex justify-center items-center my-5 w-full">
              <input
                type="text"
                placeholder="example@email.com"
                className="w-[500px] p-3 rounded-l-lg sm:w-2/3"
              />
              <button className="p-3 px-5 font-semibold rounded-r-lg bg-red-600 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
