import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthProvaider } from "../../GlobalContext/GobalContext";
import { Helmet } from "react-helmet";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  const { createUserWithEmail, userProfileUpdate, googleSignIn } =
    useContext(AuthProvaider);

  const location = useLocation();
  const navigate = useNavigate();

  const path = location.state?.path?.pathname || "/";

  const createUserHandelar = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])").test(
      password
    );

    if (strongRegex) {
      createUserWithEmail(email, password)
        .then((result) => {
          // Signed in
          const user = result.user;
          if (user.email) {
            userProfileUpdate(name, photoUrl);
            const currentUser = {
              email: user.email,
            };
            fetch("https://travel-poient-holiday-server.vercel.app/jwt", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(currentUser),
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("travel_point_token", data.token);
                navigate(path, { relative: true });
              });
          }
        })
        .catch((error) => {
          console.log(error);
          const massege = error.code.split("/")[1];
          swal({
            title: massege,
            icon: "error",
          });
        });
    } else {
      swal({
        title: "Please Provaid a Strong Password!",
        icon: "error",
      });
    }
  };

  const provaider = new GoogleAuthProvider();
  const googleLoginHandelar = () => {
    googleSignIn(provaider)
      .then((res) => {
        const user = res.user;

        if (user.email) {
          const currentUser = {
            email: user.email,
          };
          fetch("https://travel-poient-holiday-server.vercel.app/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => {
              console.log(res);
              return res.json();
            })
            .then((data) => {
              localStorage.setItem("travel_point_token", data.token);
              navigate(path, { relative: true });
            });
        }
      })
      .catch((error) => {});
  };

  return (
    <div className="flex justify-center">
      <Helmet>
        <title>Sign Up - Travel Point Holiday</title>
      </Helmet>
      <div className="w-full max-w-md p-4  sm:p-8 text-gray-900">
        <h2 className="mb-5 text-3xl font-bold text-center">Sign Up</h2>

        <form
          onSubmit={createUserHandelar}
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-900"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm">Photo Url</label>
              <input
                type="text"
                name="photo"
                required
                placeholder="Photo Url"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-900"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm">Email address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-900"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm">Password</label>
              </div>
              <input
                type="password"
                name="password"
                required
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-violet-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md bg-red-600 text-white text-gray-900"
          >
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-400">
            Already have an account?
            <Link
              to="../login"
              className="focus:underline text-red-400 hover:underline"
            >
              Login
            </Link>
          </p>
        </form>

        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>

        <div className="my-6 space-y-4">
          <button
            onClick={googleLoginHandelar}
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-red-600"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p className="text-red-600 font-bold">Login with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
