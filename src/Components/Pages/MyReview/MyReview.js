import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthProvaider } from "../../GlobalContext/GobalContext";
import swal from "sweetalert";

const MyReview = () => {
  const [myReview, setMyReview] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [userReating, setUserReating] = useState(0);
  const [update, setUpdate] = useState(false);
  const [deleteReviewId, setDeleteReviewId] = useState("");
  const [defoultReview, setDefoultReview] = useState("");

  const { user } = useContext(AuthProvaider);

  console.log(defoultReview);

  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyReview(data));
  }, [deleted, update]);

  const reviewUpdateHandelar = (id, reating, review) => {
    setDeleteReviewId("");
    swal({
      title: "Are you sure?",
      text: "Update This Review!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setUpdate(true);
        setUserReating(reating);
        setDeleteReviewId(id);
        setDefoultReview(review);
        // swal("Done! Your Order has been deleted!", {
        //   icon: "success",
        // });
      } else {
        swal("Your Order is safe!");
      }
    });
  };

  const updateReviewOnSubmit = (event) => {
    event.preventDefault();

    const review = event.target.reviewText.value;

    const updateReview = {
      review: review,
      userReating: userReating,
    };

    fetch(`http://localhost:5000/my-reviews?_id=${deleteReviewId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDefoultReview("");
        if (data.matchedCount >= 1) {
          swal("Done! Your Review has been Updated!", {
            icon: "success",
          });
          event.target.reset();
          setUpdate(false);
        }
      });

    console.log(updateReview);
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
              Total Review:
              <span className="text-red-600 text-4xl">{myReview?.length}</span>
            </h2>
          </div>
          <div>
            <div className="">
              <div className="my-5 ">
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
                        onClick={() => {
                          return reviewUpdateHandelar(
                            review._id,
                            review.userReating,
                            review.review
                          );
                        }}
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

                    {/* update section  */}
                    <div
                      className={`bg-white/70 w-full h-full py-10   top-0 left-0 ${
                        update ? "absolute " : " hidden"
                      } `}
                    >
                      <h3 className="text-3xl text-red-600 font-bold text-center py-10">
                        Review Update Section
                      </h3>
                      <div className="flex flex-col items-center  mx-auto justify-center p-8 shadow-sm rounded-xl lg:p-12 md:w-[50%] bg-white border text-gray-900">
                        <div className="flex flex-col items-center w-full">
                          <h2 className="text-3xl font-semibold text-center">
                            Your opinion matters!
                          </h2>
                          <div className="flex flex-col items-center py-6 space-y-3">
                            <span className="text-center">
                              How was your experience?
                            </span>
                            <div className="flex space-x-3">
                              {[...Array(5).keys()].map((number) => (
                                <button
                                  key={number}
                                  onClick={() => setUserReating(number + 1)}
                                >
                                  <i
                                    className={`fa-solid text-4xl ${
                                      userReating > number
                                        ? "text-yellow-500"
                                        : ""
                                    }  fa-star`}
                                  ></i>
                                </button>
                              ))}
                            </div>
                          </div>
                          <form
                            onSubmit={updateReviewOnSubmit}
                            className="flex flex-col w-full"
                          >
                            <textarea
                              name="reviewText"
                              rows="3"
                              placeholder="Message..."
                              defaultValue={defoultReview}
                              className="p-4 rounded-md border-2 border-black resize-none text-gray-900 bg-white"
                            ></textarea>
                            <button
                              type="submit"
                              className="py-4 my-8 font-semibold rounded-md text-white bg-red-600"
                            >
                              Update feedback
                            </button>
                          </form>
                        </div>
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => setUpdate(false)}
                            className="text-xl text-gray-400"
                          >
                            Maybe later
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* UPDATE SECTION END */}
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

export default MyReview;
