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

// NOT FINISHED
export const filterBookings = (token, paginationSettings, filterSettings) => {
  return async (dispatch) => {
    try {
      dispatch(fetchBookingsInProgress());
      const responseBody = await getFilteredBookings(
        token,
        paginationSettings,
        filterSettings
      );

      const pageSize = responseBody.numberOfElements;
      for (let i = 0; i < pageSize; i++) {
        const parsedDetails = JSON.parse(responseBody.content[i].item.details);
        responseBody.content[i].item.details = parsedDetails;
      }

      const bookingsList = responseBody.content;
      dispatch(saveBookings(bookingsList));
      dispatch(fetchBookingsSucceeded());
    } catch (error) {
      console.error(error);
      dispatch(fetchBookingsFailed());
    }
  };
};
