import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Map from "../page/Map";

const MapLayout = () => {
  return (
    <>
      <Navbar />
      <Map />
      <Outlet />
    </>
  );
};

export default MapLayout;
