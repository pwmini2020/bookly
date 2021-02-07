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
export const filterBookings = (token, filterSettings) => {
  return async (dispatch) => {
    try {
      dispatch(fetchBookingsInProgress());
      const response = await getFilteredBookings(token, filterSettings);

      // DEBUG
      // (index === each item in response array)
      // we have to parse string response.content[index].item.details to json
      // console.log(JSON.parse(response.content[0].item.details));

      const bookingsList = response.content;

      dispatch(saveBookings(bookingsList));
      dispatch(fetchBookingsSucceeded());
    } catch (error) {
      console.error(error);
      dispatch(fetchBookingsFailed());
    }
  };
};
