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

export const nextPageBookings = () => {
  return {
    type: "NEXT_PAGE_BOOKINGS",
  };
};

export const previousPageBookings = () => {
  return {
    type: "PREVIOUS_PAGE_BOOKINGS",
  };
};

export const returnToFirstPageBookings = () => {
  return {
    type: "RETURN_TO_FIRST_PAGE_BOOKINGS",
  };
};

const saveTotalPagesBookings = (totalPages) => {
  return {
    type: "SAVE_TOTAL_PAGES_BOOKINGS",
    payload: {
      totalPages: totalPages,
    },
  };
};

export const saveBookingsFilters = (filters) => {
  return {
    type: "SAVE_BOOKINGS_FILTERS",
    payload: {
      filters: filters,
    },
  };
};

export const filterBookings = (token, paginationSettings, filterSettings) => {
  return async (dispatch) => {
    try {
      dispatch(fetchBookingsInProgress());
      const responseBody = await getFilteredBookings(
        token,
        paginationSettings,
        filterSettings
      );

      // parse the details from string to JSON
      const pageSize = responseBody.numberOfElements;
      for (let i = 0; i < pageSize; i++) {
        try {
          const parsedDetails = JSON.parse(
            responseBody.content[i].item.details
          );
          responseBody.content[i].item.details = parsedDetails;
        } catch (error) {
          console.error("error while parsing item details: ", error);
        }
      }

      dispatch(saveBookings(responseBody.content));
      dispatch(saveTotalPagesBookings(responseBody.totalPages));
      dispatch(fetchBookingsSucceeded());
    } catch (error) {
      console.error(error);
      dispatch(fetchBookingsFailed());
    }
  };
};
