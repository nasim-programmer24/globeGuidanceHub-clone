import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className=" flex mt-16 justify-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/signIn"}></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
