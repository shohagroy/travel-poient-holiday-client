import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";
import { Helmet } from "react-helmet";

const Services = () => {
  const services = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Service - Travel Point</title>
      </Helmet>
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
              <h3 className="text-3xl font-semibold text-gray-600 text-center">
                Toral Service: {services.length}
              </h3>
              <div className="grid grid-cols-3  my-10 gap-2">
                {/* card  */}

                {services.map((service) => (
                  <ServiceCard service={service} key={service._id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
