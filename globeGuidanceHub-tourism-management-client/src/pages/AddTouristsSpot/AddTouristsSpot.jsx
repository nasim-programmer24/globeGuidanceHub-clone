import Swal from "sweetalert2";
import useAuth from "../../providers/Auth";

const AddTouristsSpot = () => {
  const { user } = useAuth();
  const handleAddSpot = (e) => {
    e.preventDefault();

    const form = e.target;

    const image = form.photo.value;
    const touristsSpotName = form.spotName.value;
    const countryName = form.country.value;
    const location = form.location.value;
    const shortDescription = form.description.value;
    const averageCost = form.averageCost.value;
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitors.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;

    const newSpot = {
      image,
      touristsSpotName,
      countryName,
      location,
      shortDescription,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
      userName,
      userEmail,
    };
    // send data to the server
    fetch(
      "https://globe-guidance-hub-tourism-management-server.vercel.app/touristsSpot",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newSpot),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Successful",
            text: "Tourists Spot Added Successfully",
            icon: "success",
            showConfirmButton: false,
            position: "top",
            timer: 1000,
          });
        }
      });
  };
  return (
    <div>
      <div className="container mx-auto mt-12 min-h-[80vh] pt-14 pb-28">
        <div className="text-center px-6 md:px-10 py-8 lg:px-28 lg:py-16 bg-base-content lg:w-3/4 rounded-md mx-auto">
          <div>
            <h2 className="text-5xl pb-6 font-extrabold text-primary-content ">
              Add a New Tourists Spot
            </h2>
            <p className="text-lg text-center md:w-[90%] mx-auto text-primary-content pb-12">
              Share your favorite travel destinations with GlobeGuidanceHub&apos;s
              Tourist Spot Form. Contribute to our growing collection of
              must-see places, inspiring fellow travelers to explore new
              horizons and create unforgettable memories.
            </p>
          </div>
          <form
            onSubmit={handleAddSpot}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Tourists Spot Name
                  </span>
                </label>
                <input
                  type="text"
                  name="spotName"
                  placeholder="Enter Tourists Spot Name"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-primary-content placeholder:text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Country Name
                  </span>
                </label>
                <select
                  name="country"
                  id="country"
                  className="font-semibold text-xl w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-primary-content text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600">
                  <option>Select Country</option>
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
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Location
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter spot location"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-primary-content placeholder:text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Travel Time
                  </span>
                </label>
                <input
                  type="text"
                  name="travelTime"
                  placeholder="Enter travel_time => like- 7 days"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-primary-content placeholder:text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    User Name
                  </span>
                </label>
                <input
                  type="text"
                  name="userName"
                  placeholder={user?.displayName}
                  value={user?.displayName}
                  readOnly
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-primary-content placeholder:text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Photo URL
                  </span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Enter Spot Photo URL"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-primary-content placeholder:text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Average Cost
                  </span>
                </label>
                <input
                  type="number"
                  name="averageCost"
                  placeholder="Enter Spot Average Cost in Dollar"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-primary-content placeholder:text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Seasonality
                  </span>
                </label>
                <input
                  type="text"
                  name="seasonality"
                  placeholder="Enter seasonality - like summer, winter"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-primary-content placeholder:text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Total Visitors Per Year
                  </span>
                </label>
                <input
                  type="number"
                  name="totalVisitors"
                  placeholder="Enter totalVisitorsPerYear => like- 10000"
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-primary-content placeholder:text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text  font-semibold text-lg text-primary-content">
                    User Email
                  </span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Please Enter Your Email by which Email You Signed In"
                  value={user?.email}
                  readOnly
                  className="w-full px-4 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-primary-content placeholder:text-black text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"
                  required
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg text-primary-content">
                    Short Description
                  </span>
                </label>
                <textarea
                  name="description"
                  id="description"
                  className="w-full px-4 py-3 md:min-h-32 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100 dark:bg-gray-400 bg-blue-100 bg-opacity-60 dark:bg-opacity-100 focus:bg-gray-900 text-primary-content text-opacity-60 dark:text-opacity-80 dark:text-white focus:border-green-600"></textarea>
              </div>
              <input
                type="submit"
                value="Add Tourists Spot"
                className="btn w-full bg-[#D2B48C] border-2 rounded-md border-[#331A15] text-primary-content"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
