import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const ProfileLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default ProfileLayout;
