import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";

const Services = () => {
  // const [services, setSetvices] = useState([]);

  const services = useLoaderData();

  console.log(services);

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
              <div className="grid grid-cols-3  my-10 gap-2">
                {/* card  */}

                {services.map((service) => (
                  <ServiceCard service={service} key={service._id} />
                ))}
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
