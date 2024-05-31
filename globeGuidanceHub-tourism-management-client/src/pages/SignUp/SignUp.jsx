import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../providers/Auth";

const SignUp = () => {
  const { createUser, user, setUser, logOut } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const accepted = e.target.terms.checked;
    const newUser = {
      name,
      photo,
      email,
      password,
    };
    if (password.length < 6) {
      return toast.error("Password length should be minimum 6 digit");
    }
    if (!/[a-z]/.test(password)) {
      return toast.error("Password must contain at least one lowercase letter");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one uppercase letter");
    }
    if (!accepted) {
      return toast.warn("Please accept our terms and conditions!");
    }
    // create user
    createUser(email, password)
      .then((result) => {
        const presentUser = result.user;
        setUser(presentUser);
        updateProfile(presentUser, {
          ...user,
          displayName: `${name}`,
          photoURL: `${photo}`,
        })
          .then(() => {
            fetch(
              "https://globe-guidance-hub-tourism-management-server.vercel.app/users",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(newUser),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    text: "Successfully Sign Up Now Please Login Now!!",
                    icon: "success",
                    showConfirmButton: false,
                    position: "top",
                    timer: 1500,
                  });
                }
              });
            
            navigate(location?.state ? location.state : "/signIn");
          })
          .catch((error) => {
            toast.error(error.message);
          });
        logOut();
        setUser(null);
      })
      .catch((error) => toast.error(error.message));

      // send data to server side 
      
  };
  return (
    <div>
      <form
        onSubmit={handleSignUp}
        className="card-body md:w-3/4 lg:w-1/2 mx-auto  p-6 rounded-xl my-12 bg-teal-500 ">
        <h2 className="text-4xl my-4 text-center text-white font-bold">
          SignUp Your Account
        </h2>
        <div className="form-control">
          <label className="label block font-semibold">
            <span className="label-text font-semibold text-lg text-white">
              Your Name
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 bg-gray-900 text-gray-100 focus:border-green-600"
            required
          />
        </div>
        <div className="form-control">
          <label className="label block font-semibold">
            <span className="label-text font-semibold text-lg text-white">
              Email Address
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 bg-gray-900 text-gray-100 focus:border-green-600"
            required
          />
        </div>
        <div className="form-control">
          <label className="label block font-semibold">
            <span className="label-text font-semibold text-lg text-white">
              Photo URL
            </span>
          </label>
          <input
            type="url"
            name="photo"
            placeholder="Enter your photo URL"
            className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 bg-gray-900 text-gray-100 focus:border-green-600"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label block font-semibold">
            <span className="label-text font-semibold text-lg text-white">
              Password
            </span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 bg-gray-900 text-gray-100 focus:border-green-600"
            required
          />
          <span
            className="absolute right-[2%] bottom-[18%] cursor-pointer text-white"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FaEye className="text-blue-600"></FaEye>
            ) : (
              <FaEyeSlash className="text-blue-600"></FaEyeSlash>
            )}
          </span>
        </div>
        <div className="mb-4">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            className="mr-2 text-white"
          />
          <label className="text-white text-base font-medium" htmlFor="terms">
            Accept our{" "}
            <a className="text-blue-500" href="#">
              terms and conditions
            </a>
          </label>
        </div>
        <div className="form-control my-4">
          <button
            type="submit"
            className="btn btn-ghost btn-outline text-lg font-semibold text-white bg-green-500 border-none ">
            SignUp
          </button>
        </div>
        <p className="text-center text-white mt-4">
          Already have an account?
          <br /> Or <br />
          Want to login with a social account?
          <br />
          Than Go to
          <Link className="text-blue-600 font-bold ml-2" to={"/signIn"}>
            SignIn Page
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
