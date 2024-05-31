import { useLoaderData } from "react-router-dom";
import useAuth from "../../providers/Auth";
import { useState } from "react";
import TouristsSpotCard from "../../components/TouristsSpotCard/TouristsSpotCard";
import { Typewriter } from "react-simple-typewriter";

const AllTouristsSpot = () => {
  const { loading } = useAuth();
  const loadedTouristsSpot = useLoaderData();
  const [touristsSpot, setTouristsSpot] = useState(loadedTouristsSpot);
  const handleSortByCost = (e) => {
    const value = e.target.value;
    if (value == "lowToHighCost") {
      const sortedSpots = [...touristsSpot].sort(
        (a, b) => a.averageCost - b.averageCost
      );
      setTouristsSpot(sortedSpots);
    }
  };

  if (loading) {
    return (
      <div className=" flex mt-16 justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="min-h-[80vh] pt-12 pb-28">
      <div className="flex justify-center text-green-500 items-center my-12 text-[42px] ">
        <Typewriter
          words={["All ", "Tourists Spot", "Is Here"]}
          loop={true}
          cursor
          cursorStyle="~"
          typeSpeed={170}
          deleteSpeed={80}
          delaySpeed={1200}
          style={{ fontSize: "24px" }}
        />
      </div>
      <div>
        <h1 className="text-5xl text-base-content text-center pt-12 pb-8 font-bold">
          Our All Tourists Spot
        </h1>
        <p className="text-lg text-center w-[90%] md:w-[80%] font-medium mx-auto text-base-content">
          Discover a world of wonders with GlobeGuidanceHub&apos;s All Tourist
          Spots section. From iconic landmarks to hidden gems, explore a curated
          collection of must-see destinations that will inspire your wanderlust
          and fuel your travel dreams.
        </p>
      </div>
      <div className="flex justify-center items-center py-12">
        <select
          name="sort"
          className="font-semibold text-xl  px-6 py-3 rounded-md border focus:border-4 border-gray-700 focus:text-gray-100  focus:bg-gray-900  focus:border-green-600"
          onChange={handleSortByCost}>
          <option value="">Sort By</option>
          <option value="lowToHighCost">Low Cost to High Cost</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {touristsSpot.map((spot) => (
          <TouristsSpotCard
            key={spot._id}
            touristSpot={spot}
            setTouristsSpot={setTouristsSpot}></TouristsSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
