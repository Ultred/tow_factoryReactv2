import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Map from "../page/Map";
const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Map />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
