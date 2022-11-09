import React, { useContext, useState } from "react";
import { AuthProvaider } from "../../GlobalContext/GobalContext";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddServices = () => {
  const { user, userSignOut } = useContext(AuthProvaider);

  const [addService, setAddService] = useState({});

  const addServiceBlur = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    addService[name] = value;
    setAddService({
      ...addService,
      photoURL: user?.photoURL,
      publish: new Date().toLocaleString() + " ",
      author: user?.displayName,
      authorEmail: user?.email,
    });
  };

  const addServiceHandelar = (event) => {
    event.preventDefault();

    fetch("https://travel-poient-holiday-server.vercel.app/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("travel_point_token")}`,
      },
      body: JSON.stringify(addService),
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          userSignOut();
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged && data.insertedId) {
          swal({
            title: "Successful!",
            text: "Your New Service Added!",
            icon: "success",
            button: "Ok",
          });
          setAddService({});
          event.target.reset();
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add New Service - Travel Point Holiday</title>
      </Helmet>
      <div className="h-[400px] relative">
        <img
          className="object-cover w-full h-full object-contain"
          src="https://i.ibb.co/9vCkKc0/bangladesh-3535023-1920.jpg"
          alt="banar image"
        />
      </div>

      <div className="bg-gray-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="p-2 mx:mx-2 md:p-10 ">
            <p className=" text-center text-[#ff3811] mb-4 text-3xl md:mb-10 md:text-5xl font-bold">
              Add New Service
            </p>

            <div className="text-center">
              <Link to="/my-services" className="text-center">
                <button className=" md:text-3xl md:py-3 text-xl p-2 bg-red-600 text-white font-bold rounded-xl px-8">
                  My Service
                </button>
              </Link>
            </div>

            <div className="my-10">
              {/* add service from  */}
              <section className=" p-2 md:p-6 text-gray-50">
                <form
                  onSubmit={addServiceHandelar}
                  className=" max-w-[800px] container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
                >
                  <fieldset className=" p-6 rounded-md shadow-sm bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                      <p className="font-bold text-2xl">Service Inormation</p>
                    </div>
                    <div className="mt-3">
                      <div className="col-span-full sm:col-span-3">
                        <label className="text-sm">Service Tittle</label>
                        <input
                          onBlur={addServiceBlur}
                          name="tittle"
                          type="text"
                          placeholder="Service Tittle"
                          className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                        />
                      </div>

                      <div className="col-span-full sm:col-span-3">
                        <label className="text-sm">Category</label>
                        <input
                          onBlur={addServiceBlur}
                          name="category"
                          type="text"
                          placeholder="Service Category"
                          className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                        />
                      </div>
                      <div className="col-span-full">
                        <label className="text-sm">Photo URL</label>
                        <input
                          onBlur={addServiceBlur}
                          required
                          name="image"
                          type="text"
                          placeholder="Photo URL"
                          className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                        />
                      </div>
                      <div className="col-span-full">
                        <label className="text-sm">Duration</label>
                        <input
                          onBlur={addServiceBlur}
                          name="duration"
                          type="number"
                          placeholder="Duration (Day)"
                          className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                        />
                      </div>
                      <div className="col-span-full sm:col-span-2">
                        <label className="text-sm">Price</label>
                        <input
                          onBlur={addServiceBlur}
                          name="price"
                          type="text"
                          placeholder="Price"
                          className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                        />
                      </div>
                      <label className="text-sm">Details</label>
                      <textarea
                        onBlur={addServiceBlur}
                        name="details"
                        placeholder="Details"
                        className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                      ></textarea>
                    </div>
                  </fieldset>

                  <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                      <p className="font-medium text-2xl">Author Information</p>
                      <img
                        className="w-[100px] h-[100px] rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                      <div className="col-span-full sm:col-span-3">
                        <div className="w-full  text-white ">
                          <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Name</label>
                            <input
                              onBlur={addServiceBlur}
                              name="author"
                              type="text"
                              readOnly
                              value={user?.displayName}
                              className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-full sm:col-span-3">
                        <div className="w-full  text-white ">
                          <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Publish Date</label>
                            <input
                              onBlur={addServiceBlur}
                              name="publish"
                              type="text"
                              value={new Date().toLocaleString() + " "}
                              readOnly
                              placeholder="date"
                              className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-full">
                        <div className="w-full  text-white ">
                          <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Author Email</label>
                            <input
                              onBlur={addServiceBlur}
                              name="authorEmail"
                              type="email"
                              readOnly
                              defaultValue={user?.email}
                              className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-full">
                        <div className="flex items-center space-x-2">
                          <button
                            type="submit"
                            className="px-4 py-2 border rounded-md border-gray-100"
                          >
                            Add Service
                          </button>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddServices;
