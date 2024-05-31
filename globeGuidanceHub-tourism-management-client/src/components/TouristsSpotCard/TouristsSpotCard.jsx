import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TouristsSpotCard = ({ touristSpot }) => {
  const {
    _id,
    image,
    touristsSpotName,
    averageCost,
    seasonality,
    travelTime,
    totalVisitorsPerYear,
  } = touristSpot;
  return (
    // <div className="card card-compact  bg-base-100 shadow-xl">
    //   <figure className="p-8">
    //     <img
    //       src={image}
    //       alt="photo coming soon.."
    //       className="w-full rounded-xl"
    //     />
    //   </figure>
    //   <div className="card-body mx-4">
    //     <h2 className="card-title">Tourist Spot Name: {touristsSpotName}</h2>
    //         <p>Seasonality: {seasonality} </p>
    //     <div className="flex justify-between ">
    //         <p className="">Travel Time: {travelTime}</p>
    //         <p className="text-end">Average Cost: {averageCost} $</p>
    //     </div>
    //     <h3 className="text-2xl">Total Visitors Per Year : {totalVisitorsPerYear} Persons</h3>
    //     <div className="card-actions justify-end">
    //       <Link className="btn btn-primary w-full" to={`/touristsSpotDetails/${_id}`}>ViewDetails</Link>
    //     </div>
    //   </div>
    // </div>
    <div className="card card-compact bg-base-100 shadow-xl text-white">
  <figure className="p-4 lg:p-8">
    <img
      src={image}
      alt="photo coming soon.."
      className="w-full rounded-xl md:h-[280px] lg:h-[300px] xl:h-[330px]"
    />
  </figure>
  <div className="card-body mx-4">
    <h2 className="card-title text-blue-400 text-lg md:text-xl lg:text-2xl">Tourist Spot Name: {touristsSpotName}</h2>
    <p className="text-yellow-400 text-sm md:text-base lg:text-lg">Seasonality: {seasonality}</p>
    <div className="flex justify-between ">
      <p className=" text-purple-400 text-sm md:text-base lg:text-lg">Travel Time: {travelTime}</p> {/* Changed color to orange */}
      <p className="text-orange-400 text-sm md:text-base lg:text-lg text-end">Average Cost: {averageCost} $</p>
    </div>
    <h3 className="text-green-400 text-lg md:text-xl lg:text-2xl">Total Visitors Per Year: {totalVisitorsPerYear} Persons</h3>
    <div className="card-actions justify-end">
      <Link className="btn w-full bg-blue-500 hover:bg-blue-600" to={`/touristsSpotDetails/${_id}`}>View Details</Link>
    </div>
  </div>
</div>


  );
};

TouristsSpotCard.propTypes = {
  touristSpot: PropTypes.object,
};

export default TouristsSpotCard;
