import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthProvaider } from "../../GlobalContext/GobalContext";
import swal from "sweetalert";

const ServicesDetalis = () => {
  const services = useLoaderData()[0];
  const { user } = useContext(AuthProvaider);

  const [reating, setReating] = useState(0);
  const [reviews, setReviews] = useState([]);

  const reviewHandelar = (event) => {
    event.preventDefault();

    const review = event.target.reviewText.value;
    const userReating = reating + 1;

    const clientReview = {
      review,
      userReating,
      user,
      services,
    };

    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(clientReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged && data.insertedId) {
          swal({
            title: "Successful!",
            text: "Your Review Added!",
            icon: "success",
            button: "Ok",
          });
          event.target.reset();
          setReating(0);
        }
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  console.log(reviews);

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
                      className="block object-cover object-center w-full rounded-md "
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
                    <p className="leading-snug font-sans text-xl capitalize text-gray-900">
                      {services?.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <section className="my-8 bg-white text-gray-900">
                <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
                  <h1 className="p-4 text-4xl font-semibold leading-none text-center">
                    What our Clients are saying about us
                  </h1>
                </div>
                <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                  <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-100">
                      <p className="relative px-6 py-1 text-lg italic text-center text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-8 h-8 text-red-600"
                        >
                          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptatibus quibusdam, eligendi exercitationem
                        molestias possimus facere.
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="absolute right-0 w-8 h-8 text-red-600"
                        >
                          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-red-600 text-white">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?1"
                        alt=""
                        className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700"
                      />
                      <p className="text-xl font-semibold leading-tight">
                        Distinctio Animi
                      </p>
                      <p className="text-sm uppercase">Aliquam illum</p>
                    </div>
                  </div>

                  <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                      <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-8 h-8 text-violet-400"
                        >
                          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptatibus quibusdam, eligendi exercitationem
                        molestias possimus facere.
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="absolute right-0 w-8 h-8 text-violet-400"
                        >
                          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?2"
                        alt=""
                        className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700"
                      />
                      <p className="text-xl font-semibold leading-tight">
                        Distinctio Animi
                      </p>
                      <p className="text-sm uppercase">Aliquam illum</p>
                    </div>
                  </div>
                  <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                      <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-8 h-8 text-violet-400"
                        >
                          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptatibus quibusdam, eligendi exercitationem
                        molestias possimus facere.
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="absolute right-0 w-8 h-8 text-violet-400"
                        >
                          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?3"
                        alt=""
                        className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700"
                      />
                      <p className="text-xl font-semibold leading-tight">
                        Distinctio Animi
                      </p>
                      <p className="text-sm uppercase">Aliquam illum</p>
                    </div>
                  </div>
                  <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                    <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
                      <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="w-8 h-8 text-violet-400"
                        >
                          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                        </svg>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptatibus quibusdam, eligendi exercitationem
                        molestias possimus facere.
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          fill="currentColor"
                          className="absolute right-0 w-8 h-8 text-violet-400"
                        >
                          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                        </svg>
                      </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?4"
                        alt=""
                        className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700"
                      />
                      <p className="text-xl font-semibold leading-tight">
                        Distinctio Animi
                      </p>
                      <p className="text-sm uppercase">Aliquam illum</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="bg-white py-10">
              <h3 className="text-3xl text-red-600 font-bold text-center py-10">
                Review Section
              </h3>
              <div className="flex flex-col mx-3 justify-center p-8 shadow-sm rounded-xl lg:p-12 bg-gray-200 text-gray-900">
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
                        <button key={number} onClick={() => setReating(number)}>
                          <i
                            className={`fa-solid text-4xl ${
                              reating >= number ? "text-yellow-500" : ""
                            }  fa-star`}
                          ></i>
                        </button>
                      ))}
                    </div>
                  </div>
                  <form
                    onSubmit={reviewHandelar}
                    className="flex flex-col w-full"
                  >
                    <textarea
                      name="reviewText"
                      rows="3"
                      placeholder="Message..."
                      className="p-4 rounded-md border-2 border-black resize-none text-gray-900 bg-white"
                    ></textarea>
                    <button
                      type="submit"
                      className="py-4 my-8 font-semibold rounded-md text-white bg-red-600"
                    >
                      Leave feedback
                    </button>
                  </form>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-sm text-gray-400"
                  >
                    Maybe later
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetalis;
