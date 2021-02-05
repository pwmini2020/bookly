const initialState = {
  fetchInProgress: false,
  bookings: [],
};

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKINGS_IN_PROGRESS": {
      return {
        ...state,
        fetchInProgress: true,
      };
    }

    case "FETCH_BOOKINGS_SUCCEDED": {
      return {
        ...state,
        fetchInProgress: false,
      };
    }

    case "FETCH_BOOKINGS_FAILED": {
      console.error(
        "ERROR (bookingsReducer reducer)",
        action.type,
        action.payload,
        action.meta
      );

      return {
        ...state,
        fetchInProgress: false,
        bookings: [],
      };
    }

    case "SAVE_FETCHED_BOOKINGS": {
      return {
        ...state,
        bookings: action.payload.bookings,
      };
    }

    default:
      return state;
  }
};

export default bookingsReducer;
