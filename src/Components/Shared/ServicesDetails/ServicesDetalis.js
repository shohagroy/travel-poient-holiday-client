import React from "react";
import { useLoaderData } from "react-router-dom";

const ServicesDetalis = () => {
  const services = useLoaderData()[0];

  const handelar = () => {
    console.log(services);
  };

  console.log(services);
  return (
    <div>
      <div className="h-[400px]">
        <img
          className="object-cover w-full h-full object-contain"
          src="https://i.ibb.co/9vCkKc0/bangladesh-3535023-1920.jpg"
          alt="banar image"
        />
      </div>

      <div className="bg-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="mx-2 p-10 ">
            <p className=" text-center text-[#ff3811] mb-10 text-5xl font-bold">
              Service Details
            </p>

            {/* card  */}
            <div className="my-10">
              <div className="p-4 shadow-md bg-gray-300 text-gray-900">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <img
                      src={services?.image}
                      alt=""
                      className="block object-cover object-center w-full rounded-md h-72"
                    />
                    <div className="flex items-center">
                      <span>{services?.publish}</span>
                    </div>
                    <div className="my-5 flex justify-start items-center">
                      <img
                        className="h-[70px] w-[70px] border-2 border-black rounded-full"
                        src={services?.photoURL}
                        alt={services?.author}
                      />
                      <p className="text-4xl font-bold ml-2">
                        {services?.author}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-4xl font-bold capitalize text-gray-700">
                      {services?.tittle}
                    </h3>
                    <p className="font-semibold font-bold text-xl capitalize">
                      Category: {services?.category}
                    </p>
                    <p className="font-semibold font-bold text-xl capitalize">
                      Duration: {services?.duration}
                    </p>
                    <h3 className="text-red-600 font-bold text-5xl">
                      Price: ${services?.price}
                    </h3>
                    <p className="leading-snug text-xl capitalize text-gray-700">
                      {services?.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>revire container</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetalis;
