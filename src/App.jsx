import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import Trips from "./page/Trips";
import SignUp from "./page/SignUp";

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
      element: <Trips />,
    },
    {
      path: "/history",
      element: <HistoryLayout />,
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
    {
      path: "/signup",
      element: <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
