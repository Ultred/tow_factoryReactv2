import styles from "../page/Trips.module.css";
import Navbar from "../components/Navbar";
import TripsNavBar from "../components/TripsNavBar";
import TripsTrackingOnChecking from "../components/TripsTrackingOnChecking";
import TripsTrackingConfirmation from "../components/TripsTrackingConfirmation";

const TripsNavbarSampleData = ["ALL", "IN TRANSIT", "CANCELLED", "DELIVERED"];
function Trips() {
  return (
    <>
      <Navbar />
      <TripsNavBar data={TripsNavbarSampleData} />
      <TripsTrackingOnChecking />
      <TripsTrackingConfirmation />
    </>
  );
}

export default Trips;
