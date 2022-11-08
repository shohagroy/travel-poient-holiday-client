import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className=" p-4 shadow-md h-[650px] relative bg-white text-gray-900">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex space-x-4">
          <img
            alt={service?.author}
            src={service?.photoURL}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-semibold">{service?.author}</p>
            <span className="text-xs dark:text-gray-400">
              {service?.publish}
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
            <i className="fa-solid text-yellow-500 fa-star"></i>
            <i className="fa-solid text-yellow-500 fa-star"></i>
            <i className="fa-solid text-yellow-500 fa-star"></i>
            <i className="fa-solid text-yellow-500 fa-star-half-stroke"></i>
            <i className="fa-regular text-yellow-500 fa-star"></i>
          </div>
          <div className="text-xl font-bold flex justify-between items-center">
            <p>Thailand</p>
            <h2>
              Price: ${service?.price}/{service?.duration} Days
            </h2>
          </div>
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-2xl capitalize font-bold text-red-600">
              {service?.tittle}
            </h3>
          </a>
          <p className="leading-snug capitalize text-gray-400">
            {service?.details.slice(0, 100)}
          </p>
        </div>

        <div>
          <button className="w-full absolute bottom-0 left-0 py-5 text-white font-bold text-xl bg-red-600">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
