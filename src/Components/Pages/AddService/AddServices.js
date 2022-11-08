import React, { useContext, useState } from "react";
import { AuthProvaider } from "../../GlobalContext/GobalContext";

const AddServices = () => {
  const { user } = useContext(AuthProvaider);

  const [addService, setAddService] = useState({});

  const addServiceBlur = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    console.log(addService);

    addService[name] = value;
  };

  const addServiceHandelar = (event) => {
    event.preventDefault();

    console.log(addService);
    // const form = event.target;
    // const serviceTittle = form.tittle.value;
    // const serviceCategory = form.category.value;
    // const address = form.address.value;
    // const state = form.state.value;
    // const city = form.city.value;
    // const courseCategory = form.category.value;
    // const courseName = form.courseName.value;

    // localStorage.setItem("enrollCourse", JSON.stringify(userDetails));
    setAddService({});
  };

  return (
    <div>
      <div className="h-[400px] relative">
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
              Add New Service
            </p>

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
                        <label className="text-sm">Location</label>
                        <input
                          onBlur={addServiceBlur}
                          name="location"
                          type="text"
                          placeholder="Location"
                          className="w-full text-lg p-2 pl-5 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                        />
                      </div>
                      <div className="col-span-full">
                        <label className="text-sm">Duration</label>
                        <input
                          onBlur={addServiceBlur}
                          name="duration"
                          type="text"
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
                              defaultValue={user?.displayName}
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
                              defaultValue={new Date().toLocaleString() + ""}
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
                            Add New Service
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
