import bookingsData from "../mockData/allBookings.json";

import BookingsListItem from "./BookingsListItem";
import NavButtons from "./NavButtons";

const BookingsList = (props) => {
  return (
    <div>
      {bookingsData.map((booking) => (
        <BookingsListItem key={booking.id} data={booking} />
      ))}

      <NavButtons
        pageNumber={1}
        pageTotal={10}
        previousPage={() => {
          console.log("Previous button pressed.");
        }}
        nextPage={() => {
          console.log("Next button pressed");
        }}
      />
    </div>
  );
};

export default BookingsList;
