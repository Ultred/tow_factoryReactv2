import Navbar from "../components/Navbar";
import TripsNavBar from "../components/TripsNavBar";
import TripsTrackingOnChecking from "../components/TripsTrackingOnChecking";
import TripsTrackingConfirmation from "../components/TripsTrackingConfirmation"
function Trips (){
    return(
        <>
            <Navbar/>
            <TripsNavBar/>
            <TripsTrackingOnChecking/>
            <TripsTrackingConfirmation/>
            <div>hello</div>
        </>
    )
}

export default Trips;
