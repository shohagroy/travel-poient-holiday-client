import React from "react";
import FacilityCard from "./FacilityCard";

const Home = () => {
  return (
    <div>
      {/* banar section  */}
      <div className="h-[500px] w-full bg-red-200"></div>

      <div className="bg-gray-200">
        <div className="max-w-[1200px] mx-auto py-10 text-center">
          <h3 className="text-3xl font-semibold">Travel Poinet Holiday</h3>
          <h1 className="text-6xl font-bold my-2 font-serif">
            Why Travel with Travel Point?
          </h1>
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
    </div>
  );
};

export default Home;
