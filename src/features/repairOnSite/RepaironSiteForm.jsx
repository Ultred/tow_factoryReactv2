import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import styles from "./RepaironSiteForm.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import SelectCustom from "../../components/SelectCustom";
import { bookingStore } from "../../context/bookingStoreState";
import { ModalStoreState } from "../../context/ModalStoreState";
import CancelBookingModal from "../bookNow/CancelBookingModal";
import ScheduleModalOnsite from "./ScheduleModalOnsite";
import * as apiClient from "../../service/ApiClient";
import Button2Custom from "../../components/Button2Custom";
import { useQuery } from "@tanstack/react-query";

const dataSample = [
  { name: "Insurance Sample 1", price: "3500.00" },
  { name: "Insurance Sample 2", price: "3500.00" },
];
const RepaironSiteForm = () => {
  const { bookStateValue } = bookingStore();
  const { openModal } = ModalStoreState();
  const navigate = useNavigate();

  const { data: insuranceAll, isLoading } = useQuery({
    queryKey: ["getInsuranceAll"],
    queryFn: apiClient.getInsuranceAll,
    refetchOnWindowFocus: false,
  });
  const handleNavigateBack = () => {
    //console.log(insuranceAll?.result);
    openModal(<CancelBookingModal />);
  };

  const handleOpenScheduleModal = () => {
    openModal(<ScheduleModalOnsite />);

    console.log(bookStateValue);
  };

  const handleBookNow = () => {
    navigate("/dashboard/wait");
  };

  const canBookNow = true;
  return (
    <div className={styles.container}>
      <div onClick={handleNavigateBack} className={styles.flexTopBack}>
        <FaArrowLeft /> Booking
      </div>
      <div className={styles.bookFormPadding}>
        <div className={styles.marginTop}>
          <div className={styles.flexh2Map}>
            <h2 className={styles.textH2}>Pick-Up Location:</h2>
            <Link className={styles.flexMap} to={"/dashboard/pickuponsite"}>
              <img
                className={styles.MapImage}
                src="/src/assets/clickMap.svg"
                alt=""
              />
              <p className={styles.mapTextBlue}>Choose from Map</p>
            </Link>
          </div>
          <InputField
            id={"pickupOnsite"}
            placeholder={"Pick-Up Location"}
            icon={"pickUp"}
            type={"text"}
            name={"pickup"}
            styletype={"primary"}
            value={bookStateValue.pickUpPlaceName}
          />
        </div>
        <div className={styles.marginTop}>
          <h2 className={styles.textH2}>Insurance:</h2>
          <SelectCustom
            optionSelect={insuranceAll?.result}
            placeholder={"Select Insurance"}
            tooltip={"This Pricing is for those in Metro Manila only"}
            heading={"Please select who insured the vehicle"}
          />
        </div>
        <div className={styles.marginTop}>
          <h2 className={styles.textH2}>Note:</h2>
          <InputField
            placeholder={"Notes"}
            type={"text"}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={`${styles.bookFormPadding} ${styles.flexButton}`}>
        <Button2Custom
          disabledStyle={"primary"}
          isActive={canBookNow}
          icon={"calendar"}
          onClick={handleOpenScheduleModal}
          buttonStyle={"secondary"}
        >
          {bookStateValue.scheduledDate && bookStateValue.scheduledTime ? (
            <div className={styles.buttonSchedule}>
              <h2>
                Date: <span>{bookStateValue.scheduledDate}</span>
              </h2>
              <h2>
                Time: <span>{bookStateValue.scheduledTime}</span>
              </h2>
            </div>
          ) : (
            "Set a Schedule"
          )}
        </Button2Custom>
        <Button2Custom
          isActive={canBookNow}
          disabledStyle={"secondary"}
          type={"submit"}
          onClick={handleBookNow}
          icon={"uphill"}
          buttonStyle={"primary"}
        >
          Book Now
        </Button2Custom>
      </div>
    </div>
  );
};

export default RepaironSiteForm;
