import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Map from "../page/Map";
const MapLayout = () => {
  return (
    <>
      <Navbar />
      <div className="h-[90vh]">
        <Map />
      </div>
      <Outlet />
    </>
  );
};

export default MapLayout;
