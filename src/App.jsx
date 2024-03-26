import { createBrowserRouter, RouterProvider } from "react-router-dom";
//Layout
import TripLayout from "./layout/TripLayout";
import HistoryLayout from "./layout/HistoryLayout";
import DashboardLayout from "./layout/DashboardLayout";
import ProfileLayout from "./layout/ProfileLayout";

import NotFound from "./page/NotFound";
import Login from "./page/Login";
import BookNowButton from "./features/bookNow/BookNowButton";
import BookForm from "./features/bookNow/BookForm";
import PickUpButton from "./features/bookNow/PickUpButton";
import DropOffButton from "./features/bookNow/DropOffButton";
import Profile from "./page/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/booking",
      element: <DashboardLayout />,
      children: [
        {
          path: "/booking",
          element: <BookNowButton />,
        },
        {
          path: "bookNow",
          element: <BookForm />,
        },
        {
          path: "pickup",
          element: <PickUpButton />,
        },
        {
          path: "dropoff",
          element: <DropOffButton />,
        },
      ],
    },
    {
      path: "/trips",
      element: <TripLayout />,
    },
    {
      path: "/history",
      element: <HistoryLayout />,
      // children: [
      //   {
      //     path: "/trips",
      //     element: <Trips />,
      //   },
      // ],
    },
    {
      path: "/profile",
      element: <ProfileLayout />,
      children: [
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
      path: "/notFound",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
