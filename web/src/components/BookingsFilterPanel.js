import { useState } from "react";

import "../styles/BookingsFilterPanel.css";

const BookingsFilterPanel = (props) => {
  const [username, setUsername] = useState("");
  const [carBookingsSelected, setCarBookingsSelected] = useState(false);
  const [flatBookingsSelected, setFlatBookingsSelected] = useState(false);
  const [parkingBookingsSelected, setParkingBookingsSelected] = useState(false);

  const getFilterSettings = () => {
    return {
      username: username,
      carBookingsSelected: carBookingsSelected,
      flatBookingsSelected: flatBookingsSelected,
      parkingBookingsSelected: parkingBookingsSelected,
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
      </form>
    </div>
  );
};

export default BookingsFilterPanel;
