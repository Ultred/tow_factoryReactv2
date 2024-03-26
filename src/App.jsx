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
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
