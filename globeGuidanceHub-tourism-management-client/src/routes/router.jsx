import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import PrivateRoute from "./PrivateRoute";
import MyList from "../pages/MyList/MyList";
import TouristsSpotDetails from "../pages/TouristsSpotDetails/TouristsSpotDetails";
import CountrySpots from "../pages/Countries/CountrySpots";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://globe-guidance-hub-tourism-management-server.vercel.app/touristsSpot"
          ),
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/allTouristsSpot",
        element: <AllTouristsSpot />,
        loader: () =>
          fetch(
            "https://globe-guidance-hub-tourism-management-server.vercel.app/touristsSpot"
          ),
      },
      {
        path: "/touristsSpotDetails/:id",
        element: (
          <PrivateRoute>
            <TouristsSpotDetails />,
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://globe-guidance-hub-tourism-management-server.vercel.app/touristSpot/${params?.id}`
          ),
      },
      {
        path: "/addTouristsSpot",
        element: (
          <PrivateRoute>
            <AddTouristsSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://globe-guidance-hub-tourism-management-server.vercel.app/touristsSpot/${params?.email}`
          ),
      },
      {
        path: "/countries/:countryName",
        element: <CountrySpots/>,
        loader: ({params}) => fetch(`https://globe-guidance-hub-tourism-management-server.vercel.app/touristsSpotByCountries/${params.countryName}`) 
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ],
  },
]);

export default router;
