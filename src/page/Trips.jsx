import CardData from "../components/CardData";
import SecondNavbar from "../components/SecondNavbar";
import { tripsData } from "../utils/DataSample";
const TripsNavbarSampleData = ["ALL", "IN TRANSIT", "CANCELLED", "DELIVERED"];
function Trips() {
  const handleShowItemTrips = (data) => {
    console.log(data);
  };
  return (
    <>
      <SecondNavbar
        onItemClick={handleShowItemTrips}
        data={TripsNavbarSampleData}
      />
      <div>
        {tripsData.map((data) => (
          <CardData key={data.id} data={data} />
        ))}
      </div>
    </>
  );
}

export default Trips;
