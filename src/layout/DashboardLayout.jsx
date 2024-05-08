import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Map from "../page/Map";
import IconFloatLeft from "../components/IconFloatLeft";
import { ModalStoreState } from "../context/ModalStoreState";
import ModalMain from "../components/ModalMain";
const DashboardLayout = () => {
  const { isOpen, modalComponent } = ModalStoreState();
  return (
    <>
      {/* Modal main */}
      {isOpen && <ModalMain>{modalComponent}</ModalMain>}
      <Navbar />
      <IconFloatLeft />
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
