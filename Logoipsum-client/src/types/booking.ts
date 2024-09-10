export interface Booking {
    _id: string;
    businessId: string;
    date: string;
    time: string;
    userEmail: string;
    userName: string;
    status: string;  // pending, confirmed, canceled, etc.
  }
  
  export interface BookingResponse {
    booking: Booking;
  }
  
  export interface BookingsResponse {
    bookings: Booking[];
  }
  
  export interface CreateBookingPayload {
    businessId: string;
    date: string;
    time: string;
    userEmail: string;
    userName: string;
  }
  
  export interface UpdateBookingPayload {
    status?: string;
    date?: string;
    time?: string;
  }