import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import NotFound from "./page/NotFound";
import Login from "./page/Login";
import UserProfile from "./features/profile/UserProfile";
import BookNowButton from "./features/bookNow/BookNowButton";
import BookForm from "./features/bookNow/BookForm";
import Trips from "./page/Trips"

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
          path: "user",
          element: <UserProfile />,
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
      path:"/trips",
      element: <Trips/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
