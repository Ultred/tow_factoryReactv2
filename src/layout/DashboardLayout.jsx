import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Map from "../page/Map";
const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <div className="grid-cols-2 grid">
        <div>
          <Outlet />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
