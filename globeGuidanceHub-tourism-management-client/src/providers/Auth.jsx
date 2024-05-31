import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const useAuth = () => {
    const authAllInfo = useContext(AuthContext);
    return authAllInfo;
};

export default useAuth;