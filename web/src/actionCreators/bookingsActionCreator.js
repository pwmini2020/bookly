import { getFilteredBookings } from "../api/bookingsApi";

const fetchBookingsInProgress = () => {
  return {
    type: "FETCH_BOOKINGS_IN_PROGRESS",
  };
};

const fetchBookingsSucceeded = () => {
  return {
    type: "FETCH_BOOKINGS_SUCCEDED",
  };
};

const fetchBookingsFailed = () => {
  return {
    type: "FETCH_BOOKINGS_FAILED",
    payload: new Error("failed to fetch bookings"),
    error: true,
  };
};

const saveBookings = (bookings) => {
  return {
    type: "SAVE_FETCHED_BOOKINGS",
    payload: {
      bookings: bookings,
    },
  };
};

export const filterBookings = (filterSettings) => {
  return async (dispatch) => {
    try {
      dispatch(fetchBookingsInProgress());
      const response = await getFilteredBookings(filterSettings);
      dispatch(saveBookings(response));
      dispatch(fetchBookingsSucceeded());
    } catch (error) {
      console.error(error);
      dispatch(fetchBookingsFailed());
    }
  };
};
