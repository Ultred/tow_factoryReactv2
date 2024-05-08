import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Map from "../page/Map";
import IconFloatLeft from "../components/IconFloatLeft";
import ModalMain from "../components/ModalMain";
import { ModalStoreState } from "../context/ModalStoreState";
const MapLayout = () => {
  const { isOpen, modalComponent } = ModalStoreState();

  return (
    <>
      {/* Modal main */}
      {isOpen && <ModalMain>{modalComponent}</ModalMain>}
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
