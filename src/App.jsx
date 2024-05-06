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
