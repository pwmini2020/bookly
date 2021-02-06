import BookingsFilterPanel from "../components/BookingsFilterPanel";
import BookingsList from "../components/BookingsList";

import MockBookings from "../mockData/AllBookings.json";
import DetailsDisplay from "../components/DetailsDisplay";

const SummaryPage = (props) => {
  return (
    <div>
      <DetailsDisplay data={MockBookings[0]} />
      <BookingsList />
      <BookingsFilterPanel />
    </div>
  );
};

export default SummaryPage;
