import { Business as BusinessType } from "../../types/business";
import Button from "../Button/Button";
import styles from "./Appointment.module.scss";
import { TbUpload } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { PiNotePencilBold } from "react-icons/pi";
import BookAppointment from "../BookAppointment/BookAppointment";
import { useState } from "react";

interface AppointmentProps {
  business: BusinessType;
}

const Appointment = ({ business }: AppointmentProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  return (
    <section className={styles.wrapper}>
      <Button>
        <TbUpload />
      </Button>
      <p>
        <GoPerson /> {business.contactPerson}
      </p>
      <Button onClick={openModal}>
        <PiNotePencilBold /> Book Appointment
      </Button>

      {isModalOpen && (
        <>
          
          <div className={styles.appointmentWrapper} >
            <BookAppointment business={business} closeModal={closeModal} />
          </div>
          <div className={styles.background} />
        </>
      )}
    </section>
  );
};

export default Appointment;