import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import IconFloatLeft from "../components/IconFloatLeft";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <IconFloatLeft />
      <Outlet />
    </>
  );
};

export default AppLayout;
