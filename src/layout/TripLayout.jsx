import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TripsNavBar from "../components/TripsNavBar";

const TripLayout = () => {
  return (
    <>
      <Navbar />
      <TripsNavBar />
      <Outlet />
      <div>TETSDUASGHDIA</div>
    </>
  );
};

export default TripLayout;
