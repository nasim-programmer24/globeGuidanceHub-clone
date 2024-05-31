import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Country = ({ country }) => {
  const { countryName, img, description } = country;
  return (
    <div>
      <div className="card h-[700px] bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="image coming soon.."
            className="rounded-xl md:h-[300px] lg:h-[330px] w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{countryName}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <Link className="btn btn-primary" to={`/countries/${countryName}`}>See All Tourists Spot of {countryName} </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object,
};

export default Country;
