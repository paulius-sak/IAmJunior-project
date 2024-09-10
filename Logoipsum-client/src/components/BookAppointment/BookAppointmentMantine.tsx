import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import './BookAppointmentMantine.scss';

interface BookAppointmentMantineProps {
  value: Date | null;
  onDateChange: (date: Date | null) => void;
}

const BookAppointmentMantine = ({ value, onDateChange }: BookAppointmentMantineProps) => {
  return (
    <DatePicker
      value={value}
      onChange={onDateChange}
      allowDeselect
      size="md"
    />
  );
};

export default BookAppointmentMantine;