import { useState } from "react";
import { connect } from "react-redux";

import { filterBookings } from "../actionCreators/bookingsActionCreator";

import "../styles/BookingsFilterPanel.css";

const mapDispatchToProps = (dispatch) => ({
  filterBookings: (token, paginationSettings, filterSettings) =>
    dispatch(filterBookings(token, paginationSettings, filterSettings)),
});

const mapStateToProps = (state) => ({
  token: state.userAuth.token,
});

const BookingsFilterPanel = (props) => {
  const [username, setUsername] = useState("");
  const [carBookingsSelected, setCarBookingsSelected] = useState(true);
  const [flatBookingsSelected, setFlatBookingsSelected] = useState(true);
  const [parkingBookingsSelected, setParkingBookingsSelected] = useState(true);
  const [showActiveSelected, setShowActiveSelected] = useState(true);
  const [showInactiveSelected, setShowInactiveSelected] = useState(true);
  const [sortBy, setSortBy] = useState("");
  const [orderOfSorting, setOrderOfSorting] = useState("");

  const isOrderOfSortingDisabled = () => {
    return sortBy === "";
  };

  const getFilterSettings = () => {
    return {
      username: username,
      carBookingsSelected: carBookingsSelected,
      flatBookingsSelected: flatBookingsSelected,
      parkingBookingsSelected: parkingBookingsSelected,
      showActiveSelected: showActiveSelected,
      showInactiveSelected: showInactiveSelected,
      sortBy: sortBy,
      orderOfSorting: orderOfSorting,
    };
  };

  const TEMPpaginationSetting = { page: 0 };

  const submitFilterSettings = (e, filterSettings) => {
    e.preventDefault();
    props.filterBookings(props.token, TEMPpaginationSetting, filterSettings);
  };

  return (
    <div className="BookingsFilterPanel">
      <form onSubmit={(e) => submitFilterSettings(e, getFilterSettings())}>
        <div className="form-row my-1">
          <div className="col-md-4 mb-2">
            <label htmlFor="username" className="col-form-label">
              Username:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-md-4 mb-2">
            <label htmlFor="sortBy" className="col-form-label">
              Sort by:{" "}
            </label>

            <select
              className="custom-select"
              name="sortBy"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value=""></option>
              <option value="type">type</option>
              <option value="username">username</option>
            </select>
          </div>
          <div className="col-md-4 mb-2">
            <label htmlFor="orderOfSorting" className="col-form-label">
              Order of sorting:{" "}
            </label>

            <select
              name="orderOfSorting"
              className="custom-select"
              onChange={(e) => setOrderOfSorting(e.target.value)}
              disabled={isOrderOfSortingDisabled()}
            >
              <option value=""></option>
              <option value="ascending">ascending</option>
              <option value="descending">descending</option>
            </select>
          </div>
        </div>

        <div className="form-row my-1">
          <div className="form-check form-check-inline mx-1">
            <label htmlFor="carBookings" className="form-check-label">
              Car:
            </label>
            <input
              className="form-check-input mx-1"
              type="checkbox"
              name="carBookings"
              defaultChecked={carBookingsSelected}
              value={carBookingsSelected}
              onChange={(e) => setCarBookingsSelected(e.target.checked)}
            />
          </div>

          <div className="form-check form-check-inline mx-1">
            <label htmlFor="flatBookings" className="form-check-label">
              Flat:
            </label>
            <input
              className="form-check-input mx-1"
              type="checkbox"
              name="flatBookings"
              defaultChecked={flatBookingsSelected}
              value={flatBookingsSelected}
              onChange={(e) => setFlatBookingsSelected(e.target.checked)}
            />
          </div>

          <div className="form-check form-check-inline mx-1">
            <label htmlFor="parkingBookings" className="form-check-label">
              Parking:
            </label>
            <input
              className="form-check-input mx-1"
              type="checkbox"
              name="parkingBookings"
              defaultChecked={parkingBookingsSelected}
              value={parkingBookingsSelected}
              onChange={(e) => setParkingBookingsSelected(e.target.checked)}
            />
          </div>

          <div className="form-check form-check-inline ml-5 mr-1">
            <label htmlFor="showActive" className="form-check-label">
              Active:
            </label>
            <input
              className="form-check-input mx-1"
              type="checkbox"
              name="showActive"
              defaultChecked={showActiveSelected}
              value={showActiveSelected}
              onChange={(e) => setShowActiveSelected(e.target.checked)}
            />
          </div>

          <div className="form-check form-check-inline mx-1">
            <label htmlFor="showInactive" className="form-check-label">
              Inactive:
            </label>
            <input
              className="form-check-input mx-1"
              type="checkbox"
              name="showInactive"
              defaultChecked={showInactiveSelected}
              value={showInactiveSelected}
              onChange={(e) => setShowInactiveSelected(e.target.checked)}
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-sm mx-5"
            value="Filter"
          />
        </div>
      </form>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingsFilterPanel);
