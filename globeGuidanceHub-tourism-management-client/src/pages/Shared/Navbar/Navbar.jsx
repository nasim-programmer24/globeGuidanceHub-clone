import { NavLink, useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAuth from "../../../providers/Auth";
import userDefaultPic from "../../../assets/images/user.png";
import Swal from "sweetalert2";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import logo from '../../../assets/logo22.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logOut } = useAuth();
  const displayName = user?.displayName;
  const photoURL = user?.photoURL;
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("theme");
    return localTheme ? localTheme : "light";
  });
  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          text: "SignOut Successful",
          icon: "success",
          showConfirmButton: false,
          position: "top",
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          text: `${error.message}`,
          icon: "error",
          showConfirmButton: false,
          position: "top",
          timer: 10000,
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            !isActive
              ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-2"
              : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-2"
          }
          to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            !isActive
              ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-2"
              : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-2"
          }
          to="/allTouristsSpot">
          All Tourists Spot
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-2"
                  : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-2"
              }
              to="/addTouristsSpot">
              Add Tourists Spot
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-2"
                  : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-2"
              }
              to="/myList">
              My List
            </NavLink>
          </li>
          <li className={`${user ? "2xl:hidden" : "lg:hidden"}`}>
            <button
              onClick={() => {
                setOpen(false);
                handleSignOut();
              }}
              className="btn text-lg font-semibold rounded-lg text-red-400">
              SignOut
            </button>
          </li>
        </>
      ) : (
        <>
          <li className={`${user ? "2xl:hidden" : "lg:hidden"}`} >
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-2"
                  : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-2"
              }
              to={"/signIn"}>
              <button>Sign In</button>
            </NavLink>
          </li>
        </>
        
      )}
      <li>
        <NavLink
          onClick={() => setOpen(false)}
          className={({ isActive }) =>
            !isActive
              ? "btn xl:text-lg font-semibold btn-outline bg-none border-none  rounded-lg text-black  mb-2  md:mr-2"
              : "btn  btn-outline xl:text-lg border-x-0 border-t-0 text-[#23BE0A]  border-[#23BE0A] border-b-4 btn-ghost mb-2  md:mr-2"
          }
          to="/contact">
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 dark:bg-white rounded-bl-lg rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            onClick={() => setOpen(!open)}
            className={`btn-ghost lg:hidden
            ${user ? "2xl:hidden" : "lg:hidden"}
                            `}>
            {open ? (
              <IoClose className="text-2xl text-black dark:text-primary-content" />
            ) : (
              <IoMenu className="text-2xl text-black dark:text-primary-content" />
            )}
          </div>
          <ul
            tabIndex={0}
            //  dropdown-content
            className={`menu menu-sm
                             absolute mt-5 z-[50] p-2 shadow 
             ${user ? "2xl:hidden" : "lg:hidden"}
                            ${open ? "" : "hidden"}
                             bg-base-100 dark:bg-lime-100 rounded-b-xl w-52`}>
            {navLinks}
          </ul>
        </div>
        <NavLink
          onClick={() => setOpen(false)}
          className="animate__animated animate__backInRight btn-ghost md:text-2xl rounded-2xl xl:text-3xl flex gap-2 text-black items-center font-bold flex-wrap">
          <img
            className="w-10 lg:w-12 xl:w-14"
            src={logo}
            alt="Logo Coming Soon"
          />
          <p className="flex flex-wrap">
            Globe
            <span className="text-green-600">GuidanceHub</span>
          </p>
        </NavLink>
      </div>
      <div
        className={`animate__animated animate__backInUp navbar-center hidden lg:flex
        ${user ? "2xl:flex" : "lg:flex"}`}>
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="animate__animated animate__backInLeft navbar-end">
        {user ? (
          <div className="flex items-center">
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={displayName}>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">
                  <img
                    alt="Photo Coming Soon.."
                    src={photoURL || userDefaultPic}
                  />
                </div>
              </div>
            </div>
            <div className={`hidden ${user ? "2xl:flex" : "lg:flex"}`}>
              <button
                onClick={() => {
                  setOpen(false);
                  handleSignOut();
                }}
                className="btn btn-sm md:btn-md ml-0.5 md:ml-4 text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]">
                SignOut
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`hidden ${
              user ? "2xl:flex" : "lg:flex"
            } flex-col md:flex-row gap-2`}>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn btn-sm md:btn-md mr-0.5 md:mr-4 text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]"
                  : "btn btn-sm md:btn-md btn-outline bg-[#23BE0A] border-none  btn-ghost mr-0.5 md:mr-4"
              }
              to={"/signIn"}>
              <button>Sign In</button>
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                !isActive
                  ? "btn p btn-sm md:btn-md text-lg font-semibold btn-outline bg-none border-solid border border-[#23BE0A] rounded-lg text-[#23BE0A]"
                  : "btn btn-sm md:btn-md btn-outline bg-[#23BE0A] border-none btn-ghost"
              }
              to={"/signUp"}>
              <button>Sign Up</button>
            </NavLink>
          </div>
        )}
        <div className="ml-2">
          <label className="cursor-pointer grid place-items-center ">
            <input
              onChange={handleToggle}
              type="checkbox"
              checked={theme === "dark"}
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
      <Tooltip id="my-tooltip" place="left" />
    </div>
  );
};

export default Navbar;
