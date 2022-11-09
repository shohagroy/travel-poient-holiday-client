import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthProvaider } from "../../GlobalContext/GobalContext";

const MyServices = () => {
  const [myService, setMyService] = useState([]);
  const [deleted, setDeleted] = useState(false);
  //   const [deletedServicesID, setDeletedServiceID] = useState("");
  //   const [defoultReview, setDefoultReview] = useState("");

  const { user } = useContext(AuthProvaider);

  useEffect(() => {
    fetch(`http://localhost:5000/my-services?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyService(data);
        console.log(data);
      });
  }, [deleted]);

  const serviceDeletedHandelar = (id) => {
    swal({
      title: "Are you sure?",
      text: "Deleted This Service!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/my-services?_id=${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              setDeleted(true);
              swal("Done! Your Order has been deleted!", {
                icon: "success",
              });
            }
          });
      } else {
        swal("Your Order is safe!");
      }
    });
  };

  return (
    <div className="relative">
      <div className="h-[400px] relative">
        <img
          className="object-cover w-full h-full object-contain"
          src="https://i.ibb.co/9vCkKc0/bangladesh-3535023-1920.jpg"
          alt="banar image"
        />
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div>
          <div className="text-center mb-[30px]">
            <h2 className="text-[35px] font-bold p-4 text-[#ff3811]">
              Total Service:
              <span className="text-red-600 text-4xl">{myService?.length}</span>
            </h2>
          </div>
          <div>
            <div className="">
              <div className="my-5 ">
                {myService.map((service) => (
                  <div
                    key={service._id}
                    className="flex my-3 justify-between items-center"
                  >
                    <div className="flex items-center">
                      <img
                        className="w-[200px] h-[120px] rounded-xl"
                        src={service.image}
                        alt={service.tittle}
                      />
                      <div className="ml-4">
                        <div className="text-xl w-[500px] hover:text-red-600 font-semibold ">
                          <Link to={`/services/${service._id}`}>
                            <span>{service.tittle}</span>
                          </Link>
                        </div>
                        <p>Category: {service.category}</p>
                        <p className="text-red-600 font-bold">
                          Price: {service.price}
                        </p>
                        <p className="text-sm text-[#ff3811] w-[500px]">
                          Review:
                          <span className="text-gray-700">
                            {[...Array(5).keys()].map((number) => (
                              <button key={number}>
                                <i
                                  className={`fa-solid text-yellow-500 fa-star`}
                                ></i>
                              </button>
                            ))}
                          </span>
                        </p>

                        <p className="font-sans text-sm text-gray-400">
                          {service.publish}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col font-bold">
                      <button
                        onClick={() => serviceDeletedHandelar(service._id)}
                        className="text-[20px] py-2 px-6 m-1 text-white rounded-xl bg-[#ff3811]"
                      >
                        Deleted
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
