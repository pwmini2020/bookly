import { useState } from "react";
import { connect } from "react-redux";

import { filterBookings } from "../actionCreators/bookingsActionCreator";

import "../styles/BookingsFilterPanel.css";

const mapDispatchToProps = (dispatch) => ({
  filterBookings: (filterSettings) => dispatch(filterBookings(filterSettings)),
});

const BookingsFilterPanel = (props) => {
  const [username, setUsername] = useState("");
  const [carBookingsSelected, setCarBookingsSelected] = useState(false);
  const [flatBookingsSelected, setFlatBookingsSelected] = useState(false);
  const [parkingBookingsSelected, setParkingBookingsSelected] = useState(false);
  const [showActiveSelected, setShowActiveSelected] = useState(false);
  const [showInactiveSelected, setShowInactiveSelected] = useState(false);
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

  const submitFilterSettings = (e, filterSettings) => {
    e.preventDefault();
    props.filterBookings(filterSettings);
  };

  return (
    <div className="BookingsFilterPanel">
      <h1>filter panel</h1>

      <form onSubmit={(e) => submitFilterSettings(e, getFilterSettings())}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <label htmlFor="carBookings">Car:</label>
        <input
          type="checkbox"
          name="carBookings"
          value={carBookingsSelected}
          onChange={(e) => setCarBookingsSelected(e.target.checked)}
        />

        <label htmlFor="flatBookings">Flat:</label>
        <input
          type="checkbox"
          name="flatBookings"
          value={flatBookingsSelected}
          onChange={(e) => setFlatBookingsSelected(e.target.checked)}
        />

        <label htmlFor="parkingBookings">Parking:</label>
        <input
          type="checkbox"
          name="parkingBookings"
          value={parkingBookingsSelected}
          onChange={(e) => setParkingBookingsSelected(e.target.checked)}
        />
        <br />

        <label htmlFor="sortBy">Sort by: </label>
        <select name="sortBy" onChange={(e) => setSortBy(e.target.value)}>
          <option value=""></option>
          <option value="type">type</option>
          <option value="username">username</option>
        </select>
        <br />

        <label htmlFor="orderOfSorting">Order of sorting: </label>
        <select
          name="orderOfSorting"
          onChange={(e) => setOrderOfSorting(e.target.value)}
          disabled={isOrderOfSortingDisabled()}
        >
          <option value=""></option>
          <option value="ascending">ascending</option>
          <option value="descending">descending</option>
        </select>
        <br />

        <label htmlFor="showActive">Active:</label>
        <input
          type="checkbox"
          name="showActive"
          value={showActiveSelected}
          onChange={(e) => setShowActiveSelected(e.target.checked)}
        />

        <label htmlFor="showInactive">Inactive:</label>
        <input
          type="checkbox"
          name="showInactive"
          value={showInactiveSelected}
          onChange={(e) => setShowInactiveSelected(e.target.checked)}
        />
        <br />

        <input type="submit" value="Filter" />
      </form>
    </div>
  );
};

export default connect(() => ({}), mapDispatchToProps)(BookingsFilterPanel);
