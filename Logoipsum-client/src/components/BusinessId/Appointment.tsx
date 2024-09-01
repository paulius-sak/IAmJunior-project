import { Business as BusinessType } from "../../types/business";
import Button from "../Button/Button";
import styles from "./Appointment.module.scss";
import { TbUpload } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { PiNotePencilBold } from "react-icons/pi";

interface AppointmentProps {
  business: BusinessType;
}
const Appointment = ({ business }: AppointmentProps) => {
  return (
    <section className={styles.wrapper}>
      <Button>
        <TbUpload />
      </Button>
      <p>
        <GoPerson /> {business.contactPerson}
      </p>
      <Button>
        <PiNotePencilBold /> Book Appointment
      </Button>
    </section>
  );
};

export default Appointment;
