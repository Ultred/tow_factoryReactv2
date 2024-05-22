import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import NotFound from "./page/NotFound";
import Login from "./page/Login";
import BookNowButton from "./features/bookNow/BookNowButton";
import BookForm from "./features/bookNow/BookForm";
import PickUpButton from "./features/bookNow/PickUpButton";
import DropOffButton from "./features/bookNow/DropOffButton";
import Trips from "./page/Trips";
import History from "./page/History";
import SignUp from "./page/SignUp";
import AppLayout from "./layout/AppLayout";
import Profile from "./page/Profile";
import MapLayout from "./layout/MapLayout";
import RepaironSiteForm from "./features/repairOnSite/RepaironSiteForm";
import { Toaster } from "react-hot-toast";
import SignUpSuccess from "./page/SignUpSuccess";
import WaitBookNow from "./features/bookNow/WaitBookNow";
import PickUpButtonOnSite from "./features/repairOnSite/PickUpButtonOnSite";

function App() {
  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/dashboard",
          element: <BookNowButton />,
        },
        {
          path: "bookNow",
          element: <BookForm />,
        },
        {
          path: "repairOnSite",
          element: <RepaironSiteForm />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <MapLayout />,
      children: [
        {
          path: "pickup",
          element: <PickUpButton />,
        },
        {
          path: "pickuponsite",
          element: <PickUpButtonOnSite />,
        },

        {
          path: "dropoff",
          element: <DropOffButton />,
        },
        {
          path: "wait",
          element: <WaitBookNow />,
        },
      ],
    },
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/trips",
          element: <Trips />,
        },
        {
          path: "/history",
          element: <History />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/signup-success",
      element: <SignUpSuccess />,
    },
    {
      path: "/notFound",
      element: <NotFound />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      {/* Notifacation toaster */}
      <Toaster />
      {/* Router */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
