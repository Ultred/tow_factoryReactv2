import { Link, useLocation, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import styles from "../bookNow/BookForm.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { ModalStoreState } from "../../context/ModalStoreState";
import ScheduleModal from "./ScheduleModal";
import Button2Custom from "../../components/Button2Custom";
import { useEffect, useState } from "react";
import SelectCustom from "../../components/SelectCustom";
import CancelBookingModal from "./CancelBookingModal";
import { bookingStore } from "../../context/bookingStoreState";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import * as apiClient from "../../service/ApiClient";
import useCalculateETA from "../../hooks/useCalculateETA ";

const BookForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { eta, calculateETA, error } = useCalculateETA(
    "AIzaSyA06ZsF5FHeRM-nEax-v0VsOezcS69DsAY"
  );
  //Put google Map API key HERE
  const { mutate, isPending } = useMutation({
    mutationKey: ["createBooking"],
    mutationFn: apiClient.postCreateBookings,
    onSuccess: (response) => {
      console.log(response);
      navigate("/dashboard/wait");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const { data: unitsAll, isLoading } = useQuery({
    queryKey: ["getUnitsAll"],
    queryFn: apiClient.getUnitAll,
    refetchOnWindowFocus: false,
  });

  const { bookStateValue, setBookStateValue } = bookingStore();
  const [loadingAmount, setLoadingAmount] = useState(false);
  const [showETA, setShowETA] = useState(false);
  const { openModal } = ModalStoreState();

  const handleOpenScheduleModal = () => {
    openModal(<ScheduleModal />);
  };

  const handleNavigateBack = () => {
    //console.log(unitsAll.result);
    openModal(<CancelBookingModal />);
  };
  const handleSendBookNowInFormData = () => {
    const {
      dropOffLat,
      dropOffLong,
      pickUpLat,
      pickUpLong,
      insuranceId = "",
      unitsId = "6ce37c2d-40ce-433c-b483-95e359791557",
      //Remove limiter for this
      scheduledTime = "14:00",
      scheduledDate = "2024-04-25",
      eon,
      isScheduled = false,
      note,
      serviceType,
    } = bookStateValue;

    //Static First To Make Sure
    const manufacturer = "Honda";
    const plateNum = "ABC123";
    const deliveryTime = "14:00";
    const paymentMethod = "Paypal";
    const formData = new FormData();

    formData.append(
      "data",
      JSON.stringify({
        dropOffLat,
        dropOffLong,
        pickUpLat,
        pickUpLong,
        unitsId,
        scheduledTime,
        scheduledDate,
        insuranceId,
        eon,
        isScheduled,
        note,
        deliveryTime,
        serviceType,
        paymentMethod,
        manufacturer,
        plateNum,
      })
    );
    console.log(bookStateValue);

    mutate(formData);
  };

  const handleBookNow = () => {
    const { pickUpPlaceName, dropOffPlaceName, unit, eon, note } =
      bookStateValue;
    //Main Booking Found Here -------------------------------
    if (pickUpPlaceName && dropOffPlaceName && unit && eon && note) {
      handleSendBookNowInFormData();
      //navigate("/dashboard/wait");
    } else {
      toast.error("Please fill in all required fields");
    }
  };

  const handleGetUnitValue = (value) => {
    setBookStateValue({ ...bookStateValue, unit: value.name });
  };

  const handleGetEONValue = (event) => {
    setBookStateValue({ ...bookStateValue, eon: event.target.value });
  };

  const handleGetNoteValue = (event) => {
    setBookStateValue({ ...bookStateValue, note: event.target.value });
  };

  const handleCalculateETA = () => {
    const { pickUpPlaceName, dropOffPlaceName } = bookStateValue;
    calculateETA(pickUpPlaceName, dropOffPlaceName);
  };

  useEffect(() => {
    const { pickUpPlaceName, dropOffPlaceName, unit, eon, note } =
      bookStateValue;
    if (pickUpPlaceName && dropOffPlaceName && unit && eon && note) {
      setShowETA(true);
      setLoadingAmount(true);
      handleCalculateETA();
      setTimeout(() => {
        setLoadingAmount(false);
      }, 1000);
    }
  }, [bookStateValue]);

  //UseEffect To Get the Service Type
  useEffect(() => {
    if (location.pathname === "/dashboard/booknow") {
      setBookStateValue({ ...bookStateValue, serviceType: "Express" });
    } else if (location.pathname === "/dashboard/repaironsite") {
      setBookStateValue({ ...bookStateValue, serviceType: "Repair on-site" });
    }
  }, []);

  const canBookNow =
    bookStateValue.pickUpPlaceName &&
    bookStateValue.dropOffPlaceName &&
    bookStateValue.unit &&
    bookStateValue.eon &&
    bookStateValue.note;

  return (
    <div>
      <div onClick={handleNavigateBack} className={styles.flexTopBack}>
        <FaArrowLeft /> Booking
      </div>
      <div className={styles.bookFormPadding}>
        <div className={styles.marginTop}>
          <div className={styles.flexh2Map}>
            <h2 className={styles.textH2}>Pick-Up Location:</h2>
            <Link className={styles.flexMap} to={"/dashboard/pickup"}>
              <img
                className={styles.MapImage}
                src="/src/assets/clickMap.svg"
                alt=""
              />
              <p className={styles.mapTextBlue}>Choose from Map</p>
            </Link>
          </div>
          <InputField
            id={"pickup"}
            placeholder={"Pick-Up Location"}
            icon={"pickUp"}
            type={"text"}
            value={bookStateValue.pickUpPlaceName}
            name={"pickup"}
            styletype={"primary"}
          />
        </div>
        <div className={styles.marginTop}>
          <div className={styles.flexh2Map}>
            <h2 className={styles.textH2}>Drop-Off Location:</h2>
            <Link className={styles.flexMap} to={"/dashboard/dropoff"}>
              <img
                className={styles.MapImage}
                src="/src/assets/clickMap.svg"
                alt=""
              />
              <p className={styles.mapTextBlue}>Choose from Map</p>
            </Link>
          </div>
          <InputField
            id={"dropoff"}
            placeholder={"Drop-off Location"}
            icon={"dropoff"}
            type={"text"}
            value={bookStateValue.dropOffPlaceName}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
        <div className={styles.marginTop}>
          <h2 className={styles.textH2}>EON:</h2>
          <InputField
            id={"eon"}
            placeholder={"EON Number"}
            type={"number"}
            value={bookStateValue.eon}
            onChange={handleGetEONValue}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
        <div className={styles.marginTop}>
          <h2 className={styles.textH2}>Unit:</h2>
          <SelectCustom
            onChange={handleGetUnitValue}
            optionSelect={unitsAll?.result}
            value={bookStateValue.unit}
            placeholder={"Select Unit"}
            tooltip={"This Pricing is for those in Metro Manila only"}
            heading={"Please select what unit of service you require"}
          />
        </div>
        <div className={styles.marginTop}>
          <h2 className={styles.textH2}>Note:</h2>
          <InputField
            id={"note"}
            placeholder={"Make a Note..."}
            value={bookStateValue.note}
            onChange={handleGetNoteValue}
            type={"text"}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
      </div>
      <div className={styles.divider}>
        {showETA && (
          <>
            <p className={styles.fontP}>
              ETA:
              {loadingAmount ? (
                <span className={styles.textFontBlue}>Loading...</span>
              ) : (
                <span className={styles.textFontBlue}>
                  {error ? error : eta}
                </span>
              )}
            </p>
            <p className={styles.fontP}>
              Amount:
              {loadingAmount ? (
                <span className={styles.textFontBlue}>Loading...</span>
              ) : (
                <span className={styles.textFontBlue}>P1500</span>
              )}
            </p>
          </>
        )}
      </div>
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
          isLoading={isPending}
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

export default BookForm;
