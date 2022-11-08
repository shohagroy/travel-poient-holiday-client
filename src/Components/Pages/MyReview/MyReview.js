import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthProvaider } from "../../GlobalContext/GobalContext";
import swal from "sweetalert";

const MyReview = () => {
  const [myReview, setMyReview] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const { user } = useContext(AuthProvaider);

  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyReview(data));
  }, [deleted]);

  const reviewUpdateHandelar = (id) => {
    swal({
      title: "Are you sure?",
      text: "Update This Review!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/my-reviews?_id=${id}`, {
          method: "PUT",
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

  const reviewDeletedHandalar = (id) => {
    swal({
      title: "Are you sure?",
      text: "Deleted This Review!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/my-reviews?_id=${id}`, {
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
    <div>
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
              Total Review:
              <span className="text-red-600 text-4xl">{myReview?.length}</span>
            </h2>
          </div>
          <div>
            <div className="">
              <div className="m-3 ">
                {myReview.map((review) => (
                  <div
                    key={review._id}
                    className="flex my-3 justify-between items-center"
                  >
                    <div className="flex items-center">
                      <img
                        className="w-[200px] h-[120px] rounded-xl"
                        src={review.services.image}
                        alt={review.services.tittle}
                      />
                      <div className="ml-4">
                        <div className="text-xl w-[500px] hover:text-red-600 font-semibold ">
                          <Link to={`/services/${review.services._id}`}>
                            <span>{review.services.tittle}</span>
                          </Link>
                        </div>
                        <p className="text-sm text-[#ff3811] w-[500px]">
                          Review:
                          <span className="text-gray-700">{review.review}</span>
                        </p>
                        {[...Array(5).keys()].map((number) => (
                          <button key={number}>
                            <i
                              className={`fa-solid ${
                                review.userReating > number
                                  ? "text-yellow-500"
                                  : ""
                              }  fa-star`}
                            ></i>
                          </button>
                        ))}
                        <p className="font-sans text-sm text-gray-400">
                          {review.postTime}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col font-bold">
                      <button
                        onClick={() => reviewUpdateHandelar(review._id)}
                        className="text-[20px] py-2 px-6 m-1 text-white rounded-xl bg-yellow-400"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => reviewDeletedHandalar(review._id)}
                        className="text-[20px] py-2 px-6 m-1 text-white rounded-xl bg-[#ff3811]"
                      >
                        Deleted
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-[50px]">
              <Link to="/">
                <button className="flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                      />
                    </svg>
                  </span>
                  <p className="px-3">Continue Shopping</p>
                </button>
              </Link>
              <button className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </span>
                <p className="px-3">Clear Shopping Cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
