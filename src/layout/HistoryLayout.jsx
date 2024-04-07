import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import HistorySidebar from "../components/HistorySidebar";

const HistoryLayout = () => {
  return (
    <>
      <Navbar />
      <HistorySidebar />
      <Outlet />
    </>
  );
};

export default HistoryLayout;
