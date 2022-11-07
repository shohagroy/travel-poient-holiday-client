import React from "react";

const FacilityCard = ({ images, text }) => {
  return (
    <div className="my-10 ">
      <div className="max-w-xs relative rounded-md shadow-md bg-white  text-gray-900">
        <img
          src={images}
          alt="images"
          className="object-cover object-center w-full rounded-t-md bg-gray-500"
        />
        <div className="absolute top-[150px] left-[130px]">
          <div className="text-4xl flex text-[#ff3811] justify-center items-center h-[70px] w-[70px] bg-white border-2 border-red-600 rounded-full">
            {/* <i className="fa-solid fa-people-roof"></i> */}
            <img src="https://i.ibb.co/RPLwWPN/favicon.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-between px-2 py-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl my-4 font-sans font-bold tracking-wide">
              {text}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
