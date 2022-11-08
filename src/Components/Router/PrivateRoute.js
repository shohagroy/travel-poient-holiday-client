import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvaider } from "../GlobalContext/GobalContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthProvaider);

  if (loading) {
    return (
      <div className="text-center max-w-[1140px] mx-auto my-10">
        <div className="py-4 rounded shadow-md w-full animate-pulse bg-gray-300">
          <div className="flex p-4 space-x-4 sm:px-8">
            <div className="flex-shrink-0 w-28 h-28 rounded-full bg-gray-700"></div>
            <div className="flex-1 py-2 space-y-4">
              <div className="w-full h-8 rounded bg-gray-700"></div>
              <div className="w-5/6 h-8 rounded bg-gray-700"></div>
            </div>
          </div>
          <div className="p-4 space-y-12 sm:px-8">
            <div className="w-full h-12 rounded bg-gray-700"></div>
            <div className="w-full h-12 rounded bg-gray-700"></div>
            <div className="w-3/4 h-12 rounded bg-gray-700"></div>
            <div className="w-full h-12 rounded bg-gray-700"></div>
            <div className="w-full h-12 rounded bg-gray-700"></div>
            <div className="w-3/4 h-12 rounded bg-gray-700"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!user.email) {
    return <Navigate to="/login" state={{ path: location }} replace></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
