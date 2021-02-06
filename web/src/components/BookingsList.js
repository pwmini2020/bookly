import bookingsData from "../mockData/allBookings.json";

import BookingsListItem from "./BookingsListItem";
import NavButtons from "./NavButtons";

import "../styles/BookingsListItem.css";

const BookingsList = (props) => {
  const fetchNextPage = () => {
    console.log("Next button pressed");
  };

  const fetchPreviousPage = () => {
    console.log("Previous button pressed.");
  };

  return (
    <div>
      <div className="bookingsListRow">
        <div className="usernameColumn">Username</div>
        <div className="bookingTypeColumn">Type</div>
        <div className="bookingIdColumn">ID</div>
        <div className="bookingDetailsColumn">Details</div>
      </div>

      {bookingsData.map((booking) => (
        <BookingsListItem key={booking.id} data={booking} />
      ))}

      <NavButtons
        pageNumber={1}
        pageTotal={10}
        previousPage={() => fetchPreviousPage()}
        nextPage={() => fetchNextPage()}
      />
    </div>
  );
};

export default BookingsList;
