import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import TouristsSpotCard from "../../components/TouristsSpotCard/TouristsSpotCard";

const CountrySpots = () => {
    const {countryName} = useParams();
    const allSpot = useLoaderData();
    const [touristsSpot, setTouristsSpot] = useState(allSpot);
    useEffect(() => {
        setTouristsSpot(allSpot)
    },[allSpot]);
    if(allSpot.length == 0){
        return(
            <div className="min-h-[80vh] pt-12 pb-28">
        <div className="pb-28">
          <h1 className="text-3xl md:text-5xl text-base-content text-center pb-8 font-bold">
           All Tourists Spot Of : {countryName}
          </h1>
        </div>
        <h1 className="text-4xl text-black text-center">In this country tourists spot now not available in our spot list. <br /> Please be patient for coming in future</h1>
        </div>
        )
    }
    return (
        <div className="min-h-[80vh] pt-12 pb-28">
        <div className="pb-28">
          <h1 className="text-3xl md:text-5xl text-base-content text-center pb-8 font-bold">
           All Tourists Spot Of : {countryName}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                touristsSpot.map(touristSpot => <TouristsSpotCard key={touristSpot._id} touristSpot={touristSpot} ></TouristsSpotCard>)
            }
        </div>
        </div>
    );
};

export default CountrySpots;