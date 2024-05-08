import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import IconFloatLeft from "../components/IconFloatLeft";
import ModalMain from "../components/ModalMain";
import { ModalStoreState } from "../context/ModalStoreState";

const AppLayout = () => {
  const { isOpen, modalComponent } = ModalStoreState();

  return (
    <>
      {/* Modal main */}
      {isOpen && <ModalMain>{modalComponent}</ModalMain>}
      <Navbar />
      <IconFloatLeft />
      <Outlet />
    </>
  );
};

export default AppLayout;
