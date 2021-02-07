import bookingsData from "../mockData/allBookings2.json";

import BookingsListItem from "./BookingsListItem";
import NavButtons from "./NavButtons";
import Table from "react-bootstrap/Table";

import "../styles/BookingsListItem.css";

const BookingsList = (props) => {
  const fetchNextPage = () => {
    console.log("Next button pressed");
    const parsedDetails = JSON.parse(bookingsData[0].item.details);
    console.log(parsedDetails);
  };

  const fetchPreviousPage = () => {
    console.log("Previous button pressed.");
  };

  return (
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
          {bookingsData.map((booking) => (
            <BookingsListItem key={booking.id} data={booking} />
          ))}
        </tbody>
      </Table>

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
