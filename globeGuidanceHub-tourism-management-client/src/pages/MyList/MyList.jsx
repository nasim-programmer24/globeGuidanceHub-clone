import { useEffect, useState, Fragment } from "react";
import useAuth from "../../providers/Auth";
import Swal from "sweetalert2";
import { Dialog, Transition } from "@headlessui/react";

const MyList = () => {
  const [myTouristsSpot, setMyTouristsSpot] = useState([]);
  const [touristSpot, setTouristSpot] = useState(null);
  const { user, loading } = useAuth() || {};
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    fetch(
      `https://globe-guidance-hub-tourism-management-server.vercel.app/touristsSpot/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyTouristsSpot(data);
      });
  }, [user, myTouristsSpot]);
  const handleUpdateTouristsSpot = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.photo.value;
    const touristsSpotName = form.spotName.value;
    const countryName = form.country.value;
    const location = form.location.value;
    const shortDescription = form.description.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitors.value;

    const updatedTouristsSpot = {
      image,
      touristsSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
    };

    // send data to the sever
    fetch(
      `https://globe-guidance-hub-tourism-management-server.vercel.app/touristSpot/${touristSpot?._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedTouristsSpot),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setIsOpen(false);
          Swal.fire({
            title: "Successful",
            text: "Tourists Spot Updated Successfully",
            icon: "success",
            showConfirmButton: false,
            position: "top",
            timer: 2000,
          });
        } else {
          setIsOpen(false);
          Swal.fire({
            title: "Warn",
            text: "You haven't changed anythings ",
            icon: "warning",
            showConfirmButton: false,
            position: "top",
            timer: 2000,
          });
        }
      });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://globe-guidance-hub-tourism-management-server.vercel.app/touristSpot/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Tourists Spot has been deleted.",
                icon: "success",
              });
              const remaining = myTouristsSpot.filter(
                (tourists_spot) => tourists_spot._id !== id
              );
              setMyTouristsSpot(remaining);
            }
          });
      }
    });
  };
  if (loading) {
    return (
      <div className=" flex mt-16 justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  if (myTouristsSpot.length <= 0) {
    return (
      <div className="pt-14 pb-28 md:min-h-[80vh] lg:flex flex-col items-center justify-center">
        <h2 className="text-4xl text-base-content text-center py-8">
          Your Added Tourists Spot List
        </h2>
        <h3 className="text-3xl text-base-content text-center py-8">
          You haven&apos;t Added Any Tourists Spot Yet
        </h3>
      </div>
    );
  }
  if (myTouristsSpot.length > 0) {
    return (
      <div className="pt-14 pb-28 md:min-h-[80vh] lg:flex flex-col items-center justify-center">
        <div>
          <h2 className="text-4xl text-base-content text-center py-8 font-bold">
            Your Added Tourists Spot List
          </h2>
          <p className="text-lg text-center w-[90%] md:w-[80%] font-medium mx-auto text-base-content pb-12">
            Access your personalized travel itinerary with
            GlobeGuidanceHub&apos;s My List section. Explore the tourist spots
            you&apos;ve added, tailor your travel plans, and create a bespoke
            journey that reflects your unique interests and preferences.
          </p>
        </div>
        <div className="overflow-x-auto lg:w-3/4 mx-auto">
          <table className="table mx-auto border-4 overflow-x-auto">
            <thead>
              <tr>
                <th className="text-base-content md:text-lg lg:text-xl"></th>
                <th className="text-base-content md:text-lg lg:text-xl">
                  Tourists Spot Name
                </th>
                <th className="text-base-content md:text-lg lg:text-xl">
                  Country
                </th>
                <th className="text-base-content md:text-lg lg:text-xl">
                  Seasonality
                </th>
                <th className="text-base-content md:text-lg lg:text-xl">
                  Travel Time
                </th>
                <th className="text-base-content md:text-lg lg:text-xl flex justify-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {myTouristsSpot.map((spot, idx) => (
                <tr key={spot._id}>
                  <th className="text-base-content md:text-lg lg:text-xl">
                    {idx + 1}
                  </th>
                  <td className="text-base-content md:text-lg">
                    {spot.touristsSpotName}
                  </td>
                  <td className="text-base-content md:text-lg">
                    {spot.countryName}
                  </td>
                  <td className="text-base-content md:text-lg">
                    {spot.seasonality}
                  </td>
                  <td className="text-base-content md:text-lg">
                    {spot.travelTime}
                  </td>
                  <td>
                    <div className="flex gap-4 justify-center">
                      <button
                        className="btn btn-outline btn-info"
                        onClick={() => {
                          openModal();
                          setTouristSpot(spot);
                        }}>
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(spot._id)}
                        className="btn btn-warning">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="w-full max-w-7xl transform overflow-y-auto rounded-2xl bg-base-content p-6 text-left align-middle shadow-xl transition-all">
                    <div className="md:p-8">
                      <div className="text-end">
                        <button onClick={closeModal} className="btn">
                          Cancel Edit
                        </button>
                      </div>
                      <h1 className="text-4xl text-primary-content font-bold text-center py-12">
                        Update Your Tourists Spot Information
                      </h1>
                      <form
                        onSubmit={handleUpdateTouristsSpot}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-auto md:items-center">
                        <div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold text-lg text-base-content">
                                Tourists Spot Name
                              </span>
                            </label>
                            <input
                              type="text"
                              name="spotName"
                              placeholder="Enter Tourists Spot Name"
                              defaultValue={touristSpot?.touristsSpotName}
                              className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                              required
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold text-lg text-base-content">
                                Country Name
                              </span>
                            </label>
                            <select
                              name="country"
                              id="country"
                              className="font-semibold text-xl w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600">
                              <option value={touristSpot?.countryName}>
                                {touristSpot?.countryName}
                              </option>
                              <option value="Bangladesh">Bangladesh</option>
                              <option value="Indonesia">Indonesia</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Malaysia">Malaysia</option>
                              <option value="Vietnam">Vietnam</option>
                              <option value="Cambodia">Cambodia</option>
                            </select>
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold text-lg text-base-content">
                                Location
                              </span>
                            </label>
                            <input
                              type="text"
                              name="location"
                              placeholder="Enter spot location"
                              defaultValue={touristSpot?.location}
                              className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                              required
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold text-lg text-base-content">
                                Travel Time
                              </span>
                            </label>
                            <input
                              type="text"
                              name="travelTime"
                              placeholder="Enter travel_time => like- 7 days"
                              defaultValue={touristSpot?.travelTime}
                              className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold text-lg text-base-content">
                                Photo URL
                              </span>
                            </label>
                            <input
                              type="url"
                              name="photo"
                              placeholder="Enter Spot Photo URL"
                              defaultValue={touristSpot?.image}
                              className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                              required
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold text-lg text-base-content">
                                Average Cost
                              </span>
                            </label>
                            <input
                              type="number"
                              name="averageCost"
                              placeholder="Enter Spot Average Cost"
                              defaultValue={touristSpot?.averageCost}
                              className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                              required
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold text-lg text-base-content">
                                Seasonality
                              </span>
                            </label>
                            <input
                              type="text"
                              name="seasonality"
                              placeholder="Enter seasonality - like summer, winter"
                              defaultValue={touristSpot?.seasonality}
                              className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                              required
                            />
                          </div>
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold text-lg text-base-content">
                                Total Visitors Per Year
                              </span>
                            </label>
                            <input
                              type="number"
                              name="totalVisitors"
                              placeholder="Enter totalVisitorsPerYear => like- 10000"
                              defaultValue={touristSpot?.totalVisitorsPerYear}
                              className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                              required
                            />
                          </div>
                        </div>
                        <div className="md:col-span-2 space-y-6">
                          <div className="form-control">
                            <label className="label">
                              <span className="label-text font-semibold text-lg text-base-content">
                                Short Description
                              </span>
                            </label>
                            <textarea
                              name="description"
                              id="description"
                              defaultValue={touristSpot?.shortDescription}
                              className="w-full px-4 py-3 md:min-h-32 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"></textarea>
                          </div>
                          <input
                            type="submit"
                            value="Update Tourists Spot"
                            className="btn w-full bg-[#D2B48C] border-2 rounded-md border-[#331A15] text-black"
                          />
                        </div>
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    );
  }
};

export default MyList;
