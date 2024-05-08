import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Map from "../page/Map";
import IconFloatLeft from "../components/IconFloatLeft";
const MapLayout = () => {
  return (
    <>
      <Navbar />
      <IconFloatLeft />
      <div className="h-[90vh]">
        <Map />
      </div>
      <Outlet />
    </>
  );
};

export default MapLayout;
