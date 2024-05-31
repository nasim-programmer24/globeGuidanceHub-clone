import { useLoaderData } from "react-router-dom";

const TouristsSpotDetails = () => {
  const touristsSpot = useLoaderData();
  const {
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
  } = touristsSpot;
  return (
    <div className="min-h-[80vh]">
      <div className="flex flex-col container mx-auto p-6 space-y-6 rounded-lg lg:mt-6">
        <h1 className="text-2xl text-black font-bold lg:text-5xl text-center my-12">
          Tourists Spot Details
        </h1>
        <h2 className="lg:text-4xl text-black">
          {/* Seasonality: <span className="text-[#23BE0A]">#{seasonality}</span> */}
          TouristsSpot Name :{" "}
          <span className="text-[#23BE0A]">#{touristsSpotName}</span>
        </h2>
        <img
          src={image}
          alt=""
          className="rounded-3xl  hover:scale-105 hover:delay-130 w-[110vh] mb-4 max-h-[600px]"
        />

        <div>
          <div className=" text-black text-lg lg:text-2xl font-semibold gap-4 my-6">
            <i className="card-title lg:text-3xl text-[#FF5733] items-center pb-4">
              Seasonality : #{seasonality}
            </i>
          </div>
          <div className="flex items-center flex-wrap justify-between text-xl font-semibold md:gap-6 lg:gap-8 mb-3 mt-4 text-black">
            <i>Location : {location}</i>
            <i>Country Name : {countryName}</i>
          </div>

          <div>
            <div className="flex justify-between items-center flex-wrap gap-5 text-black text-xl my-5 font-semibold">
              <h2>
                Travel Time :
                <span className="bg-orange-600 ml-2 text-white px-6 py-2 rounded-xl">
                  {travelTime}
                </span>
              </h2>
              <h3>
                Average Cost : <i className="text-red-600">{averageCost} $</i>
              </h3>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row justify-between items-center flex-wrap leading-8 mb-6">
            <div>
              <h3 className="text-xl md:text-4xl font-bold text-black">TotalVisitorsPerYear : {totalVisitorsPerYear}</h3>
            </div>
            <div className="flex flex-col flex-wrap mt-2">
            <span className="text-lg font-semibold text-gray-800">
              Added by :
            </span>
              <p className="text-3xl text-black md:text-end">Name: {userName}</p>
              <p className="text-3xl text-black md:text-end">Email: {userEmail}</p>
            </div>
          </div>

          <div className="text-black text-lg lg:text-2xl font-semibold gap-4 my-6">
            <i>Description : </i>
          </div>

          <p className="text-base text-gray-600 font-medium">
            {shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TouristsSpotDetails;
