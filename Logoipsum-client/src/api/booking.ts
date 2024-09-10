import AxiosInstance from "./axiosInstance";
import { BookingResponse, BookingsResponse, UpdateBookingPayload, CreateBookingPayload } from "../types/booking";


export const fetchBookingById = async (id: string): Promise<BookingResponse> => {
  const response = await AxiosInstance.get(`/bookings/${id}`);
  return { booking: response.data.booking };
};

export const updateBookingById = async (id: string, payload: UpdateBookingPayload): Promise<BookingResponse> => {
  const response = await AxiosInstance.put(`/bookings/${id}`, payload);
  return { booking: response.data.booking };
};

export const createBooking = async (payload: CreateBookingPayload): Promise<BookingResponse> => {
  const response = await AxiosInstance.post('/bookings', payload);
  return { booking: response.data.booking };
};

export const fetchBookingsByEmail = async (email: string): Promise<BookingsResponse> => {
  const response = await AxiosInstance.get(`/bookings/user/${email}`);
  return { bookings: response.data.myBookings };
};