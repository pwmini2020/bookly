const initialState = {
  fetchInProgress: false,
  page: 0,
  totalPages: 0,
  bookings: [],
  filters: {},
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
        totalPages: 0,
        page: 0,
      };
    }

    case "SAVE_FETCHED_BOOKINGS": {
      return {
        ...state,
        bookings: action.payload.bookings,
      };
    }

    case "NEXT_PAGE_BOOKINGS": {
      return {
        ...state,
        page: state.page + 1,
      };
    }

    case "PREVIOUS_PAGE_BOOKINGS": {
      return {
        ...state,
        page: state.page - 1,
      };
    }

    case "SAVE_TOTAL_PAGES_BOOKINGS": {
      return {
        ...state,
        totalPages: action.payload.totalPages,
      };
    }

    case "SAVE_BOOKINGS_FILTERS": {
      return {
        ...state,
        filters: action.payload.filters,
      };
    }

    default:
      return state;
  }
};

export default bookingsReducer;
