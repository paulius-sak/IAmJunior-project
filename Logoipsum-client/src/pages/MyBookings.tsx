import React, { useEffect, useState } from 'react';
import { fetchBookingsByEmail } from '../api/booking';
import { useUser } from '../context/UserContext';
import { Booking } from '../types/booking'; 

const MyBookings = () => {
  const { user } = useUser();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      const getBookings = async () => {
        try {
          const data = await fetchBookingsByEmail(user.email);
          setBookings(data.bookings);
        } catch (err) {
          console.error('Error fetching bookings:', err);
          setError('Failed to load bookings.');
        } finally {
          setLoading(false);
        }
      };
      getBookings();
    } else {
      setError('No user found.');
      setLoading(false);
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking._id}>
              {booking.date} - {booking.time} - {booking.businessId}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;