import styles from "./BookAppointment.module.scss";
import { useState } from "react";
import BookAppointmentMantine from "./BookAppointmentMantine";

import "react-datepicker/dist/react-datepicker.css";
import { Business } from "../../types/business";
import { createBooking } from "../../api/booking";
import { useUser } from "../../context/UserContext";

interface BookAppointmentProps {
  closeModal: () => void;
  business: Business
}


const BookAppointment = ({ closeModal, business }: BookAppointmentProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  const { user } = useUser()

  const handleSelectHour = (hour: string) => {
    setSelectedHour(hour);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleBookAppointment = async () => {
    if (!selectedDate || !selectedHour ) {
      alert("Please select both a date and time to book the appointment.");
      return;
    } else if  (!user) {
      alert("Please login to book appointment");
      return;
    }
    try {
      const formattedDate = selectedDate.toISOString().split("T")[0]; 

      await createBooking({
        businessId: business._id,
        date: formattedDate,
        time: selectedHour,
        userEmail: user.email,  
        userName: user.name,    
      });
      alert("Booking successful!");
      closeModal();
    } catch (error) {
      console.error("Error booking appointment: ", error);
      alert("There was an error booking the appointment. Please try again.");
    }
  };

  return (
    <div className={styles.appointmentWrapper}>
      <button className={styles.closeButton} onClick={closeModal}>
        x
      </button>
      <BookAppointmentMantine value={selectedDate} onDateChange={handleDateChange} />
      <section className={styles.bookingHoursSection}>
        {business.bookingHours.map((hour) => (
          <button
            key={hour}
            className={`${styles.bookingHourButton} ${selectedHour === hour ? styles.selected : ""}`}
            onClick={() => handleSelectHour(hour)}
          >
            {hour}
          </button>
        ))}
      </section>
      <button className={styles.bookButton} onClick={handleBookAppointment}>
        Book Appointment
      </button>
    </div>
  );
};

export default BookAppointment;
