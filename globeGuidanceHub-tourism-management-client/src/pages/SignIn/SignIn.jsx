import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../providers/Auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignIn = () => {
  const [loginError, setLoginError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleLogin, setUser, githubLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    setLoginError(null);

    signIn(email, password)
      .then((result) => {
        setUser(result.user);

        // navigate after login
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          text: "LogIn Successfully!!",
          icon: "success",
          showConfirmButton: false,
          position: "top",
          timer: 1000,
        });
      })
      .catch((error) => {
        Swal.fire({
          text: "Please Check Your Email and Password than Try Again!!",
          icon: "error",
          showConfirmButton: false,
          position: "top",
          timer: 1500,
        });
        setLoginError(error.message);
      });
  };
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    googleLogin()
      .then((result) => {
        setUser(result.user);
        // navigate(location.state)
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          text: "LogIn Successfully With Google!!",
          icon: "success",
          showConfirmButton: false,
          position: "top",
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          text: "Please Check Your Email and Password than Try Again!!",
          icon: "error",
          showConfirmButton: false,
          position: "top",
          timer: 1500,
        });
        setLoginError(error.message);
      });
  };
  const handleGithubLogin = (e) => {
    e.preventDefault();
    githubLogin()
      .then((result) => {
        setUser(result.user);
        // navigate(location.state)
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          text: "LogIn Successfully With Github!!",
          icon: "success",
          showConfirmButton: false,
          position: "top",
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          text: "Please Check Your Email and Password than Try Again!!",
          icon: "error",
          showConfirmButton: false,
          position: "top",
          timer: 1500,
        });
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="card-body  md:w-3/4 lg:w-1/2 mx-auto bg-primary-content dark:bg-slate-400 dark:bg-opacity-70 p-2 md:p-6 lg:p-10  rounded-xl my-12 animate__animated animate_zoomInUp">
        <h2 className="text-3xl font-bold text-black my-10 text-center">
          SignIn your account
        </h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-lg text-black">
              Email address
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
        <div className="form-control relative">
          <label className="label">
            <span className="label-text font-semibold text-lg text-black">
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
            className="absolute right-[2%] top-[45%]"
            onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <FaEye className="text-blue-600"></FaEye>
            ) : (
              <FaEyeSlash className="text-blue-600"></FaEyeSlash>
            )}
          </span>
          <label className="label">
            <a
              href="#"
              className="label-text text-black font-semibold text-base text-black-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        {loginError && <p className="text-red-500">{loginError}</p>}
        <div className="form-control mt-6">
          <button className="btn btn-ghost w-full text-lg font-semibold text-black btn-outline bg-[#23BE0A] border-none hover:md:w-[50%] mx-auto">
            SignIn
          </button>
        </div>
        <p className="text-center text-lg text-black font-medium mt-4 animate__animated animate_fadeInBottomLeft">
          Don&apos;t have an account?{" "}
          <Link
            className=" text-blue-600 font-bold underline pl-1"
            to={"/signUp"}>
            SignUp
          </Link>{" "}
        </p>
        <h2 className="text-3xl font-bold text-center">Or</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate__animated  animate_fadeInBottomRight">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline btn-ghost text-black text-lg font-semibold">
            <FaGoogle className="text-2xl" />
            Sign In With Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="btn btn-outline btn-ghost text-lg text-black font-semibold">
            <FaGithub className="text-2xl" />
            Sign Up With Github
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
