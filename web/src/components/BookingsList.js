import BookingsListItem from "./BookingsListItem";
import NavButtons from "./NavButtons";
import Table from "react-bootstrap/Table";

import { useEffect } from "react";

import "../styles/BookingsListItem.css";

import {
  nextPageBookings,
  previousPageBookings,
  filterBookings,
} from "../actionCreators/bookingsActionCreator";

import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  nextPage: () => dispatch(nextPageBookings()),
  previousPage: () => dispatch(previousPageBookings()),
  filterBookings: (token, paginationSettings, filterSettings) =>
    dispatch(filterBookings(token, paginationSettings, filterSettings)),
});

const mapStateToProps = (state) => ({
  token: state.userAuth.token,
  filterSettings: state.bookings.filters,
  totalPages: state.bookings.totalPages,
  page: state.bookings.page,
  fetchInProgress: state.bookings.fetchInProgress,
  bookings: state.bookings.bookings,
});

const BookingsList = (props) => {
  useEffect(() => {
    props.filterBookings(props.token, { page: props.page }, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchNextPage = () => {
    if (props.page + 1 < props.totalPages) {
      props.nextPage();
      const paginationSettings = { page: props.page + 1 };
      props.filterBookings(
        props.token,
        paginationSettings,
        props.filterSettings
      );
    }
  };

  const fetchPreviousPage = () => {
    if (props.page - 1 >= 0) {
      props.previousPage();
      const paginationSettings = { page: props.page - 1 };
      props.filterBookings(
        props.token,
        paginationSettings,
        props.filterSettings
      );
    }
  };

  return (
    <div>
      {props.fetchInProgress ? (
        <div className="text-center">
          <br />
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div style={{ margin: "10px" }}>
          <Table bordered variant="secondary">
            <thead>
              <tr>
                <th width="15%">Username</th>
                <th width="15%">Type</th>
                <th width="15%">ID</th>
                <th width="55%" colSpan="2">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {props.bookings.map((booking) =>
                booking != null && booking.item != null ? (
                  <BookingsListItem key={booking.id} data={booking} />
                ) : null
              )}
            </tbody>
          </Table>

          <NavButtons
            pageNumber={props.page + 1}
            pageTotal={props.totalPages}
            previousPage={() => fetchPreviousPage()}
            nextPage={() => fetchNextPage()}
          />
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingsList);
